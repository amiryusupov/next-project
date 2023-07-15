import React, { useEffect, useState } from 'react'

function useFetch(url, dep=[]) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      if(url !== null) {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setData(json)
          setLoading(false)
        })
      }
    }, dep)
    return {data, loading}
}

export default useFetch;