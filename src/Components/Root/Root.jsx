
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;