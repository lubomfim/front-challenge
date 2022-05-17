import * as S from './styled'

import { ReactComponent as AddIcon } from '../../assets/icons/plus.svg'
import { useState } from 'react'
import Modal from '../../components/Modal'

const ProductImagesCreation = ({ handleChange, images, limit, t }) => {
  const [selectedImage, setSelectedImage] = useState('')
  const [alertLimit, setAlertLimit] = useState(false)

  const processFileChange = (event) => {
    const eventFiles = event.target.files

    if (images.length + eventFiles?.length > limit) {
      setAlertLimit(true)

      return
    }

    if (eventFiles && eventFiles.length) {
      const fileMap = new Map()

      for (let i = 0; i < eventFiles.length; i++) {
        const file = eventFiles[i]
        const fileReader = new FileReader()
        fileMap.set(fileReader, file)
      }

      const mapEntries = fileMap.entries()
      readFile(mapEntries)
    }
  }

  const readFile = (mapEntries) => {
    const nextValue = mapEntries.next()

    if (nextValue.done === true) {
      return
    }

    const [fileReader, file] = nextValue.value

    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      handleChange((el) => {
        return {
          ...el,
          images: [...el.images, fileReader.result]
        }
      })

      readFile(mapEntries)
    }
  }

  const handleDeleteImage = (el) => {
    const copyImages = images.filter((item, index) => index !== el)

    handleChange((el) => {
      return {
        ...el,
        images: copyImages
      }
    })
    setSelectedImage('')
  }

  return (
    <S.ProductImagesContainer>
      {images.map((el, index) => (
        <S.ProductImages key={index} onClick={() => setSelectedImage(index)}>
          <img src={el} alt="" />
        </S.ProductImages>
      ))}
      {images.length < limit && (
        <S.ProductImagesBox htmlFor="input-images">
          <p>{t('product.imageLabel')}</p>
          <AddIcon />
        </S.ProductImagesBox>
      )}
      <S.ProductImagesInput
        type="file"
        id="input-images"
        accept="image/png, image/jpeg"
        onChange={(e) => processFileChange(e)}
        multiple
        value={''}
      />
      {selectedImage !== '' && (
        <Modal
          handleConfirm={() => handleDeleteImage(selectedImage)}
          textConfirm={t('product.imageRemove')}
          handleBack={() => setSelectedImage('')}
          textBack={t('product.buttonBack')}
        >
          <p>Deseja excluir a imagem?</p>
        </Modal>
      )}
      {alertLimit && (
        <Modal handleBack={() => setAlertLimit(false)} textBack="Voltar">
          <p>Limite máximo de {limit} imagens</p>
        </Modal>
      )}
    </S.ProductImagesContainer>
  )
}

export default ProductImagesCreation
