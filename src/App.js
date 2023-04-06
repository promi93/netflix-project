import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import MyMovie from "./Components/MyMovie";

function App() {
  return (
    <body xs={12} sm={6} lg={3} className="App">
      <header>
        <MyNav />
      </header>

      <main>
        <MyMovie movie="harry%20potter" title="Harry Potter - Collection" />
        <MyMovie movie="star%20wars" title="Star Wars - Collection" />
        <MyMovie
          movie="lord%20of%20the%20rings"
          title="The Lord of the Rings - Collection"
        />
      </main>

      <footer>
        <MyFooter />
      </footer>
    </body>
  );
}

export default App;
