import { cn } from "@/lib/utils"
import { HTMLProps, createRef } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface CodeProps extends HTMLProps<HTMLElement> {}

interface CodeValue {
  code: string
  language: string
}

const syntaxHighlighterRef = createRef<SyntaxHighlighter>()

export function Code({ value, className, ...props }: CodeProps) {
  const isValue = value as unknown as CodeValue

  return (
    <SyntaxHighlighter
      {...props}
      PreTag="pre"
      language={String(isValue.language).toLowerCase()}
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
      {String(isValue.code).trim()}
    </SyntaxHighlighter>
  )
}
