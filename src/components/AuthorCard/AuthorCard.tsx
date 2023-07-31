import { FC } from 'react'
import { Avatar, Card, Typography } from 'antd'
import { Box } from 'components/Box'
import { Author } from 'types/api'

const { Meta } = Card
const { Title, Text } = Typography

export const AuthorCard: FC<Omit<Author, 'id'>> = ({ name, age, avatar, bio }) => (
  <Card
    style={{
      maxWidth: 600,
      width: '100%',
      minHeight: 485,
      height: '100%',
      borderRadius: 15,
      border: '1px solid #dce1e6',
    }}
    cover={
      <Box height={220}>
        <img alt='background' src='/images/background.jpg' />
      </Box>
    }
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
