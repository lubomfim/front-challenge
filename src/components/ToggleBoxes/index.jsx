import * as S from './styled'

const ToggleBoxes = ({ list, onClick, condition }) => {
  return (
    <S.ToggleBoxes>
      {list.map((el, index) => (
        <S.ToggleBoxesItem
          key={index}
          className={(el.selected || condition === el.code) && 'selected'}
          onClick={() => onClick(el)}
        >
          {el.title}
        </S.ToggleBoxesItem>
      ))}
    </S.ToggleBoxes>
  )
}

export default ToggleBoxes
