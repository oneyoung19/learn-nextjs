import Words from '@/components/Words'

export default function Isolation () {
	return (
		<div className="isolate">
			<div className="bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="relative isolate px-6 pt-14 lg:px-8">
						<Words className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></Words>
					</div>
				</div>
			</div>
		</div>
	)
}