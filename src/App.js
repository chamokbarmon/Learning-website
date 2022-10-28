import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Componed/Main';
import Login from './LogIn-Register/Login';
import Register from './LogIn-Register/Register';
import Blog from './Pages/Blog/Blog';
import AllCourse from './Pages/Courses/AllCourse';
import Courses from './Pages/Courses/Courses';
import Details from './Pages/Courses/Details';
import Faq from './Pages/FaQ/Faq';
import PrivateRoute from './Route/PrivateRoute'




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
        },
        {
          path:'/program/:id',
          element:<AllCourse></AllCourse>,
          loader:({params})=>fetch(`http://localhost:5000/pro/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/pro/${params.id}`)
        }
      ]
     
    },
    {
      path:'/',
      element:<p>page is Not found --- 404</p>

    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
