import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewMatch from "./pages/new";
import Choice from "./pages/choice";
import Match from "./pages/match";

function App() {
  return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<NewMatch />}/>
          <Route path="/choice" element={<Choice />}/>
          <Route path="/match" element={<Match />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App