'use client'

import Image from 'next/image'
import { Example } from '@/components/example'
import { useSwitchTwClassStore } from '@/providers/switch-tw-class'
import { cn } from '@/lib/utils'

/*
[aspect-ratio](https://tailwindcss.com/docs/aspect-ratio)

声明元素的宽高比。
*/
export default function AspectRatio() {
	const { switchedTwClass } = useSwitchTwClassStore()
  return (
		<>
			<Example resizable className="p-2 bg-slate-200 rounded-xs md:rounded-md w-2xl">
				<Image className={cn('mx-auto', switchedTwClass)} width="400" height="400"  src="https://picsum.photos/id/9/400" alt="" />
			</Example>
		</>
  )
}

