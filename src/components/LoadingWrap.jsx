import React from 'react'

function LoadingWrap({ loading, children }) {
  return (
    <div>
      {
        loading ? <h1>Loading</h1> : children
      }
    </div>
  )
}

export default LoadingWrap