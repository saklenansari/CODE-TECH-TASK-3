import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TextEditor from "./App";
import { v4 as uuidV4 } from "uuid";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
      <Route path="/documents/:id" element={<TextEditor />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

