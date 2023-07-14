import React from 'react'

function UserItemContent({ label, text }) {
  const isLink = ["website", "email", "phone"]
  const isHref = isLink.filter((item) => item !== "website")
  console.log(isHref);
  return (
    <>
      {
        isLink.includes(text) ?
          <a href={isHref.includes(text) ? text === "email" ? `mailto:${text}` : label : label} className="user-item__content">
            <strong className="user-item__text user-item__text-capitalize">{text}: </strong>
            <div className="user-item__line"></div>
            <div className="user-item__text">{label}</div>
          </a> :
          <div className="user-item__content">
            <strong className="user-item__text user-item__text-capitalize">{text}: </strong>
            <div className="user-item__line"></div>
            <div className="user-item__text">{label}</div>
          </div>
      }
    </>
  )
}

export default UserItemContent;