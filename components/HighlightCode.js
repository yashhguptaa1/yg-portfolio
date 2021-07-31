import highlight from 'highlight.js';
import { createRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

const HighlightCode = ({children, language}) => {
  const code = createRef();

  useEffect(() => {
    debugger
    highlight.highlightBlock(findDOMNode(code.current));
  }, [])

  return (
    <pre>
      <code
        ref={code}
        className="java">
        {children}
      </code>
    </pre>
  )
}


export default HighlightCode;