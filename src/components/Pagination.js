import React from 'react'
import ReactPaginate from 'react-paginate'

const Paginations = ({ pageMyMovies, pageCount }) => {
  // HAndel Page Click
  const handlePageClick = (data) => {
    console.log(data.selected)
    pageMyMovies(data.selected + 1)
  }

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="pagination justify-content-center p-3"
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  )
}
export default Paginations
