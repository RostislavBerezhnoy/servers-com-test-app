import { FC } from 'react'
import { Avatar, Card, Typography } from 'antd'
import { Box } from 'components/Box'
import { styles } from './styles'
import { Author } from 'types/api'

const { Meta } = Card
const { Title, Text } = Typography

export const AuthorCard: FC<Omit<Author, 'id'>> = ({ name, age, avatar, bio }) => (
  <Card
    style={styles.card}
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
          <Title level={4} style={styles.title}>
            {name}
          </Title>
          <Text type='secondary'>{age} years old</Text>
        </>
      }
      description={bio}
    />
  </Card>
)
