import { Routes, Route } from 'react-router-dom';

// components
import Nav from './components/Nav';

// pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import Characters from './Pages/Characters/Characters';
import CharacterDetails from './Pages/Characters/CharacterDetails';

// features
import NotFound from './features/NotFound';
import Faq from './Pages/About/Faq';
import Contact from './Pages/About/Contact';
import CharactersLayout from './Pages/Characters/CharactersLayout';

function App() {
    return (
        <div className="container">
            <header>
                <Nav />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}>
                        <Route path="faq" element={<Faq />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                    <Route path="/characters" element={<CharactersLayout />}>
                        <Route index element={<Characters />} />
                        <Route path=":id" element={<CharacterDetails />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}
export default App;
