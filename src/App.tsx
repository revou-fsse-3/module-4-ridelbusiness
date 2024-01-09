
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
//import Navbar from './components/Navbar';

//import CategoryPage from './containers/CategoryPage'
//import RegisterForm from './containers/RegisterForm'
//import Register from './containers/Register';
//import Login from './containers/Login'; 
//import Category from './containers/Category'; 

import RegisterForm from './containers/RegisterForm';
import LoginForm from './containers/LoginForm'; 
import CategoryPage from './containers/CategoryPage';
import HomeContainer from './containers/HomeContainer';
import PublicLayout from './layouts/PublicLayout';


const router = createBrowserRouter([
  {
    
    element: <PublicLayout />,
    children: [
      { path: "/",
       element: <HomeContainer /> },
      { path: "/register",
       element: <RegisterForm /> },
      { path: "/login", 
      element: <LoginForm /> },
      { path: "/category",
       element: <CategoryPage /> }
      
      
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    

    </div>
    
  );
}

export default App
