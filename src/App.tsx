
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';

import RegisterForm from './containers/RegisterForm';
import LoginForm from './containers/LoginForm'; 
import CategoryPage from './containers/CategoryPage';

import PublicLayout from './layouts/PublicLayout';
import CreatePage from './containers/CreatePage';


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
       element: <CategoryPage /> },
       { path: "/create",
       element: <CreatePage /> }
      
      
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
