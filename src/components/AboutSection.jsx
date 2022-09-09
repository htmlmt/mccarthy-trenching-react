import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props) {
	return (
		<section {...props}>
			<h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
				<TinyWaveFormIcon
					colors={['fill-blue-300', 'fill-indigo-300']}
					className="h-2.5 w-2.5"
				/>
				<span className="ml-2.5">About</span>
			</h2>
			<p className="mt-2 text-base leading-7 text-slate-700">
				Folk band from Omaha, with Dan McCarthy on guitar or piano, James Maakestad on upright bass and  and Kevin Donahue on drums.
			</p>
		</section>
	)
}
