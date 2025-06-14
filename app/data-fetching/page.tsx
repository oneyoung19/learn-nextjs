import Posts from './posts'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

// export async function getServerSideProps() {
//   // 这句话是在渲染之前（服务器渲染时）获取数据
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()

//   return { props: { posts } }
// }

export default async function DataFetching() {
	const res = await fetch(postsUrl)
	const posts = await res.json()

	return (
		<div>
			<Posts posts={posts} />
		</div>
	)
}
