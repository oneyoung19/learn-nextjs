import Image from 'next/image'

/*
[aspect-ratio](https://tailwindcss.com/docs/aspect-ratio)

声明元素的宽高比。
*/
export default function AspectRatio() {
  return (
    <div className="p-2 bg-slate-200 rounded-xs md:rounded-md">
			<Image className="mx-auto aspect-square" width="400" height="400"  src="https://picsum.photos/id/9/400" alt="" />
    </div>
  )
}
