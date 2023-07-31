import { FC } from 'react'
import { Avatar, Card, Typography } from 'antd'
import { Author } from 'types/api'

const { Meta } = Card
const { Title, Text } = Typography

export const AuthorCard: FC<Omit<Author, 'id'>> = ({ name, age, avatar, bio }) => (
  <Card
    style={{ maxWidth: 600, width: '100%', minHeight: 485, height: '100%' }}
    cover={<img alt='background' src='/images/background.jpg' />}
  >
    <Meta
      avatar={<Avatar size={64} src={avatar} />}
      title={
        <>
          <Title level={4} style={{ margin: 0 }}>
            {name}
          </Title>
          <Text type='secondary'>{age} years old</Text>
        </>
      }
      description={bio}
    />
  </Card>
)
