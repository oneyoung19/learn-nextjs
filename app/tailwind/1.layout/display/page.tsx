export default function Display () {
	return (
		<>
			<p>
				When controlling the flow of text, using the CSS property <span className="inline">display: inline</span> will cause the
				text inside the element to wrap normally.
			</p>
			<p>
				While using the property <span className="inline-block">display: inline-block</span> will wrap the element to prevent the
				text inside from extending beyond its parent.
			</p>
			<p>
				Lastly, using the property <span className="block">display: block</span> will put the element on its own line and fill its
				parent.
			</p>
		</>
	)
}
