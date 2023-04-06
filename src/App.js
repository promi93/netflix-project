import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyMovie from "./Components/MyMovie";
import NearNav from "./Components/NearNav";

function App() {
  return (
    <body xs={12} sm={6} lg={3} className="App">
      <header>
        <MyNav />
        <NearNav />
      </header>

      <main>
        <MyMovie movie="harry%20potter" />
        <MyMovie movie="star%20wars" />
        <MyMovie movie="lord%20of%20the%20rings" />
      </main>

      <footer>
        <MyFooter />
      </footer>
    </body>
  );
}

export default App;
