import { useDispatch, useSelector } from 'react-redux'
import './Post.css'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { setInfoG } from '../../store/slices/info.slices'



const Post = ({post, setModel}) => {


    const [like, setLike] = useState(2)
    const [dislike, setDislike] = useState(1)
    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false)
    const [foto, setFoto] = useState()
    const distpatch = useDispatch()

    const [comentario, setcomentario] = useState('')
    const [comments, setcomments] = useState([
        {
            id: 1,
            name: post.user,
            comment: 'ya estuvo'
        },
        
    ])

 

    const myUser = JSON.parse(localStorage.getItem('user'))

    const addComent = (com)=> {
        const lastId = comments.length > 0 ? comments[comments.length - 1].id : 1;
        const newComment = {
            id: lastId + 1,
            name: myUser.username,
            com
        }
        setcomments([...comments, newComment]);
    }

    const handleComent = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addComent(comentario)
            setcomentario('');
        } else {
            
        }
    }

    function likef() {
        if (likeActive) {
            setLikeActive(false)
            setLike(like-1)
        } else {
            setLikeActive(true)
            setLike(like+1)
            // if (dislikeActive) {
            //     setDislikeActive(false)
            //     setLike(like+1)
            //     setDislike(dislike-1)
            // }
            
        }
    }

    function dislikef() {
        if (dislikeActive) {
            setDislikeActive(false)
            setDislike(dislike-1)
        } else{
            setDislikeActive(true)
            setDislike(dislike+1)
            // if (likeActive) {
            //     setLikeActive(false)
            //     setDislike(dislike+1)
            // }
        }
    }

    console.log(comments)
    console.log(dislike)

    // const handleLike = () => {
    //     if (like>=1) {
    //        setLike(like +1)
            
    //     } else {
            
    //     }
    // }


    const handleModel = () => {
        setModel(true)
        distpatch(setInfoG(post))
    }
    
    

  return (
    <>
      <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body d-flex">
                        <div className='profile-picture rounded-circle me-3' style={{backgroundImage: `url(${post.image})`, width: '3rem', height: '3rem'}}>

                        </div>
                        <a href="#" className="text-dark text-decoration-none fw-bold align-self-center">{post.user}</a>
                        </div>
                        <img
                                    src={post.urlPhoto} 
                                    className='img-fluid' 
                                    alt="" 
                                    onClick={handleModel}/>
                        <div className='card-body card-icons'>
                            <div>
                                <i className='bx bx-heart me-1' onClick={likef}></i>
                                <i className='bx bx-comment me-1'></i>
                                <i className='bx bx-paper-plane me-1' ></i>
                                <i className='bx bx-dislike' onClick={dislikef}></i>
                                </div>

                        </div>
                        <div className='d-flex'>
                        <p className='fw-bold ps-3'>{like} me gusta</p>
                        <p className='fw-bold ps-3'>{dislike} no me gusta</p>

                        </div>
                        <p className='mb-1'><a href="#" className='text-dark fw-bold text-decoration-none ps-3'>{post.user} </a>  {post.description} </p>
                        <div className='d-flex mb-0'>
                        <p>
                        {comments.map((comment) => {
                return (
                    <p className='mb-0'
                        key={comment.id}>
                        <a href="#" className='text-dark fw-bold text-decoration-none ps-3'>{comment.name} </a>
                         {comment.comment}
                         {comment.com}
                        
                    </p>
                );
            })}
                         </p>
                        </div>
                        <small className='d-block text-muted mb-2 ps-2'> Hace 8 horas</small>
                        <div className='d-flex' >
                            <input 
                                type="text" 
                                className='form-control border-0' 
                                name='comentario' 
                                placeholder='Agrega un comentario...' 
                                value={comentario} 
                                onChange={e => setcomentario(e.target.value)} 
                                onKeyDown={e => handleComent(e)}
                            />
                            <button type='submit' className='btn btn-link text-decoration-none fw-bold'>Publicar</button>
                        </div>
                        
                    </div>
                </div>


            </div>

        </div>

      </section>
    </>
  )
}
export default Post
