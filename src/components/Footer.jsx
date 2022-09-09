import { AboutSection } from '@/components/AboutSection'

export function Footer(album) {
	return (
		<footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
			<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
				<AboutSection album={album} />
			</div>
		</footer>
	)
}
