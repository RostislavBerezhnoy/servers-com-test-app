import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, List, Typography } from 'antd'
import { Box } from 'components/Box'
import { dateTimeFormatter } from 'utils/dateFormatter'
import { Post } from 'types/api'

const { Title, Text } = Typography

export const PostItem: FC<Post> = ({ id, text, date, author }) => (
  <List.Item key={id}>
    <List.Item.Meta
      avatar={
        <Link to={`/author/${id}`}>
          <Avatar size='large' src={author.avatar} />
        </Link>
      }
      title={
        <Box flexDirection='row' justifyContent='space-between'>
          <Link to={`/author/${id}`}>
            <Title level={5}>{author.name}</Title>
          </Link>
          <Text type='secondary'>{dateTimeFormatter(date)}</Text>
        </Box>
      }
      description={text}
    />
  </List.Item>
)
