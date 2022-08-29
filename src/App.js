import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import MoviesLists from './components/MoviesList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'

function App() {
  const [movies, setMovies] = useState([])

  const [pageCount, setPageCount] = useState(0)
  /* Get All My Movies by Axios 
    You Should Download Axios
    $ npm i axios
    Axios For Get Any API Such As Fetch On JavaScript
  */
  const allMyMovies = async () => {
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=84857573680465ba633655e7acf3cadb&language=en',
    )
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
  useEffect(() => {
    allMyMovies()
  }, [])
  /////////////////////
  // Get Current Page

  const pageMyMovies = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=84857573680465ba633655e7acf3cadb&language=en&page=${page}`,
    )
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }
  useEffect(() => {
    allMyMovies()
  }, [])

  ////////////////////////

  // To Search in API
  const search = async (word) => {
    if (word === '') {
      allMyMovies()
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=84857573680465ba633655e7acf3cadb&language=en-US&query=${word}`,
      )
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }
  }

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesLists
                  movies={movies}
                  pageMyMovies={pageMyMovies}
                  pageCount={pageCount}
                />
              }
            ></Route>
            <Route path="/movie/:id" element={<MovieDetails />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </Container>
    </div>
  )
}

export default App
