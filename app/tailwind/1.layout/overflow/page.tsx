const list = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
]

export default function Overflow () {
	return (
		<ul className="font-[200] font-[sans] rounded">
			{ list.map(item => (
				<li key={ item }>
					<p>{ item }</p>
				</li>
			)) }
		</ul>
	)
}
