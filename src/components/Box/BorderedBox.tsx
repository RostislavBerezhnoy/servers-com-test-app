import { FC, PropsWithChildren, CSSProperties } from 'react'
import { Box } from 'components/Box'

export const BorderedBox: FC<PropsWithChildren<CSSProperties>> = ({ children, ...rest }) => (
  <Box padding={30} borderRadius={15} border='1px solid #dce1e6' backgroundColor='#fff' {...rest}>
    {children}
  </Box>
)
