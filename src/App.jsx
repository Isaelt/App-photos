import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './components/posting/Post'
import Home from './pages/home/Home'
import Login from './pages/Login'
import ProtectedRoutes from './components/utils/ProtectedRoutes'
import { useLocalStorage } from 'react-use'

function App() {
  const [user, setUser] = useLocalStorage('user');
  return (
    <>
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes activate={user}/> }>
        <Route path='/home' element={<Home/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
