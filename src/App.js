import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyMovie1 from "./Components/MyMovie1";
import MyMovie2 from "./Components/MyMovie2";
import MyMovie3 from "./Components/MyMovie3";

function App() {
  return (
    <body xs={12} sm={6} lg={3} className="App">
      <header>
        <MyNav />
      </header>

      <main>
        <MyMovie1 />
        <MyMovie2 />
        <MyMovie3 />
      </main>

      <footer>
        <MyFooter />
      </footer>
    </body>
  );
}

export default App;
