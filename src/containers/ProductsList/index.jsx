import * as S from './styled'
import PaginationComponent from '../../components/Pagination'
import { truncate } from '../../utils/handleString'
import { convertMoney } from '../../utils/handleCurrency'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg'
import { paginator } from '../../utils/handleArray'
import { useEffect, useState } from 'react'

const ProductsList = ({ t, list, fullList }) => {
  const navigation = useNavigate()
  const [filteredList, setFilteredList] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const handlePagination = (page) => {
    const response = paginator(fullList, page, 4)

    setFilteredList(response.data)
  }

  useEffect(() => {
    const pagination = paginator(list, 1, 4)

    setTotalPages(pagination['total_pages'])
    setFilteredList(pagination.data)
  }, [list])

  return (
    <S.ProductsListContainer>
      {list?.length <= 0 && (
        <S.ProductsEmptyList>
          <p>{t('home.emptyResultSearch')}</p>
        </S.ProductsEmptyList>
      )}

      <S.ProductsList>
        {filteredList?.length > 0 &&
          filteredList?.map((el, index) => (
            <S.ProductItem key={index}>
              <S.ProductItemImg>
                <img src={el.images[0] || 'assets/logo.jpg'} alt="" />
              </S.ProductItemImg>
              <S.ProductItemText>
                <div>
                  <p className="title">{truncate(el.name, 40)}</p>
                  <p className="code">{el.code}</p>
                </div>

                {el.value !== '' && <p className="value">{convertMoney(el.value, el.currency)}</p>}
                <div className="more" onClick={() => navigation(`/details-product/${el.id}`)}>
                  <MoreIcon />
                </div>
              </S.ProductItemText>
            </S.ProductItem>
          ))}
      </S.ProductsList>
      <PaginationComponent number={totalPages} handlePagination={handlePagination} />
    </S.ProductsListContainer>
  )
}

export default ProductsList
