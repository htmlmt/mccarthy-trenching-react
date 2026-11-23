// Let Sanity's image CDN do the resizing instead of the Next.js image
// optimizer, which fails on Netlify (sharp can't load its native binary).
export function sanityLoader({ src, width, quality }) {
	return `${src}?w=${width}&q=${quality || 75}&auto=format`
}
