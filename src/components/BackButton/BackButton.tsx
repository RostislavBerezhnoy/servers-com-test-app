import { FC, CSSProperties } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from 'antd'
import { Box } from 'components/Box'
import { styles } from './styles'

export type BackButtonProps = CSSProperties & {
  text?: string
}

export const BackButton: FC<BackButtonProps> = ({ text = 'Back', ...rest }) => {
  const navigate = useNavigate()
  const { key = 'default' } = useLocation()

  return (
    <Box {...rest}>
      <Button
        style={styles.button}
        onClick={() => (key !== 'default' ? navigate(-1) : navigate('/'))}
      >
        {text}
      </Button>
    </Box>
  )
}
