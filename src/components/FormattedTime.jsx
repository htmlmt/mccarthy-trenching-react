import { useEffect, useState } from 'react'

const timeFormatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
	hour: 'numeric',
	minute: 'numeric',
})

export function FormattedTime({ time, ...props }) {
	const [formattedTime, setFormattedTime] = useState('')

	useEffect(() => setFormattedTime(timeFormatter.format(time)), [])

	return (
		<time dateTime={time.toISOString()} {...props}>
			{formattedTime}
		</time>
	)
}
