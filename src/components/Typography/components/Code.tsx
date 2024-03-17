import { cn } from "@/lib/utils"
import { HTMLProps, createRef } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface CodeProps extends HTMLProps<HTMLElement> {}

const syntaxHighlighterRef = createRef<SyntaxHighlighter>()

export function Code({ value, className, ...props }: CodeProps) {
  return (
    <SyntaxHighlighter
      {...props}
      PreTag="pre"
      language={value.language}
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
      className={cn("w-full font-code text-xs md:text-base", className)}
    >
      {String(value.code).replace(/\n$/, "")}
    </SyntaxHighlighter>
  )
}
