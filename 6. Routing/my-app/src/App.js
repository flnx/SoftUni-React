import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

// pages
import Home from './components/Home';
import Characters, { CharactersLoader } from './components/Characters';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import NotFound from './components/NotFound';
import CharacterDetails, { characterDetailsLoader } from './components/CharacterDetails';
import DetailsError from './components/CharacterDetailsError';

// layouts
import RootLayout from './layout/RootLayout';
import CharactersLayout from './layout/CharactersLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>

            <Route path="characters" element={<CharactersLayout />}>
                <Route
                    index
                    element={<Characters />}
                    loader={CharactersLoader}
                />
                <Route
                    element={<CharacterDetails />}
                    path=":id"
                    loader={characterDetailsLoader}
                    errorElement={<DetailsError />}
                />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
