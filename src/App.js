import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import MovieList from "./components/movieList/movieList";
import Home from "./pages/home/Home";
import Movie from "./pages/movieDetail/movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error 404 </h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
