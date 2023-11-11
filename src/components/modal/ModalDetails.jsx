import { useSelector } from "react-redux"


const ModalDetails = ({setModel}) => {

    const handleCloseModel = () => {
        setModel(false)
    }

    const informacion = useSelector(reducer=>reducer.info)

    console.log(informacion)

  return (
    <>
    <div class="modal show fade" style={{display:'block', backgroundColor:'rgba(0,0,0,0.8)'}} onClick={handleCloseModel}>
  <div className="modal-dialog">
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <div className="modal-header">
        <h5 className="modal-title"> {informacion.user}</h5>
        <button type="button" className="btn-close" onClick={handleCloseModel}></button>
      </div>
      <div className="modal-body">
      <img
                                    src={informacion.urlPhoto}
                                    className='img-fluid' 
                                    alt="" 
                                    />
        <p>{informacion.description}</p>
        
        <div className="d-flex justify-content-between" >
        <p>{informacion.createdAt}</p>
        <div>

                                <i className='bx bx-heart md me-1' ></i>
                                <i className='bx bx-comment md me-1'></i>
                                <i className='bx bx-paper-plane md me-1' ></i>
                                <i className='bx bx-dislike md' ></i>
        </div>
                                </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ModalDetails
