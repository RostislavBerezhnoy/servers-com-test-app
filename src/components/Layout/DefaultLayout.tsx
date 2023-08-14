import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { DefaultHeader } from './Header'
import { styles } from './styles'

const { Header, Content } = Layout

export const DefaultLayout: FC = () => (
  <Layout style={styles.layoyt}>
    <Header style={styles.header}>
      <DefaultHeader />
    </Header>
    <Content style={styles.content}>
      <Outlet />
    </Content>
  </Layout>
)
