import { Outlet } from 'react-router-dom'
import  Navbar  from '../components/Navbar'

const PublicLayout = () => {

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <Outlet />
            </div>
            
            <div>Footer</div>
        </div>
    )
}

export default PublicLayout