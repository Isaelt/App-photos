import { useSelector } from 'react-redux'
import './Post.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'



const Post = ({name,img}) => {

    const [comentario, setcomentario] = useState('')
    const [comments, setcomments] = useState([
        {
            id: 1,
            name:name,
            comment: 'ya estuvo'
        },
        {
            id: 2,
            name:name,
            comment: 'ya no estuvo'
        }
    ])

    const addComent = (com)=> {
        const lastId = comments.length > 0 ? comments[comments.length - 1].id : 1;
        const newComment = {
            id: lastId + 1,
            name: name,
            com

        }
        const commentList = [...comments]
        commentList.push(newComment)

    }

    const handleComent = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addComent(comentario)
            setcomments('')
        } else {
            
        }
    }

    console.log(comments)

  return (
    <>
      <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body d-flex">
                        <div className='profile-picture rounded-circle me-3'>

                        </div>
                        <a href="#" className="text-dark text-decoration-none fw-bold align-self-center">{name}</a>
                        </div>
                        <img src={img} className='img-fluid' alt="" />
                        <div className='card-body card-icons'>
                            <div>
                                <i className='bx bx-heart me-1'></i>
                                <i className='bx bx-comment me-1'></i>
                                <i className='bx bx-paper-plane me-1' ></i>
                                <i className='bx bx-dislike' ></i>
                                </div>

                        </div>
                        <p className='fw-bold ps-3'>39 me gusta</p>
                        <p className='mb-1'><a href="#" className='text-dark fw-bold text-decoration-none ps-2'>{name} </a>  Aqui nomas </p>
                        <div className='d-flex mb-0'>
                        <p><a href="#" className='text-dark fw-bold text-decoration-none ps-2'>usuario </a></p>
                        </div>
                        <small className='d-block text-muted mb-2 ps-2'> Hace 8 horas</small>
                        <div className='d-flex' >
                            <input type="text" className='form-control border-0' name='comentario' placeholder='Agrega un comentario...' value={comentario} onChange={e => setcomentario(e.target.value)} onKeyDown={e => handleComent(e)}/>
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
