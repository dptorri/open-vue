const copy = (value: string) => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(value)
  }

  return Promise.reject('Clipboard is not supported')
}