import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {

    return (
        <div className='w-[100vw] md:h-[100vh] md:flex md:flex-row lg:h-[100vh] lg:flex lg:flex-row bg-gradient-to-r overflow-hidden'>
            <Header
            />
            <Outlet/>
        </div>
    )
}