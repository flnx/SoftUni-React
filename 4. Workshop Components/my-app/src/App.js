import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";

function App() {
    return (
        <>
            <Header />
            <div className="main">
                <section className="card users-container">
                    <Search />

                    <UserList />
                </section>
            </div>
            <Footer />
        </>
    );
}

export default App;  