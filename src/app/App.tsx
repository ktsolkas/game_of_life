import "./App.css";

import Footer from "./components/Footer/Footer";
import GameInterface from "./components/GameInterface/GameInterface";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GameInterface />
      <Footer />
    </>
  );
};

export default App;
