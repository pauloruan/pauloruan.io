export function countWords(blocks: IBodyContent[]): number[][] {
  const words = blocks.map((block) => {
    return block.children.map((child) => {
      return child.text.split(" ").length
    })
  })
  return words
}

export function readingTime(blocks: IBodyContent[]): string {
  const words = countWords(blocks)
  const wordsPerMinute = 225
  const totalWords = words.flat().reduce((acc, curr) => acc + curr)
  const readingTime = Math.ceil(totalWords / wordsPerMinute)
  return `${readingTime} min de leitura`
}
