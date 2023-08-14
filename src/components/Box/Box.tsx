import { memo, FC, PropsWithChildren, CSSProperties } from 'react'

export const Box: FC<PropsWithChildren<CSSProperties>> = memo(
  ({ children, display = 'flex', flexDirection = 'column', justifyContent, ...rest }) => (
    <div style={{ display, flexDirection, justifyContent, ...rest }}>{children}</div>
  ),
)
