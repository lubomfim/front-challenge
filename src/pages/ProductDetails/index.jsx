import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import ProductImageSlider from '../../containers/SwiperProduct'
import { useProductContext } from '../../contexts/ProductContext'
import { useParams, useNavigate } from 'react-router-dom'

import * as S from './styled'
import { capitalize } from '@mui/material'
import { convertMoney } from '../../utils/handleCurrency'
import Modal from '../../components/Modal'

const ProductDetails = ({ t }) => {
  const navigate = useNavigate()
  const { products } = useProductContext()
  const [product, setProduct] = useState()
  const [openDeleteModal, setOpenDeleteModal] = useState()
  const { id } = useParams()

  useEffect(() => {
    const getProduct = products?.filter((el) => el.id === Number(id))?.[0]
    setProduct(getProduct)
  }, [id, products])

  const handleDeleteProduct = () => {
    navigate('/home')
  }

  return (
    <Layout headerInfo={{ grid: 3, showUser: true, path: '/home' }}>
      {product && (
        <S.ProductDetails>
          {product?.images?.length > 0 && <ProductImageSlider list={product} />}

          <div>
            <S.ProductTextContainer className="title">
              <p className="name">{product.name}</p>
              <p className="code">{product.code}</p>
            </S.ProductTextContainer>
            {product.value && (
              <S.ProductTextContainer className="title">
                <p className="name">{convertMoney(product.value, product.currency)}</p>
              </S.ProductTextContainer>
            )}
            {product.description && (
              <S.ProductTextContainer className="description">
                <p className="description">{product.description}</p>
              </S.ProductTextContainer>
            )}
            <S.ProductTextContainer className="normal">
              <p className="title">{t('product.brandLabel')}</p>
              <p className="value">{capitalize(product.brand) || '-'}</p>
            </S.ProductTextContainer>
            <S.ProductTextContainer className="normal">
              <p className="title">{t('product.categoryLabel')}</p>
              <p className="value">{capitalize(product.category) || '-'}</p>
            </S.ProductTextContainer>
            <S.ProductTextContainer className="normal">
              <p className="title">{t('product.materialLabel')}</p>
              <p className="value">{capitalize(product.material) || '-'}</p>
            </S.ProductTextContainer>
            <S.ProductTextContainer className="normal" background={product.color}>
              <p className="title">{t('product.colorLabel')}</p>
              {product.color ? <div className="color" /> : <div>-</div>}
            </S.ProductTextContainer>
            <Button variant="primary" onClick={() => navigate(`/upgrade-product/${product.id}`)}>
              {t('product.buttonUpdate')}
            </Button>
            <Button variant="secondary" onClick={() => setOpenDeleteModal(true)}>
              {t('product.buttonRemove')}
            </Button>
          </div>
          {openDeleteModal && (
            <Modal
              handleBack={() => setOpenDeleteModal(false)}
              textBack="Voltar"
              handleConfirm={() => handleDeleteProduct()}
              textConfirm={t('product.buttonRemove')}
            >
              <p>{t('product.confirmRemove')}</p>
            </Modal>
          )}
        </S.ProductDetails>
      )}
    </Layout>
  )
}

export default ProductDetails
