export const svgTextMultiline = (element: HTMLElement, heightRow: number, viewportWidth: number) => {
  const text = element.innerHTML
  const words = text.split(' ')
  let line = ''

  const xPosition = viewportWidth >= 2030 ? -20 : viewportWidth >= 1760 ? -15 : -10

  element.innerHTML = `<tspan id="PROCESSING" dy=${heightRow}>busy</tspan >`

  let dy = heightRow
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '

    const tSpanEl = document.getElementById('PROCESSING')
    /*  Add line in tspan */
    if (tSpanEl) {
      tSpanEl.innerHTML = testLine

      const tspanSize = tSpanEl.getBoundingClientRect()
      const tspanWidth = tspanSize.width

      if (tspanWidth > viewportWidth) {
        element.innerHTML += '<tspan id="tspan' + n + '" x="' + xPosition + '" dy="' + dy + '">' + line + '</tspan>'
        line = words[n] + ' '
      } else {
        line = testLine
      }
    }
  }

  element.innerHTML += '<tspan x="' + xPosition + '" dy="' + dy + '">' + line + '</tspan>'
  const testEl = document.getElementById('PROCESSING')
  testEl ? testEl.remove() : null
}
