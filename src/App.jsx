import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import './index.css'
import Home from './pages/Home.jsx'
import Navbar from './components/HomeComponents/Navbar.jsx';
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/:address',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/About',
      element: <><Navbar /><About /></>
    },
    {
      path: '/Contact',
      element: <><Navbar /><Contact /></>
    },
    {
      path: '/Login',
      element: <><Navbar /><Login /></>
    }
  ])

  return (
    <>
      <div className="font-customOutfit overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </>
  );
}