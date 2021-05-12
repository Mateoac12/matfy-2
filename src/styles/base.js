export const RandomColor = () => {
  const randomColor = Math.round(
    Math.random() * (5 - 1) + 1
  )
  
  return `
    background-color: var(--background-color-${randomColor});
  `
}