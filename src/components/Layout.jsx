import Link from 'next/link';
import React from 'react'

function Layout({ children }) {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header-row">
            <div className="header-logo">Logo</div>
            <div className="header-nav">
              <Link href="/post" className="header-link">
                Posts
              </Link>
              <Link href="/" className="header-link">
                Users
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className='main'>{children}</main>
      <footer className="footer"></footer>
    </div>
  )
}

export default Layout;