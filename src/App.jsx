import "./App.css";
import {
  Header,
  Banner,
  Information,
  Contact,
  Footer,
} from "./components/components";

function App() {
  return (
    <>
      <div className="header_container">
        <Header />
      </div>
      <main className="container">
        <Banner />
        <Information />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
