import Link from "next/link"
import React from "react"
import { Components } from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism"

export const components: Partial<Components> = {
  h3: ({ ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      className="text-2xl font-bold text-black dark:text-white font-sans my-2 py-1"
      {...props}
    />
  ),
  strong: ({ children, ...props }: React.HTMLProps<HTMLElement>) => (
    <strong
      className="text-base font-sans font-semibold text-black dark:text-white"
      {...props}
    >
      {children}
    </strong>
  ),
  p: ({ children, ...props }: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="text-sm md:text-base font-sans font-normal leading-relaxed text-theme-dark tracking-wide"
      {...props}
    >
      {children}
    </p>
  ),
  a: ({ children, ...props }: React.HTMLProps<HTMLAnchorElement>) => (
    <Link
      href={props.href as string}
      target="_blank"
      className="underline decoration-2 leading-relaxed tracking-wide font-semibold text-black dark:text-white text-sm md:text-base"
    >
      {children}
    </Link>
  ),
  pre: ({ children, ...props }: React.HTMLProps<HTMLPreElement>) => (
    <pre
      className="rounded-md overflow-hidden w-full p-1 my-2 font-code text-sm md:text-base bg-[#2e3440]"
      {...props}
    >
      {children}
    </pre>
  ),
  code({ children, className, ...props }) {
    const match = /language-(\w+)/.exec(className || "")
    const syntaxHighlighterRef = React.createRef<SyntaxHighlighter>()

    return match ? (
      <SyntaxHighlighter
        {...props}
        PreTag="div"
        language={match[1]}
        CodeTag={match[1]}
        style={nord}
        ref={syntaxHighlighterRef}
        wrapLines={false}
        wrapLongLines={false}
        customStyle={{
          padding: "8px",
          fontFamily: "'JetBrains Mono', monospace"
        }}
        codeTagProps={{
          style: {
            fontFamily: "'JetBrains Mono', monospace"
          }
        }}
        className="w-full font-code text-xs md:text-base"
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code
        {...props}
        className="rounded-md p-0.5 bg-cod-gray-200 dark:bg-cod-gray-800 font-code text-sm md:text-base"
      >
        {children}
      </code>
    )
  }
}
