import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, List, Typography } from 'antd'
import { Box } from 'components/Box'
import { dateTimeFormatter } from 'utils/dateFormatter'
import { Post } from 'types/api'

const { Title, Text } = Typography

export const PostItem: FC<Post> = ({ id, text, date, authorId, authorAvatar, authorName }) => (
  <List.Item key={id}>
    <List.Item.Meta
      style={{ overflow: 'hidden' }}
      avatar={
        <Link to={`/author/${authorId}`}>
          <Avatar size={45} src={authorAvatar} />
        </Link>
      }
      title={
        <Box flexDirection='row' justifyContent='space-between'>
          <Link to={`/author/${authorId}`}>
            <Title level={5}>{authorName}</Title>
          </Link>
          <Text type='secondary'>{dateTimeFormatter(date)}</Text>
        </Box>
      }
      description={text}
    />
  </List.Item>
)
