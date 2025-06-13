import Image from 'next/image'
import snowMountainsImg from '@/assets/images/snow-mountains.jpeg'
import Words from '@/components/Words'

export default function Float () {
	return (
		<article className="mx-auto w-full md:w-120 border border-gray-300 rounded-md shadow-sm p-2">
			<Image className="float-right" src={snowMountainsImg} alt="mountains"/>
			<Words></Words>
		</article>
	)
}
