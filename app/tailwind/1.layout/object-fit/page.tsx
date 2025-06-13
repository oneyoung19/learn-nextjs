import Image from 'next/image'
import snowMountainsImg from '@/assets/images/snow-mountains.jpeg'

export default function ObjectFit () {
	return (
		<div>
			<Image className="h-48 w-96 object-cover" src={ snowMountainsImg } />
		</div>
	)
}
