import React from 'react'
import { useMyHook } from 'use-page-headings-tree'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App