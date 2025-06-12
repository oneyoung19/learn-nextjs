import ImageColumns from './ImageColumns'

export default function Columns() {
	const length = 200
	const list = Array.from({ length }, (_, i) => {
		const random = Math.random()
		return {
			id: i,
			random,
			loading: true
		}
	})
  return (
		<ImageColumns list={list}></ImageColumns>
	)
}
