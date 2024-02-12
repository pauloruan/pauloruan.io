export function countCharacters(text: string): number {
  const regex = /[^\w\d\u00C0-\u00FF]/g
  const words = text.trim().split(/\s+/)
  const wordsLengths = words.map((word) => word.replace(regex, "").length)
  const count = wordsLengths.reduce((acc, cur) => acc + cur, 0)
  return count
}

export function readingTime(text: string): string {
  const count = countCharacters(text)
  const wordsPerMinute = 225
  const readingTime = Math.ceil(count / wordsPerMinute)
  return `${readingTime} min de leitura`
}
