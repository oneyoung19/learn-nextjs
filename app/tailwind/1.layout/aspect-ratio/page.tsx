import Image from 'next/image'
import { Example } from '@/components/example'
import { SelectTable } from '@/components/selectTable'

/*
[aspect-ratio](https://tailwindcss.com/docs/aspect-ratio)

声明元素的宽高比。
*/
const tableMap = {
	headers: [
		{
			prop: 'twClass',
			label: 'Tailwind Class',
			selectable: true
		},
		{
			prop: 'twStyle',
			label: 'Style'
		}
	],
	rows: [
		{
			twClass: 'aspect-<ratio>',
			twStyle: 'aspect-ratio: <ratio>;'
		},
		{
			twClass: 'aspect-square',
			twStyle: 'aspect-ratio: 1 / 1;',
		},
		{
			twClass: 'aspect-video',
			twStyle: 'aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */'
		},
		{
			twClass: 'aspect-auto',
			twStyle: 'aspect-ratio: auto;'
		},
		{
			twClass: 'aspect-(<custom-property>)',
			twStyle: 'aspect-ratio: var(<custom-property>);'
		},
		{
			twClass: 'aspect-[<value>]',
			twStyle: 'aspect-ratio: <value>;'
		}
	]
}
export default function AspectRatio() {
	const { headers, rows } = tableMap
  return (
		<>
			<SelectTable headers={headers} rows={rows}></SelectTable>
			<Example resizable className="p-2 bg-slate-200 rounded-xs md:rounded-md">
				<Image className="mx-auto aspect-square" width="400" height="400"  src="https://picsum.photos/id/9/400" alt="" />
			</Example>
		</>
  )
}

// md:[width:var(--sidebar-width)]
