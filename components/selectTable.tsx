import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export function SelectTable({ headers = [], rows = [] }: {
	headers: object[],
	rows: object[]
} = {}) {
  return (
    <Table>
			<TableHeader>
				<TableRow>
					{
						headers.map(header => {
							/* eslint-disable-next-line */
							const { prop, label, selectable, ...rest } = header
							return (
								<TableHead key={prop} className="px-2 py-2.5 text-left text-sm/7 font-semibold text-gray-950 dark:text-white" {...rest}>{label}</TableHead>
							)
						})
					}
				</TableRow>
			</TableHeader>
			<TableBody>
				{
					rows.map((row, index) => (
						<TableRow key={index}>
							{
								headers.map((header, index) => (
									<TableCell key={header.prop} className={cn('px-2 py-2 align-top font-mono text-xs/6 font-medium', index % 2 === 0 ? 'text-sky-500 dark:text-sky-400' : 'text-violet-600 dark:text-violet-400' )}>
										<div className="flex justify-start items-center">
											{header.selectable ? (
												<>
													<RadioGroup className="mr-2">
														<RadioGroupItem value={row[header.prop]}>123</RadioGroupItem>
													</RadioGroup>
													<Label htmlFor={row[header.prop]} className="text-xs/6">{row[header.prop]}</Label>
												</>
											) : row[header.prop] }
										</div>
									</TableCell>
								))
							}
						</TableRow>
					))
				}
			</TableBody>
		</Table>
  )
}