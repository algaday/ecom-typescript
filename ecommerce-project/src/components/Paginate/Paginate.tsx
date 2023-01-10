import React from 'react'
import {
  PaginationContainer,
  PaginationList,
  PaginationListItem,
} from './Paginate.styles'

type Pagination = {
  postsPerPage: number
  totalPosts: number
  currentPage: number
  paginate: (num: number) => void
  previousPage: () => void
  nextPage: () => void
}

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}: Pagination) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <PaginationContainer>
      <PaginationList>
        <PaginationListItem onClick={previousPage} className='page-number'>
          Prev
        </PaginationListItem>
        {pageNumbers.map((number) => (
          <PaginationListItem
            key={number}
            onClick={() => paginate(number)}
            className={
              'page-number ' + (number === currentPage ? 'active' : '')
            }
          >
            {number}
          </PaginationListItem>
        ))}
        <PaginationListItem onClick={nextPage} className='page-number'>
          Next
        </PaginationListItem>
      </PaginationList>
    </PaginationContainer>
  )
}

export default Paginate
