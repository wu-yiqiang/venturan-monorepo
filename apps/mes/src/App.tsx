// import { RouterProvider } from 'react-router-dom'
// import { ConfigProvider, Spin } from 'antd'
// import { Suspense, useEffect } from 'react'
// import { routes } from '@/routers/index.tsx'
import { Button } from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'
export default function App() {
  return (
    // <ConfigProvider >
    //   <Suspense fallback={<Spin percent="auto" fullscreen size="large" />}>
    //     <RouterProvider router={routes} />
    //   </Suspense>
    // </ConfigProvider>
    <>
      <Button type="primary">Hello Arco</Button>
      {/* <micro-app name="sub-app" url="http://localhost:8381/" baseroute="/sub-app"></micro-app> */}
    </>
  )
}
