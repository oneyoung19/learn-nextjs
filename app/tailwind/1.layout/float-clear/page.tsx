import Image from 'next/image'
import SnowMountain from '@/assets/images/snow-mountains.jpeg'
import GreenMountain from '@/assets/images/green-mountains.jpeg'
import Words from '@/components/Words'

export default function FloatClear () {
	return (
		<article>
			<Image className="float-left rounded" width="138" src={ SnowMountain } alt="snow mountains" />
			<Image className="float-right rounded" width="220" src={ GreenMountain } alt="green mountains" />
			<Words className="clear-left"></Words>
		</article>
	)
}
