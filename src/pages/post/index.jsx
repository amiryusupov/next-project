import Layout from '@/components/Layout';
import LoadingWrap from '@/components/LoadingWrap';
import UserList from '@/components/UserList';
import useFetch from '@/hooks/useFetch';
import React from 'react'

function Post() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <Layout>
      <LoadingWrap loading={loading}>
        <UserList list={data} isPost={true}/>
      </LoadingWrap>
      </Layout>
  )
}

export default Post; 