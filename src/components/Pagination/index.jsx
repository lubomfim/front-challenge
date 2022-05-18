import React from 'react'
import Pagination from '@mui/material/Pagination'
import * as S from './style'

const PaginationComponent = ({ number, handlePagination }) => {
  const changePage = (page) => {
    handlePagination(page)
  }

  return (
    <S.PaginationContainer>
      <Pagination
        count={number}
        onChange={(event, value) => changePage(value)}
        shape="rounded"
        hidePrevButton
        hideNextButton
      />
    </S.PaginationContainer>
  )
}

export default PaginationComponent
