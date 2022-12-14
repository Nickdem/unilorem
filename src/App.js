import React from "react"
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Main from "./pages/Main/";
import Other from "./pages/Other";

import './style.scss'

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/other" element={<Other />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  )
}

export default App;
