/**
 * Returns the base URL for the current deployment (e.g. '/' for local, '/DigiSalad-test/' for GitHub Pages).
 * Use this for all public folder asset paths to ensure correct resolution when deployed.
 */
export function useBaseUrl(): string {
  return import.meta.env.BASE_URL
}

/**
 * Resolves a public asset path with the base URL.
 * @param path - Path relative to public folder (with or without leading slash)
 */
export function resolvePublicPath(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalizedPath}`
}
