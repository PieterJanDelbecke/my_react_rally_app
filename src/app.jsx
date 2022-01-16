import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context";
import NewMatch from "./pages/new";
import Choice from "./pages/choice";
import Match from "./pages/match";


function App() {

  const [context, setContext] = useState({})

  return (
    <Context.Provider value={{context, setContext}}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<NewMatch />}/>
              <Route path="/choice" element={<Choice />}/>
              <Route path="/match" element={<Match />}/>
          </Routes>
        </BrowserRouter>
    </Context.Provider>
  )
}

export default App
