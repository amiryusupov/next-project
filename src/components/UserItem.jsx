import React from 'react'
import UserItemContent from './UserItemContent';
import { clearObj } from '@/helpers/helpers';

function UserItem({ user }) {
  const newUser = clearObj(user, ["address", "company", "id"])
  return (
    <div className="user-item">
      {
        Object.keys(newUser).map((item, key) => (
          <UserItemContent key={key} text={item} label={user[item]} />
        ))
      }
    </div>
  )
}

export default UserItem;