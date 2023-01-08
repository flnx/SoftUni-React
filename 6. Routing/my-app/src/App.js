import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

// pages
import Home, { HomeLoader } from './components/Home';
import Products from './components/Products';
import About from './components/About';

// features
import RootLayout from './layout/RootLayout';

// layouts

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} loader={HomeLoader} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />}/>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
