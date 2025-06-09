import Image from 'next/image'

export default function Columns() {
  return (
    <div>
			<p>Columns</p>
			<div className="columns-3 gap-4">
				<Image className="aspect-2/3" width="200" height="300" src="https://picsum.photos/200/300" alt="" />
				<Image className="aspect-square" width="200" height="200" src="https://picsum.photos/id/111/200" alt="" />
				<Image className="aspect-square" width="200" height="200" src="https://picsum.photos/id/222/200" alt="" />
				<Image className="aspect-square" width="200" height="200" src="https://picsum.photos/id/33/200" alt="" />
				<Image className="aspect-square" width="200" height="200" src="https://picsum.photos/id/444/200" alt="" />
				<Image className="aspect-square" width="200" height="200" src="https://picsum.photos/id/555/200" alt="" />
			</div>
		</div>
  );
}
