import { useEffect, useState } from 'react'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
})

export function FormattedDate({ date, ...props }) {
	const [formattedDate, setFormattedDate] = useState('')

	useEffect(() => setFormattedDate(dateFormatter.format(date)), [])

	return (
		<time dateTime={date.toISOString()} {...props}>
			{formattedDate}
		</time>
	)
}
