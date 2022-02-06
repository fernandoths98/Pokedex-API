import "./App.css";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import Loading from "./components/Loading.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Pokemon from "./Pokemon.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [poke, setPoke] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPoke([...poke, ...data.results]);
        setUrl(data.next);
        console.log(poke);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
          <InfiniteScroll
                dataLength={poke.length}
                next={fetchData}
                hasMore={true}
                scrollThreshold={1}
                loader={<Loading />}
              >
            <div className="pokemon-list"> 
                {poke.map((poke, index) => (
                  <Card poke={poke} index={index + 1} key={index} />
                ))}
            </div>
            </InfiniteScroll>
          </Route>
          <Route path="/:name">
            <Pokemon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
