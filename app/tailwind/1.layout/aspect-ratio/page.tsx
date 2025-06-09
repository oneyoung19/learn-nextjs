import Image from 'next/image'

/*
[aspect-ratio](https://tailwindcss.com/docs/aspect-ratio)

声明元素的宽高比。
*/
export default function AspectRatio() {
  return (
    <div className="p-2 bg-amber-300">
			<Image className="mx-auto aspect-2/3"width="200" height="300"  src="https://picsum.photos/id/9/400" alt="" />
    </div>
  );
}