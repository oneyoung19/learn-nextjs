'use client'
import React, { useState } from 'react'
import { Button, Modal } from 'antd'

export default function AntdDialog(): React.FC {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setLoading(true)
		// const url = 'https://jsonplaceholder.typicode.com/posts'
		const url = '/api/posts'
		fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(res => {
			console.log(res.json())
		}).catch(console.error).finally(() => {
			setLoading(false)
    	setOpen(false)
		})
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            target="_blank"
            type="primary"
            loading={loading}
            onClick={handleOk}>
            Search on Google
          </Button>
        ]}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}
