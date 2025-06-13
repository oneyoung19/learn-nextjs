export default function Tailwind() {
  return (
    <div className="dark" data-lang="en">
			<p className="w-auto text-2xl gap-2 mt-2.5 animate-bounce dark:font-light dark:bg-red-500">Tailwind</p>
			<p className="animate-in fade-in slide-in-from-top-8 duration-500 bg-[var(--color-android)] text-ios">Animate</p>

			<div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
				<div className="flex animate-pulse space-x-4">
					<div className="size-10 rounded-full bg-gray-200"></div>
					<div className="flex-1 space-y-6 py-1">
						<div className="h-2 rounded bg-gray-200"></div>
						<div className="space-y-3">
							<div className="grid grid-cols-3 gap-4">
								<div className="col-span-2 h-2 rounded bg-gray-200"></div>
								<div className="col-span-1 h-2 rounded bg-gray-200"></div>
							</div>
							<div className="h-2 rounded bg-gray-200"></div>
						</div>
					</div>
				</div>
			</div>

			<button type="button" className="bg-indigo-600" disabled>
				<svg className="mr-3 size-5 motion-safe:animate-spin" viewBox="0 0 24 24">
				</svg>
				Processing
			</button>

			<div className="table">
				<div className="row">Layer</div>
			</div>

		</div>
  )
}
