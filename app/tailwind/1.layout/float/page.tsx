import Image from 'next/image'
import mountainsImg from '@/assets/images/mountains.jpg'
import Words from '@/components/Words'

export default function Float () {
	return (
		<article className="mx-auto w-full md:w-120 border border-gray-300 rounded-md shadow-sm p-2">
			<Image className="float-right" src={mountainsImg} alt="mountains"/>
			<Words></Words>
		</article>
	)
}
