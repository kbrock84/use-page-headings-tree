import React, { useEffect, useRef, useState } from "react";
import { usePageHeadingsTree } from "use-page-headings-tree";

const SomeHeadings = () => {
	const headingsContainerRef = useRef();
	const [pageHeadingNodes, setPageHedingNodes] = useState([]);
	const [pageHeadingTree, setPageHeadingTree] = useState(null);

	useEffect(() => {
		const headingNodes = headingsContainerRef.current.querySelectorAll(
			"h2,h3,h4,h5,h6"
		);
		setPageHedingNodes(headingNodes);
	}, []);

	usePageHeadingsTree(pageHeadingNodes, setPageHeadingTree, false);

	const renderNodeList = (node) => (
		<li key={node.id}>
			{node.text}
			{node.childNodes.length > 0 ? (
				<ul>{node.childNodes.map(renderNodeList)}</ul>
			) : null}
		</li>
	);

	return (
		<div className="card bg-light">
			<div
				ref={headingsContainerRef}
				className="bg-dark p-3 text-light rounded-top"
			>
				<h1>This is the main page heading (not included)</h1>
				<h2 id="hid1">First h2</h2>
				<h3 id="hid2">First h3</h3>
				<h3 id="hid3">Second h3</h3>
				<h2 id="hid4">Second h2</h2>
				<h3 id="hid5">Third h3</h3>
				<h4 id="hid6">First h4</h4>
				<h5 id="hid7">First h5</h5>
				<h6 id="hid8">First h6</h6>
				<h3 id="hid9">Fourth h3</h3>
			</div>
			<div className="p-5">
				<h2>Result</h2>
				<pre>
					{pageHeadingTree ? (
						<ul>{pageHeadingTree.map(renderNodeList)}</ul>
					) : null}
				</pre>
			</div>
		</div>
	);
};

const App = () => {
	return (
		<div className="m-5">
			<SomeHeadings />
		</div>
	);
};
export default App;
