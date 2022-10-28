import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Componed/Main';
import Login from './LogIn-Register/Login';
import Register from './LogIn-Register/Register';
import Blog from './Pages/Blog/Blog';
import Courses from './Pages/Courses/Courses';
import Faq from './Pages/FaQ/Faq';




function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
         path:'/signin',
         element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
         path:'/faq',
         element:<Faq></Faq>
        },
        {
          path:'/program',
          element:<Courses></Courses>,
          loader:()=>fetch(`http://localhost:5000/program`)
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
