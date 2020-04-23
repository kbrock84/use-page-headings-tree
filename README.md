# use-page-headings-tree

> A React hook to get tree data from a list of heading nodes

[![NPM](https://img.shields.io/npm/v/use-page-headings-tree.svg)](https://www.npmjs.com/package/use-page-headings-tree) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash

npm install --save use-page-headings-tree

```

## Example Usage

**[Check out the example](https://kbrock84.github.io/use-page-headings-tree/)
that uses the following code or
[check out the example source](https://github.com/kbrock84/use-page-headings-tree/blob/master/example/src/App.js)!**

Get a list of heading nodes

```jsx
useEffect(() => {
	const headingNodes = headingsContainerRef.current.querySelectorAll(
		"h2,h3,h4,h5,h6"
	);
	setPageHeadingNodes(headingNodes);
}, []);
```

Pass the node list, a callback to set the tree data and weather you would like the expanded attribute to be `true` or `false` by default

```jsx
usePageHeadingsTree(pageHeadingNodes, setPageHeadingTree, false);
```

Use the tree data (recursion is the simplest method)

```jsx
const renderNodeList = (node) => (
	<>
		<li>{node.text}</li>
		{node.childNodes.length > 0 ? (
			<ul key={node.id}>{node.childNodes.map(renderNodeList)}</ul>
		) : null}
	</>
);
```

## `usePageHeadingsTree` hook

```tsx

  usePageHeadingsTree = (
    pageHeadingNodes: NodeList,
    callback: (treeNodes: TreeNodes) => void,
    defaultToExpand: bool,
    ) => { ... }

```

### Param List

1.  `pageHeadingNodes: NodeList` -> NodeList as returned by `Element.querySelectorAll`
2.  `callback: (treeNodes: TreeNode[]) => void` -> callback to set an array of `TreeNodes` (see below)
3.  `defaultToExpand: bool` -> default value for `TreeNode.expanded` on all tree nodes.

## Sample `TreeNode`

```jsx
{
  // the id from the header element (if any)
  // useful for generating a linked table of contents
  id: "my-fancy-header-id",

  // the text inside the header element
  text: "some header text",

  // expanded attribute
  // useful for creating expand/collapse table of contents
  // default for all nodes set as third argument of usePageHeadingsTree
  expanded: true,

  // the total number of nested children contained in any given node
  childrenCount: 3,

  // root id for node
  rootId: "generated unique id",

  // a copy of the heading element from the original NodeList
  element: heading,

  // a list of child nodes
  childNodes: [],

  // the index of the node from the original node list
  index: 6,
}

```

## License

MIT © [kbrock84](https://github.com/kbrock84)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
