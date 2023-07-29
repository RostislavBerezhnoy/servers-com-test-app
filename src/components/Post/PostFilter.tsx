import { FC } from 'react'
import { Input } from 'antd'
import { Box } from 'components/Box'

export type PostFilterProps = {
  search: string
  setSearch: (text: string) => void
}

export const PostFilter: FC<PostFilterProps> = ({ search, setSearch }) => (
  <Box marginBottom={30}>
    <Input
      placeholder='search...'
      name='text'
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  </Box>
)
