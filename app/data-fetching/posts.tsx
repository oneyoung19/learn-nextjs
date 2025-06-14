'use client'
import * as React from 'react'

import { useQuery } from '@tanstack/react-query'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

async function fetchPosts() {
	const res = await fetch(postsUrl)
	return res.json()
}

const TestRender = React.memo(function TestRender() {
	// 使用 useEffect 追踪组件的挂载和更新
	React.useEffect(() => {
		console.log('TestRender mounted')
		return () => {
			console.log('TestRender unmounted')
		}
	}, [])

	// 使用 useLayoutEffect 追踪实际的渲染
	React.useLayoutEffect(() => {
		console.log('TestRender layout effect')
	})

	console.log('TestRender render')
	return (
		<p>TestRender</p>
	)
})
// function TestRender() {
// 	console.log('TestRender')
// 	return (
// 		<p>TestRender</p>
// 	)
// }

export default function Posts(props) {
	// const [posts, setPosts] = useState(props.posts || [])
	// 直接使用 React Query 的数据，不需要额外的 state
	const { data: posts = props.posts, refetch } = useQuery({
		queryKey: ['posts'],
		queryFn: fetchPosts,
		initialData: props.posts,
		enabled: false,
	})

	return (
		<div>
			<button
				onClick={() => refetch()}
				className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				刷新数据
			</button>
			<TestRender />
			<ul>
				{
					posts.map(post => (
						<li key={post.id}>
							<p>{post.title}</p>
						</li>
					))
				}
			</ul>
		</div>
	)
}
