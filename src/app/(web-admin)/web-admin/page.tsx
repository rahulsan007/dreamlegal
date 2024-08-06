import Loading from '@/components/Loading'
import WebAdmin from '@/pages/WebAdmin'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense fallback={<Loading/>}>
      <WebAdmin />
    </Suspense>
  )
}

export default page
