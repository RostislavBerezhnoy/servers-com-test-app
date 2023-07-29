import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { DefaultHeader } from './Header'

const { Header, Content } = Layout

export const DefaultLayout: FC = () => (
  <Layout style={{ height: '100%', minHeight: '100vh' }}>
    <Header style={{ display: 'flex', justifyContent: 'end' }}>
      <DefaultHeader />
    </Header>
    <Content style={{ padding: '20px' }}>
      <Outlet />
    </Content>
  </Layout>
)
