import UserList from "@/components/UserList";
import { useEffect, useState } from "react";

export default function Home() {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUserList(json))
  }, [])
  return (
    <main className="main">
      <UserList list={userList}/>
    </main>
  )
}
