import * as S from './styled'

const ToggleBoxes = ({ list = [], onClick, condition }) => {
  return (
    <S.ToggleBoxes data-testid="toggleboxes">
      {list.map((el, index) => (
        <S.ToggleBoxesItem
          data-testid="boxes"
          key={index}
          className={(el.selected || condition === el.code) && 'selected'}
          onClick={() => onClick(el)}
        >
          {el.title || el}
        </S.ToggleBoxesItem>
      ))}
    </S.ToggleBoxes>
  )
}

export default ToggleBoxes
