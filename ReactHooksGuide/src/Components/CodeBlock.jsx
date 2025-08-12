// src/components/CodeBlock.jsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // reset after 1.5s
  };

  return (
    <div className="relative my-4">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 px-3 py-1 text-xs bg-gray-700 text-white rounded hover:bg-gray-600"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Code Block */}
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
