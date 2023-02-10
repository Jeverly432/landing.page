import "./style/style.scss";
import Header from "./components/header/Header";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="root">
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
