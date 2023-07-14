import React from 'react'
import UserItem from './UserItem';

function UserList({ list }) {
  return (
    <div className='user-list'>
      {
        list.map((item, key) => {
          return (
            <UserItem user={item} key={key} />
          )
        })
      }
    </div>
  )
}

export default UserList;