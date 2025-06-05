import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Button } from 'antd';

// https://ant.design/docs/react/use-with-next-cn
export default function Antd() {
  return (
    <AntdRegistry>
      <Button type="primary">Button</Button>
    </AntdRegistry>
  )
}

