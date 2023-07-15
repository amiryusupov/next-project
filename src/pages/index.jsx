import Layout from "@/components/Layout";
import LoadingWrap from "@/components/LoadingWrap";
import UserList from "@/components/UserList";
import useFetch from "@/hooks/useFetch";

export default function Home() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <Layout>
      <LoadingWrap loading={loading}>
        <UserList list={data} />
      </LoadingWrap>
    </Layout>
  )
}
