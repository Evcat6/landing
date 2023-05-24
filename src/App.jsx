import "./App.css";
import { Header, Banner, Information } from "./components/components";

function App() {
  return (
    <>
      <div className="header_container">
        <Header />
      </div>
      <main className="container">
        <Banner />
        <Information />
      </main>
    </>
  );
}

export default App;
