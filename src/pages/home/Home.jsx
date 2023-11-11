import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import Post from '../../components/posting/Post'
import axios from "axios"
import { useEffect, useState } from "react"
import { postsData } from '../../data/posts.data';
import ModalDetails from '../../components/modal/ModalDetails'

const Home = () => {
  const [posts, setPosts] = useState()
  const [model, setModel] = useState(false)



  const getApi = () => {
      axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        const users = res.data.results
        const postsWithUsers = postsData.map((post, i) => ({
          ...post,
          user: users[i].name.first + users[i].name.last,
          image: users[i].picture.thumbnail,
          id: users[i].cell,
        }))
        setPosts(postsWithUsers);
      })
      .catch(err => console.log(err))
  }


  useEffect(()=> {
      getApi()
    }, [])

  return (
    <div>
      <SideBar/>
      <div>
        {
          model === true ? 
          <ModalDetails
          
          setModel={setModel}

          />: ''

        }

        {
          posts?.map(post=>(
            <Post
            key={post.id}
            post={post}
            setModel={setModel}
            
            />
          ))
        }
      </div>
     
    </div>
  )
}

export default Home
