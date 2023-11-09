import { useForm } from 'react-hook-form'
import'./styles/Login.css'
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/home');
}
  return (
    <>
      <div className='container w-75 mt-5 rounded shadow'>
        <div className='row'>
            <div className="col bg d-none d-lg-block"></div>
            <div className="col p-4 rounded-end">
                <div className="text-end">
                <i className='bx bxl-instagram bx-md'></i>
                </div>
                <h2 className='fw-bold text-center py-5'>
                    Bienvenido
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="a" className='form-label' > Username</label>
                        <input type="text" className='form-control' name='username' {...register('username')}/>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="a" className='form-label' > Password</label>
                      <input type="password" className='form-control' name='password' {...register('password')}/>
                    </div>
                    <div className="mb-4 form-check">
                        <input type="checkbox" name='conected' className='form-check-input' />
                        <label htmlFor="connected" className='form-check-label'> Mantenerme conectado</label>

                    </div>
                        <div className='d-grid pb-3'>
                            <button type='submit' className='btn btn-primary'>Iniciar Sesion</button>
                        </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
