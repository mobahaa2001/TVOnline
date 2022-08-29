import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Paginations from './Pagination'
const MoviesList = ({ movies, pageMyMovies, pageCount }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />
        })
      ) : (
        <h3 className="text-center p-3">There are no movies that matched your query.

</h3>
      )}
      {movies.length >= 1 ? (
        <Paginations pageMyMovies={pageMyMovies} pageCount={pageCount} />
      ) : null}
    </Row>
  )
}

export default MoviesList
