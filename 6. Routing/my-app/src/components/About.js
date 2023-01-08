import { Link, Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function About() {
    return (
        <div className="about-wrapper">
            <h1>About</h1>
            <h3>Team</h3>
            <ul>
                <li>Steven</li>
                <li>Emily</li>
                <li>Natalie</li>
                <li>Coby</li>
                <li>Lorem</li>
            </ul>

            <p>More info</p>
            <div>
                <Link to="faq">FAQ</Link>
            </div>
            <div>
                <Link to="contact">Contact</Link>
            </div>

            <Outlet />
        </div>
    );
}

export default About;
