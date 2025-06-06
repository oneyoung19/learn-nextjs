'use client'

import { FloatButton, Button, Col, Row } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons'
import './antd.css'
import { useRouter } from 'next/navigation'

// https://ant.design/docs/react/use-with-next-cn
// https://ant.design/docs/react/v5-for-19-cn
export default function Antd() {
  const router = useRouter()
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <div className="bg-blue-400">col-8</div>
        </Col>
        <Col span={8}>
          <div className="bg-blue-400">col-8</div>
        </Col>
        <Col span={8}>
          <div className="bg-blue-400">col-8</div>
        </Col>
      </Row>
      <Button type="primary" onClick={() => { router.push('/antd/dialog') }} className="mr-2">Dialog</Button>
      <Button onClick={() => { router.push('/antd/upload') }}>Upload</Button>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ insetInlineEnd: 24 }} />
    </>
  )
}

