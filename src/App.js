// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import MemoApp from "./pages/projects/MemoApp";

// 프로젝트 상세 페이지 import
import ImageClassification from "./pages/projects/ImageClassification";
import EmbeddedSystem from "./pages/projects/EmbeddedSystem";
import TodoApp from "./pages/projects/TodoApp";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* 프로젝트 상세 페이지 */}
        <Route path="/projects/image-classification" element={<ImageClassification />} />
        <Route path="/projects/embedded-system" element={<EmbeddedSystem />} />
        <Route path="/projects/todo-app" element={<TodoApp />} />
	<Route path="/projects/memo-app" element={<MemoApp />} />
        {/* 잘못된 경로 → 홈으로 이동 */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

