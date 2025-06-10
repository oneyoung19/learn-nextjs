'use client'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

/*
[columns](https://tailwindcss.com/docs/columns)

列布局，能够很方便的实现瀑布流效果。
*/

const placeholder = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABgAGADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ApABpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=='
const fallback = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v1myHgAG0AJMYfF/pgAAAABJRU5ErkJggg=='

function ImageItem({ item }) {
  const { id, random, loading } = item
  const width = 200
  const height = Math.ceil(random * 2) * width
  const ratio = width / height
  const [src, setSrc] = useState(`https://picsum.photos/id/${id}/${width}/${height}`)
  const [load, setLoad] = useState(loading)

  return (
    <Image
      className={clsx('mb-4 rounded-md', load && 'animate-pulse')}
      style={{ aspectRatio: `${ratio}` }}
      width={width}
      height={height}
      src={src}
      alt={`image ${id}`}
			loading='lazy'
      placeholder={placeholder}
      onLoad={() => setLoad(false)}
      onError={() => {
        setSrc(fallback)
        setLoad(false)
      }}
    />
  )
}

export default function ImageColumns({ list }) {
  return (
    <div>
      <p className="h1">Columns</p>
      <div className="columns-3 gap-3 md:columns-8">
        {list.map((item) => (
          <ImageItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
