import Cards from "./components/Cards";
import "./scss/app.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./data";

function App() {
  return (
    <>
      <Header />
      <Cards data={data} />
      <Footer />
    </>
  );
}

export default App;
