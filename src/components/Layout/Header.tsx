import { FC } from 'react'
import { Avatar, Typography } from 'antd'
import { Box } from 'components/Box'

const { Title } = Typography

export const DefaultHeader: FC = () => (
  <Box flexDirection='row' alignItems='center'>
    <Title level={5} style={{ color: 'white', margin: 0, paddingRight: 15 }}>
      Hoseth
    </Title>
    <Avatar size={48} src='https://randomuser.me/api/portraits/men/68.jpg' />
  </Box>
)
