import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// pages
import Home from '../Pages/Home/Home';

import Characters, { CharactersLoader } from '../Pages/Characters/Characters';
import CharacterDetails, {characterDetailsLoader } from '../Pages/Characters/CharacterDetails';
import CharactersError from '../Pages/Characters/CharactersError';

import About from '../Pages/About/About';
import Faq from '../Pages/About/Faq';
import Contact from '../Pages/About/Contact';

import NotFound from '../features/NotFound';

// layouts
import RootLayout from '../Layout/RootLayout';
import CharactersLayout from '../Pages/Characters/CharactersLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>

            <Route
                path="characters"
                element={<CharactersLayout />}
                errorElement={<CharactersError />}
            >
                <Route
                    index
                    element={<Characters />}
                    loader={CharactersLoader}
                />
                <Route
                    element={<CharacterDetails />}
                    path=":id"
                    loader={characterDetailsLoader}
                />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default router;
