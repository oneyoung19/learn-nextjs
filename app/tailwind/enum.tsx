const headers = [
	{
		prop: 'twClass',
		label: 'Tailwind Class',
		selectable: true
	},
	{
		prop: 'twStyle',
		label: 'Style'
	}
]

export const routeEnums = [
	{
		title: 'Layout',
		items: [
			{
				title: 'aspect-ratio',
				url: '/tailwind/1.layout/aspect-ratio',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'aspect-<ratio>',
							twStyle: 'aspect-ratio: <ratio>;'
						},
						{
							twClass: 'aspect-square',
							twStyle: 'aspect-ratio: 1 / 1;',
							defaultSelected: true
						},
						{
							twClass: 'aspect-video',
							twStyle: 'aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */'
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
				title: 'box-decoration-break',
				url: '/tailwind/1.layout/box-decoration-break',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'box-decoration-clone',
							twStyle: 'box-decoration-break: clone'
						},
						{
							twClass: 'box-decoration-slice',
							twStyle: 'box-decoration-break: slice'
						}
					]
				}
			},
			{
				title: 'box-sizing',
				url: '/tailwind/1.layout/box-sizing',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'box-border',
							twStyle: 'box-sizing: border-box'
						},
						{
							twClass: 'box-content',
							twStyle: 'box-sizing: content-box'
						}
					]
				}
			},
			{
				title: 'break-after',
				url: '/tailwind/1.layout/break-after',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'break-after-auto',
							twStyle: 'break-after: auto;'
						},
						{
							twClass: 'break-after-avoid',
							twStyle: 'break-after: avoid;'
						},
						{
							twClass: 'break-after-all',
							twStyle: 'break-after: all;'
						},
						{
							twClass: 'break-after-avoid-page',
							twStyle: 'break-after: avoid-page;'
						},
						{
							twClass: 'break-after-page',
							twStyle: 'break-after: page;'
						},
						{
							twClass: 'break-after-left',
							twStyle: 'break-after: left;'
						},
						{
							twClass: 'break-after-right',
							twStyle: 'break-after: right;'
						},
						{
							twClass: 'break-after-column',
							twStyle: 'break-after: column;'
						}
					]
				}
			},
			{
				title: 'break-before',
				url: '/tailwind/1.layout/break-before',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'break-before-auto',
							twStyle: 'break-before: auto;'
						},
						{
							twClass: 'break-before-avoid',
							twStyle: 'break-before: avoid;'
						},
						{
							twClass: 'break-before-all',
							twStyle: 'break-before: all;'
						},
						{
							twClass: 'break-before-avoid-page',
							twStyle: 'break-before: avoid-page;'
						},
						{
							twClass: 'break-before-page',
							twStyle: 'break-before: page;'
						},
						{
							twClass: 'break-before-left',
							twStyle: 'break-before: left;'
						},
						{
							twClass: 'break-before-right',
							twStyle: 'break-before: right;'
						},
						{
							twClass: 'break-before-column',
							twStyle: 'break-before: column;'
						}
					]
				}
			},
			{
				title: 'break-inside',
				url: '/tailwind/1.layout/break-inside',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'break-inside-auto',
							twStyle: 'break-inside: auto;'
						},
						{
							twClass: 'break-inside-avoid',
							twStyle: 'break-inside: avoid;'
						},
						{
							twClass: 'break-inside-avoid-page',
							twStyle: 'break-inside: avoid-page;'
						},
						{
							twClass: 'break-inside-avoid-column',
							twStyle: 'break-inside: avoid-column;'
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
			{
				title: 'display',
				url: 'https://tailwindcss.com/docs/display',
				tableMap: {
					headers,
					rows: [

					]
				}
			}
		],
	}
]
