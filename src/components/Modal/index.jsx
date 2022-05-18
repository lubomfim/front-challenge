import Button from '../Button'
import * as S from './styled'

const Modal = ({ handleConfirm, handleBack, children, textConfirm, textBack }) => {
  return (
    <S.Modal data-testid="modal">
      <S.ModalContent>
        {children}
        {handleConfirm && (
          <Button variant="primary" onClick={handleConfirm}>
            {textConfirm}
          </Button>
        )}
        {handleBack && (
          <Button variant="secondary" onClick={handleBack}>
            {textBack}
          </Button>
        )}
      </S.ModalContent>
    </S.Modal>
  )
}

export default Modal
