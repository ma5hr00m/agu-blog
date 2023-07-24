import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/index";

import Home from "./views/Home";
import About from "./views/About";
import Archive from "./views/Archive";
import Friends from "./views/Friends";
import Articles from "./views/Articles";
import Error from "./views/Error";

// import "github-markdown-css";
import 'uno.css';

function App() {

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/archive" element={<Archive />}/>
          <Route path="/friends" element={<Friends />}/>
          <Route path="/articles/:fileName" element={<Articles />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
    </div>
  )
};

export default App;
