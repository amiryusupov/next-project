import React, { useMemo } from 'react'
import UserItem from './UserItem';

function UserList({ list, isPost }) {
  const userList = useMemo(() => (list ? list : []), [list])
  return (
    <div className='user-list'>
      {
        userList.map((item, key) => {
          return (
            <UserItem user={item} key={key} isPost={isPost} />
          )
        })
      }
    </div>
  )
}

export default UserList;