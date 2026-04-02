export function renderContent(text) {
  if (!text) return null

  const lines = text.split('\n').filter((line) => line.trim() !== '')
  const elements = []
  let listItems = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="mt-3 space-y-2">
          {listItems.map((item, i) => (
            <li key={i} className="text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-secondary/40 before:rounded-full">
              {item}
            </li>
          ))}
        </ul>
      )
      listItems = []
    }
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      listItems.push(trimmed.slice(2))
    } else {
      flushList()
      elements.push(
        <p key={`p-${i}`} className="text-secondary leading-relaxed mt-3 first:mt-0">
          {trimmed}
        </p>
      )
    }
  })

  flushList()
  return elements
}
