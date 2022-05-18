import { useState } from 'react'
import Input from '../../components/Input'
import { filterArray } from '../../utils/handleArray'

import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg'

import * as S from './styled'

const HomeFilterContainer = ({ t, setFilteredList, list }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (searching) => {
    const filtered = filterArray(list, ['code', 'name'], searching)
    setFilteredList(filtered)
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
      <div>
        <FilterIcon />
      </div>
    </S.SearchContainer>
  )
}

export default HomeFilterContainer
