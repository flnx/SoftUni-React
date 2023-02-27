import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar/Navbar';
import { Home, Catalog, Create, Edit, Details, Login, Register } from './pages/index';
import { Logout } from './components/Logout';
import { ProtectedRoute } from './components/common/ProtectedRoute';

import { GamesContextProvider } from './context/GamesContext';
import { AuthContextProvider } from './context/AuthContext';

class App extends Component {
    render() {
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
                                <Route element={<ProtectedRoute />}>
                                    <Route path="/create" element={<Create />} />
                                    <Route path="/logout" element={<Logout />} />
                                    <Route path="/catalog/:gameId/edit" element={<Edit />} />
                                </Route>
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                            </Routes>
                        </main>
                    </div>
                </GamesContextProvider>
            </AuthContextProvider>
        );
    }
}

export default App;
