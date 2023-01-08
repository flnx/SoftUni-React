import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

// pages
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/contact';
import Faq from './components/faq';

// layouts
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} >
               <Route path="faq" element={<Faq />}/>
               <Route path="contact" element={<Contact />}/>
            </Route>
            <Route path="products" element={<Products />}/>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
