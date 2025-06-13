import Image from 'next/image'
import snowMountainsImg from '@/assets/images/snow-mountains.jpeg'
import { cn } from '@/lib/utils'

const list = [
	'object-top-left',
	'object-top',
	'object-top-right',
	'object-left',
	'object-center',
	'object-right',
	'object-bottom-left',
	'object-bottom',
	'object-bottom-right'
]
export default function ObjectPosition() {
	return (
		<ul>
			{ list.map(item => (
				<li key={ item }>
					<p>{ item }</p>
					<Image className={ cn('size-24', item) } src={ snowMountainsImg } />
				</li>
			)) }
		</ul>
	)
}
