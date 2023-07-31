import { FC, PropsWithChildren, CSSProperties } from 'react'
import { WrappedBox } from 'components/Box'
import { Loader } from './Loader'

export type WrappedLoaderProps = {
  boxStyle?: PropsWithChildren<CSSProperties>
  size?: number
}

export const WrappedLoader: FC<WrappedLoaderProps> = ({ size, boxStyle }) => (
  <WrappedBox {...boxStyle}>
    <Loader size={size} />
  </WrappedBox>
)
