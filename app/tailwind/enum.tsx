export const routeEnums = [
	{
		title: 'Layout',
		items: [
			{
				title: 'aspect-ratio',
				url: '/tailwind/1.layout/aspect-ratio',
				tableMap: {
					headers: [
						{
							prop: 'twClass',
							label: 'Tailwind Class',
							selectable: true
						},
						{
							prop: 'twStyle',
							label: 'Style'
						}
					],
					rows: [
						{
							twClass: 'aspect-<ratio>',
							twStyle: 'aspect-ratio: <ratio>;'
						},
						{
							twClass: 'aspect-square',
							twStyle: 'aspect-ratio: 1 / 1;',
						},
						{
							twClass: 'aspect-video',
							twStyle: 'aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */',
							defaultSelected: true
						},
						{
							twClass: 'aspect-auto',
							twStyle: 'aspect-ratio: auto;'
						},
						{
							twClass: 'aspect-(<custom-property>)',
							twStyle: 'aspect-ratio: var(<custom-property>);'
						},
						{
							twClass: 'aspect-[<value>]',
							twStyle: 'aspect-ratio: <value>;'
						}
					]
				}
			},
			{
				title: 'columns',
				url: '/tailwind/1.layout/columns',
				tableMap: {
					headers: [
						{
							prop: 'twClass',
							label: 'Tailwind Class',
							selectable: true
						},
						{
							prop: 'twStyle',
							label: 'Style'
						}
					],
					rows: [
						{
							twClass: 'aspect-[<value>]',
							twStyle: 'aspect-ratio: <value>;'
						},
						{
							twClass: 'columns-<number>',
							twStyle: 'columns: <number>;'
						},
						{
							twClass: 'columns-3xs',
							twStyle: 'columns: var(--container-3xs); /* 16rem (256px) */'
						},
						{
							twClass: 'columns-2xs',
							twStyle: 'columns: var(--container-2xs); /* 18rem (288px) */'
						},
						{
							twClass: 'columns-xs',
							twStyle: 'columns: var(--container-xs); /* 20rem (320px) */'
						},
						{
							twClass: 'columns-sm',
							twStyle: 'columns: var(--container-sm); /* 24rem (384px) */'
						},
						{
							twClass: 'columns-md',
							twStyle: 'columns: var(--container-md); /* 28rem (448px) */'
						},
						{
							twClass: 'columns-lg',
							twStyle: 'columns: var(--container-lg); /* 32rem (512px) */'
						},
						{
							twClass: 'columns-xl',
							twStyle: 'columns: var(--container-xl); /* 36rem (576px) */'
						},
						{
							twClass: 'columns-2xl',
							twStyle: 'columns: var(--container-2xl); /* 42rem (672px) */'
						},
						{
							twClass: 'columns-3xl',
							twStyle: 'columns: var(--container-3xl); /* 48rem (768px) */'
						},
						{
							twClass: 'columns-4xl',
							twStyle: 'columns: var(--container-4xl); /* 56rem (896px) */'
						},
						{
							twClass: 'columns-5xl',
							twStyle: 'columns: var(--container-5xl); /* 64rem (1024px) */'
						},
						{
							twClass: 'columns-6xl',
							twStyle: 'columns: var(--container-6xl); /* 72rem (1152px) */'
						},
						{
							twClass: 'columns-7xl',
							twStyle: 'columns: var(--container-7xl); /* 80rem (1280px) */'
						},
						{
							twClass: 'columns-auto',
							twStyle: 'columns: auto;'
						},
						{
							twClass: 'columns-(<custom-property>)',
							twStyle: 'columns: var(<custom-property>);'
						},
						{
							twClass: 'columns-[<value>]',
							twStyle: 'columns: <value>;'
						}
					]
				}
			},
		],
	}
]
