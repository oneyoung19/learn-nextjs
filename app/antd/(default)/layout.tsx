'use client'
import React from 'react'
import { Flex, Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff'
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff'
  // backgroundColor: '#0958d9',
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff'
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff'
}

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100%)',
  minHeight: '100vh',
  maxWidth: 'calc(100%)'
}

export default function AntdLayout({ children }) {
  return (
    <Flex
      gap="middle"
      wrap>
      <Layout style={layoutStyle}>
        <Sider
          width="220px"
          style={siderStyle}>
          Sider
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>{children}</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </Flex>
  )
}
