import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { WrappedBox } from 'components/Box'
import { styles } from './styles'

const { Title, Text } = Typography

export const NotFound = () => (
  <WrappedBox>
    <Text style={styles[404]}>404</Text>
    <Title level={1}>Oops! Page not found</Title>
    <Title level={2} style={styles.backLink}>
      <Link to='/'>Back to Feed</Link>
    </Title>
  </WrappedBox>
)
