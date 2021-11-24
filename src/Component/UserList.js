import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardListe from './CardListe'

const UserList = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setPosts(res.data)
      })
  }, [])

  return (
    <div>
      <CardListe posts={posts} />
    </div>
  )
}

export default UserList
