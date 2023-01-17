import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home, Catalog, Create, Edit, Details, Login, Register } from './pages/index';
import { AuthContextProvider } from './context/AuthContext';
import { GamesContextProvider } from './context/GamesContext';

function App() {
    return (
        <AuthContextProvider>
            <GamesContextProvider>
                <div id="box">
                    <header>
                        <Navbar />
                    </header>

                    <main id="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route
                                path="/catalog/:gameId"
                                element={<Details />}
                            />
                            <Route path="/create" element={<Create />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/edit" element={<Edit />} />
                        </Routes>
                    </main>
                </div>
            </GamesContextProvider>
        </AuthContextProvider>
    );
}

export default App;
