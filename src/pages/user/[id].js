import Layout from '@/components/Layout'
import LoadingWrap from '@/components/LoadingWrap'
import UserList from '@/components/UserList'
import useFetch from '@/hooks/useFetch'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function UserPage() {
  const router = useRouter()
  const {data, loading} = useFetch(router.query.id ? `https://jsonplaceholder.typicode.com/users/${router.query.id}` : null, [router.query.id])

  return (
    <Layout>
    <LoadingWrap loading={loading}>
      <UserList list={[data]} />
    </LoadingWrap>
    </Layout>
  )
}

export default UserPage