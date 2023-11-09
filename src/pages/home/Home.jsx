import React from 'react'
import RigthBar from '../../components/rigthbar/RigthBar'
import SideBar from '../../components/sidebar/sidebar'
import Post from '../../components/posting/Post'
import Perfiles from '../../components/perfiles/Perfiles'
import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
  const [perfiles, setperfiles] = useState()



  const getApi = () => {
      axios.get('https://randomuser.me/api/?results=10')
      .then(res => setperfiles(res.data.results))
      .catch(err => console.log(err))
  }

  console.log(perfiles)

  useEffect(()=> {
      getApi()
    }, [])
  return (
    <div>
      <SideBar/>
      <div>
        {
          perfiles?.map(perfil=>(
            <Post
            key={perfil.cell}
            name={perfil.name.first}
            img={perfil.picture.large}
            />
          ))
        }
      </div>


    </div>
  )
}

export default Home
