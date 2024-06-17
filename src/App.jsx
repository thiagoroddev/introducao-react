import React from "react";

import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";
import { Article } from "./components/Article/Article";
import articleimg from "./assets/images/image2.png";
import article1img from "./assets/images/image3.png";
import article2img from "./assets/images/image4.png";
import article3img from "./assets/images/image5.png";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Counter />
        <section id="articles">
          <Article
            tittle="Designing Dashboard"
            provider="NASAA"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            thumbnail={articleimg}
          />

          <Article
            tittle="Exemplo 2"
            provider="SPCEX"
            description="Elon Musk...lorem lorem lorem"
            thumbnail={article1img}
          />

          <Article
            tittle="Exemplo 3"
            provider="ESE"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            thumbnail={article2img}
          />

          <Article
            tittle="Exemplo 4"
            provider="BRASIL"
            description="Lorem ips"
            thumbnail={article3img}
          />
        </section>
      </>
    );
  }
}

export default App;
