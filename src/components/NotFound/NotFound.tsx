import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { WrappedBox } from 'components/Box'

const { Title, Text } = Typography

export const NotFound = () => (
  <WrappedBox>
    <Text style={{ fontSize: 100 }}>404</Text>
    <Title level={1}>Oops! Page not found</Title>
    <Title level={2} style={{ margin: 0 }}>
      <Link to='/'>Back to Feed</Link>
    </Title>
  </WrappedBox>
)
