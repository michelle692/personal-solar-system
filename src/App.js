import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { PromptProvider } from './PromptContext';

function App() {
  return (
    <PromptProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </PromptProvider>
  );
}

export default App;