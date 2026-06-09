function generateUsername(name: string): string {
  const base =
    name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_|_$/g, '')
      .slice(0, 20) || 'user'
  const suffix = Math.random().toString(36).slice(2, 8)
  return `${base}_${suffix}`
}
