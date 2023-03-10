import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

function RootLayout() {
    return (
        <div className="container">
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
