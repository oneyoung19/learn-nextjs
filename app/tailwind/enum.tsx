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
				title: 'columns',
				url: '/tailwind/1.layout/columns',
			},
		],
	}
]
