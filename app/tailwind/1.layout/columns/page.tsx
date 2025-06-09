import Image from 'next/image'
// import { Loader } from 'lucide-react'

/*
[columns](https://tailwindcss.com/docs/columns)

列布局，能够很方便的实现瀑布流效果。
*/

const length = 200

export default function Columns() {
  return (
    <div>
			<p className="h1">Columns</p>
			<div className="columns-3 gap-3 md:columns-8">
			 	{/* <Loader className="animate-spin"></Loader> */}
				{Array.from({ length }, (_, i) => i + 1).map((item, index) => {
					const width = 200
					const height = Math.ceil(Math.random() * 2) * width
					const ratio = width / height
					return (
						<Image key={item} className="mb-4 rounded-md" style={{ aspectRatio: `${ratio}` }} width={width} height={height} src={`https://picsum.photos/id/${index}/${width}/${height}`} alt={`image ${index}`} />
					)
				})}
			</div>
		</div>
  );
}
