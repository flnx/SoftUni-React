import { Link, Outlet } from 'react-router-dom';


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

            <h2>More info</h2>
            <div className="about-links">
                <Link to="faq">FAQ</Link>
                <Link to="contact">Contact</Link>
            </div>

            <div className="about-info">
                <Outlet />
            </div>
        </div>
    );
}

export default About;
