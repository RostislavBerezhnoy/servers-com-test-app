import { FC } from 'react'
import { useAppSelector } from 'store'
import { Avatar, Typography } from 'antd'
import { Box } from 'components/Box'

const { Title } = Typography

export const DefaultHeader: FC = () => {
  const { name, avatar } = useAppSelector(store => store?.user)

  return (
    <Box flexDirection='row' alignItems='center'>
      <Title level={5} style={{ color: 'white', margin: 0, paddingRight: 15 }}>
        {name}
      </Title>
      <Avatar size={48} src={avatar} />
    </Box>
  )
}
