'use client'

import Image from 'next/image'
import { Example } from '@/components/example'
import { useSwitchTwClassStore } from '@/providers/switch-tw-class'

/*
[aspect-ratio](https://tailwindcss.com/docs/aspect-ratio)

声明元素的宽高比。
*/
export default function AspectRatio() {
	const { switchedTwClass } = useSwitchTwClassStore()
  return (
		<>
			<Example resizable className="p-2 bg-slate-200 rounded-xs md:rounded-md">
				<Image className="mx-auto aspect-square" width="400" height="400"  src="https://picsum.photos/id/9/400" alt="" />
				{ switchedTwClass }
			</Example>
		</>
  )
}

