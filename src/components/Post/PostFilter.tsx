import { FC } from 'react'
import { Select, Input, DatePicker } from 'antd'
import { Box, BorderedBox } from 'components/Box'
import dayjs from 'dayjs'
import { Author } from 'types/api'

export type PostFilterProps = {
  search: string
  date?: string
  author?: string
  authors: Author[]
  authorsLoading: boolean
  setDate: (text: string) => void
  setSearch: (text: string) => void
  setAuthor: (text: string) => void
}

export const PostFilter: FC<PostFilterProps> = ({
  search,
  date,
  setSearch,
  setDate,
  author,
  setAuthor,
  authors,
  authorsLoading,
}) => (
  <BorderedBox>
    <Box marginBottom={10}>
      <Input
        allowClear
        placeholder='search...'
        name='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </Box>
    <Box flexDirection='row' justifyContent='space-between' width='100%'>
      <Select
        allowClear
        style={{ width: '49%' }}
        loading={authorsLoading}
        options={authors}
        fieldNames={{ label: 'name', value: 'id' }}
        value={author}
        onChange={setAuthor}
        placeholder='select author...'
      />
      <DatePicker
        style={{ width: '49%' }}
        value={date ? dayjs(date) : undefined}
        onChange={(_, dateString) => setDate(dateString)}
        placeholder='select date...'
      />
    </Box>
  </BorderedBox>
)
