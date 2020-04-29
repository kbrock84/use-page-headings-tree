import { v4 as uuid } from "uuid";
import * as React from "react";

const getParentMap = (headingLevel, latestRoots) => {
	return Object.keys(latestRoots)
		.map((k) => latestRoots[k])
		.slice(0, headingLevel[1] - 2);
};

const transformRootNode = (node, expanded) => ({
	...node,
	id: node.element.id,
	text: node.element.innerText || node.element.innerHTML,
	expanded: expanded,
});

const checkParent = (parent) => {
	if (!parent) {
		throw Error(
			"(usePageHeadingsTree.js): One of the tree nodes is missing a parent.\n" +
				"You may have skipped a heading level in your document or your query may " +
				'not contain a sequential list of heading nodes (Correct: "h2,h3,h4" Incorrect: "h2,h4")'
		);
	}
};

const checkTag = (tagName) => {
	if (!/^H[2-6]$/.test(tagName)) {
		throw Error(
			`(usePageHeadingsTree.js): <${tagName.toLowerCase()}> elements are not supported. ` +
				` Only heading elements (<h2> through <h6>)  are supported (for now).`
		);
	}
};

const getFlatNodeListFromHeadings = (headings) => {
	const latestRoots = {};
	const roots = { H2: {}, H3: {}, H4: {}, H5: {}, H6: {} };

	const getDefaultRoot = (heading, index) => ({
		childrenCount: 0,
		rootId: latestRoots[heading.tagName],
		element: heading,
		childNodes: [],
		index: index,
	});

	headings.forEach((h, i) => {
		checkTag(h.tagName);

		latestRoots[h.tagName] = uuid();
		if (h.tagName === "H2") {
			roots.H2[latestRoots.H2] = getDefaultRoot(h, i);
			return;
		}
		roots[h.tagName][latestRoots[h.tagName]] = {
			...getDefaultRoot(h, i),
			parentMap: getParentMap(h.tagName, latestRoots),
		};
	});

	return roots;
};

const getNodeTreeFromFlatNodeList = (roots, shouldDefaultToExpand) => {
	const rootKeys = Object.keys(roots);

	for (let i = rootKeys.length - 1; i >= 0; i--) {
		const parents = roots[rootKeys[i - 1]];
		const currentRoot = roots[rootKeys[i]];

		if (currentRoot) {
			Object.keys(currentRoot).forEach((childKey) => {
				const child = transformRootNode(
					currentRoot[childKey],
					shouldDefaultToExpand
				);
				if (child.parentMap) {
					const parentId =
						child.parentMap[child.parentMap.length - 1];
					const parent = parents[parentId];

					checkParent(parent);

					parent.childrenCount += child.childNodes.length + 1;
					parent.childNodes.push(child);
				}
			});
		}
	}
	const finalRoots = Object.keys(roots.H2).map((k) =>
		transformRootNode(roots.H2[k], shouldDefaultToExpand)
	);
	return finalRoots;
};

export const usePageHeadingsTree = (
	headings,
	callback,
	shouldDefaultToExpand
) => {
	React.useEffect(() => {
		const roots = getFlatNodeListFromHeadings(headings);
		const finalRoots = getNodeTreeFromFlatNodeList(
			roots,
			shouldDefaultToExpand
		);
		callback(finalRoots);
	}, [headings, shouldDefaultToExpand]);
};
