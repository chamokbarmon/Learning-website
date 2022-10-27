import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Componed/Main';
import Login from './LogIn-Register/Login';
import Register from './LogIn-Register/Register';
import Courses from './Pages/Courses/Courses';


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
          path:'/courses',
          element:<Courses></Courses>
          
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
