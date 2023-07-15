import React from 'react'
import UserItemContent from './UserItemContent';
import { clearObj } from '@/helpers/helpers';
import Link from 'next/link';

function UserItem({ user, isPost }) {
  const newUser = clearObj(user, ["address", "company", "id"])
  return (
    <>
      {
        isPost ? <Link href={`/post/${user.id}`} className="user-item">
          {
            Object.keys(newUser).map((item, key) => (
              <UserItemContent key={key} text={item} label={user[item]} />
            ))
          }
        </Link> : <div className="user-item">
          {
            newUser &&  Object.keys(newUser).map((item, key) => (
              <UserItemContent key={key} text={item} label={user[item]} />
            ))
          }
        </div>
      }
    </>
  )
}

export default UserItem;