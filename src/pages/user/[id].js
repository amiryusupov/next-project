import Layout from '@/components/Layout'
import LoadingWrap from '@/components/LoadingWrap'
import UserList from '@/components/UserList'
import useFetch from '@/hooks/useFetch'
import {usePathname} from "next/navigation"
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function UserPage() {
  const router = usePathname()
  const [id, setId] = useState(null)
  const {data, loading} = useFetch(id ? `https://jsonplaceholder.typicode.com/users/${id}` : null, [id])
  useEffect(() => {
    if(router) {
      setId(router.split("/")[2])
    }
  }, [router])
  return (
    <Layout>
    <LoadingWrap loading={loading}>
      <UserList list={[data]} />
    </LoadingWrap>
    </Layout>
  )
}

export default UserPage