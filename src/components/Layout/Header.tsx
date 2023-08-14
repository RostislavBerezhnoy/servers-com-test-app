import { FC } from 'react'
import { useAppSelector } from 'store'
import { Avatar, Typography } from 'antd'
import { Box } from 'components/Box'
import { styles } from './styles'

const { Title } = Typography

export const DefaultHeader: FC = () => {
  const { name, avatar } = useAppSelector(store => store?.user)

  return (
    <Box flexDirection='row' alignItems='center'>
      <Title level={5} style={styles.headerTitle}>
        {name}
      </Title>
      <Avatar size={48} src={avatar} />
    </Box>
  )
}
