import "./App.css";
import AuthModal from "./components/auth/AuthModal";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import ArticlesModal from "./components/modals/entertainment/Articles";
import NewsModal from "./components/modals/entertainment/News";
import TopicsModal from "./components/modals/entertainment/Topics";
import PublicRouter from "./routes/PublicRoutes";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <PublicRouter />
        <Footer />
      </>
      <AuthModal />
      <NewsModal />
      <ArticlesModal />
      <TopicsModal />
    </div>
  );
}

export default App;
