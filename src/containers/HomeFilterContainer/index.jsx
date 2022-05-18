import { useState } from 'react'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import { filterArray } from '../../utils/handleArray'

import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

import * as S from './styled'

const HomeFilterContainer = ({ t, setFilteredList, list }) => {
  const [search, setSearch] = useState('')
  const [isFiltering, setFiltering] = useState(false)
  const [openFilterModal, setFilterModal] = useState('')
  const [filter, setFilter] = useState({
    brand: '',
    category: ''
  })

  const handleChange = ({ name, value }) => {
    setFilter({
      ...filter,
      [name]: value
    })
  }

  const handleSearch = (searching) => {
    const filtered = filterArray(list, ['code', 'name'], searching)
    setFilteredList(filtered)
  }

  const handleFilter = () => {
    if (filter.category === '' && filter.brand === '') {
    } else {
      const users = list.filter(
        (obj) => obj.category === filter.category && obj.brand === filter.brand
      )

      setFilteredList(users)
    }

    setFiltering(true)
    setFilterModal(false)
  }

  const handleCleanFild = () => {
    setFilter({
      brand: '',
      category: ''
    })
    setFiltering(false)
    setFilteredList(list)
  }

  return (
    <S.SearchContainer>
      <Input
        placeholder={t('home.inputSearch')}
        value={search}
        search={true}
        onChange={(e) => {
          setSearch(e.value)
          handleSearch(e.value)
        }}
      />
      <div
        className="filter"
        onClick={() => {
          !isFiltering ? setFilterModal(true) : handleCleanFild()
        }}
      >
        <FilterIcon />
        {isFiltering && (
          <div className="close">
            <CloseIcon />
          </div>
        )}
      </div>
      {openFilterModal && (
        <Modal
          handleBack={() => setFilterModal(false)}
          textBack="Voltar"
          handleConfirm={handleFilter}
          textConfirm={t('product.buttonFilter')}
        >
          <S.FilterInputContainer>
            <Input
              label={t('product.categoryLabel')}
              name="category"
              onChange={handleChange}
              type="category"
              as="select"
              options={t('product.categoryItems', { returnObjects: true })}
              value={filter.category}
            />
            <Input
              label={t('product.brandLabel')}
              name="brand"
              onChange={handleChange}
              type="brand"
              as="select"
              options={['Dior', 'Chlóe', 'Jacquemus', 'Prada']}
              value={filter.brand}
            />
          </S.FilterInputContainer>
        </Modal>
      )}
    </S.SearchContainer>
  )
}

export default HomeFilterContainer
