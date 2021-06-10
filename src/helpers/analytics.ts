function initFathom(): void {
  const FATHOM_ID: string | undefined = process.env.REACT_APP_FATHOM_ID
  if (typeof FATHOM_ID === 'string') {
    const head = document.getElementsByTagName('head')[0]
    const fathomScript = document.createElement('script')
    fathomScript.type = 'text/javascript'
    fathomScript.src = 'https://cdn.usefathom.com/script.js'
    fathomScript.dataset.site = FATHOM_ID
    head.appendChild(fathomScript)
  }
}

export function initAnalytics(): void {
  initFathom()
}
