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
				url: '/tailwind/1.layout/display',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'inline',
							twStyle: 'display: inline;'
						},
						{
							twClass: 'block',
							twStyle: 'display: block;'
						},
						{
							twClass: 'inline-block',
							twStyle: 'display: inline-block;'
						},
						{
							twClass: 'flex-root',
							twStyle: 'display: flex-root;'
						},
						{
							twClass: 'flex',
							twStyle: 'display: flex;'
						},
						{
							twClass: 'inline-flex',
							twStyle: 'display: inline-flex;'
						},
						{
							twClass: 'grid',
							twStyle: 'display: grid;'
						},
						{
							twClass: 'inline-grid',
							twStyle: 'display: inline-grid;'
						},
						{
							twClass: 'contents',
							twStyle: 'display: contents;'
						},
						{
							twClass: 'table',
							twStyle: 'display: table;'
						},
						{
							twClass: 'inline-table',
							twStyle: 'display: inline-table;'
						},
						{
							twClass: 'table-caption',
							twStyle: 'display: table-caption;'
						},
						{
							twClass: 'table-cell',
							twStyle: 'display: table-cell;'
						},
						{
							twClass: 'table-column',
							twStyle: 'display: table-column;'
						},
						{
							twClass: 'table-column-group',
							twStyle: 'display: table-column-group;'
						},
						{
							twClass: 'table-footer-group',
							twStyle: 'display: table-footer-group;'
						},
						{
							twClass: 'table-header-group',
							twStyle: 'display: table-header-group;'
						},
						{
							twClass: 'table-row-group',
							twStyle: 'display: table-row-group;'
						},
						{
							twClass: 'table-row',
							twStyle: 'display: table-row;'
						},
						{
							twClass: 'list-item',
							twStyle: 'display: list-item;'
						},
						{
							twClass: 'hidden',
							twStyle: 'display: none;'
						},
						{
							twClass: 'sr-only',
							twStyle: `position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;`
						},
						{
							twClass: 'not-sr-only',
							twStyle: `position: static;
width: auto;
height: auto;
padding: 0;
margin: 0;
overflow: visible;
clip: auto;
white-space: normal;`
						}
					]
				}
			},
			{
				title: 'float',
				url: '/tailwind/1.layout/float',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'float-right',
							twStyle: 'float: right;'
						},
						{
							twClass: 'float-left',
							twStyle: 'float: left;'
						},
						{
							twClass: 'float-start',
							twStyle: 'float: inline-start;'
						},
						{
							twClass: 'float-end',
							twStyle: 'float: inline-end;'
						},
						{
							twClass: 'float-none',
							twStyle: 'float: none;'
						}
					]
				}
			},
			{
				title: 'clear',
				url: '/tailwind/1.layout/float-clear',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'clear-left',
							twStyle: 'clear: left;'
						},
						{
							twClass: 'clear-right',
							twStyle: 'clear: right;'
						},
						{
							twClass: 'clear-both',
							twStyle: 'clear: both;'
						},
						{
							twClass: 'clear-start',
							twStyle: 'clear: inline-start;'
						},
						{
							twClass: 'clear-end',
							twStyle: 'clear: inline-end;'
						},
						{
							twClass: 'clear-none',
							twStyle: 'clear: none;'
						}
					]
				}
			},
			{
				title: 'isolation',
				url: '/tailwind/1.layout/isolation',
				tableMap: {
					headers,
					rows: [
						{
							twClass: 'isolate',
							twStyle: 'isolation: isolate;'
						},
						{
							twClass: 'isolation-auto',
							twStyle: 'isolation: auto;'
						}
					]
				}
			}
		]
	}
]
