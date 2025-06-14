'use client'

import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

async function fetchPosts() {
	const res = await fetch(postsUrl)
	return res.json()
}

export default function Posts(props) {
	const [posts, setPosts] = useState(props.posts || [])

	const { data, refetch } = useQuery({
		queryKey: ['posts'],
		queryFn: fetchPosts,
		initialData: props.posts, // 使用服务端预渲染的数据作为初始数据
		enabled: false, // 默认不自动获取数据
	})

	// 当数据更新时，更新本地状态
	useEffect(() => {
		if (data) {
			setPosts(data)
		}
	}, [data])

	return (
		<div>
			<button
				onClick={() => refetch()}
				className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				刷新数据
			</button>
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
