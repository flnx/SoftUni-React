import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home, Catalog, Create, Edit, Details, Login, Register } from './pages/index';
import { AuthContextProvider } from './context/AuthContext';
import { GamesContextProvider } from './context/GamesContext';
import { Logout } from './components/Logout';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            // staleTime: 5 * (60 * 1000),
            // refetchInterval: 5 * (60 * 1000),
        },
    },
});


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
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
                                    <Route
                                        path="/create"
                                        element={<Create />}
                                    />
                                    <Route
                                        path="/logout"
                                        element={<Logout />}
                                    />
                                    <Route
                                        path="/catalog/:gameId/edit"
                                        element={<Edit />}
                                    />
                                </Route>
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
                            </Routes>
                        </main>
                    </div>
                </GamesContextProvider>
            </AuthContextProvider>
        </QueryClientProvider>
    );
}

export default App;
