import { useEffect, useState } from 'react'
import * as S from './styled'
import Input from '../../components/Input'
import ToggleBoxes from '../../components/ToggleBoxes'
import ProductImagesCreation from '../ProductImagesCreation'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import {
  loadFromLocalstorage,
  saveToLocalStorage,
  saveToLocalStorageSpread
} from '../../utils/handleStorage'
import { useNavigate } from 'react-router-dom'

const limits = {
  prada: 2,
  chlóe: 5,
  dior: 3,
  jacquemus: 4
}

const ProductForm = ({ t, i18n }) => {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: '',
    code: '',
    description: '',
    currency: '',
    value: '',
    brand: '',
    material: '',
    color: '#ffffff',
    category: '',
    images: []
  })
  const [error, setError] = useState({
    name: false,
    code: false
  })
  const [categories, setCategories] = useState([])
  const [imagesLimit, setImagesLimit] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleChange = ({ name, value }) => {
    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleImagesLimit = ({ value }) => {
    setProduct({
      ...product,
      brand: value,
      images: []
    })
    setImagesLimit(limits[value])
  }

  const handlePickCategory = (pick) => {
    const newArr = categories.map((el) => {
      return {
        ...el,
        selected: el === pick
      }
    })
    handleChange({
      name: 'category',
      value: pick.title
    })

    setCategories(newArr)
  }

  useEffect(() => {
    const getCategories = t('product.categoryItems', { returnObjects: true })

    const newCategoriesArr = getCategories.map((el) => {
      return {
        title: el,
        code: el,
        selected: false
      }
    })
    setCategories(newCategoriesArr)
  }, [t])

  const handleCreateProduct = async () => {
    setLoading(true)
    setError({
      name: false,
      code: false
    })
    try {
      setTimeout(() => {
        const getProducts = loadFromLocalstorage('@Luxclusif/Products') || []

        if (handleValidateForm()) {
          saveToLocalStorageSpread('@Luxclusif/Products', {
            ...product,
            id: getProducts.length + 1
          })
          setProduct({
            ...product,
            id: getProducts.length + 1
          })
          navigate('/home')
        }
        setLoading(false)
      }, 1000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleValidateForm = () => {
    setError({
      name: product.name.length <= 0,
      code: product.code.length <= 0
    })

    if (!(product.name.length <= 0) && !(product.code.length <= 0)) {
      return true
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    return false
  }
  return (
    <S.ProductForm>
      <S.ProductGrid cols="1fr 1fr">
        <Input
          label={t('product.nameLabel')}
          name="name"
          onChange={handleChange}
          error={error.name}
          type="name"
          value={product.name}
        />
        <Input
          label={t('product.codeLabel')}
          name="code"
          onChange={handleChange}
          error={error.code}
          type="code"
          value={product.code}
        />
      </S.ProductGrid>
      <Input
        as="textarea"
        label={t('product.descriptionLabel')}
        name="description"
        onChange={handleChange}
        type="description"
        value={product.description}
      />
      <S.ProductGrid cols="1fr 1fr">
        <S.ProductGrid cols="100px 1fr" wrap={0} style={{ marginBottom: 0 }}>
          <Input
            label={t('product.currencyLabel')}
            name="currency"
            onChange={handleChange}
            type="currency"
            as="select"
            options={['Euro', 'Real', 'Dolar']}
            value={product.currency}
          />
          <Input
            label={t('product.valueLabel')}
            name="value"
            onChange={handleChange}
            type="value"
            value={product.value}
          />
        </S.ProductGrid>
        <Input
          label={t('product.brandLabel')}
          name="brand"
          onChange={(e) => {
            handleChange(e)
            handleImagesLimit(e)
          }}
          type="brand"
          as="select"
          options={['Dior', 'Chlóe', 'Jacquemus', 'Prada']}
          value={product.brand}
        />
      </S.ProductGrid>
      <S.ProductGrid cols="1fr 1fr">
        <Input
          label={t('product.materialLabel')}
          name="material"
          onChange={handleChange}
          type="material"
          value={product.material}
        />
        <Input
          label={t('product.colorLabel')}
          name="color"
          onChange={handleChange}
          type="color"
          value={product.color}
        />
      </S.ProductGrid>
      <div>
        <S.CategoryTitle>{t('product.categoryLabel')}</S.CategoryTitle>
        <ToggleBoxes condition={i18n.language} onClick={handlePickCategory} list={categories} />
      </div>
      {product.brand ? (
        <>
          <S.CategoryTitle>{t('product.imageLimit', { limit: imagesLimit })}</S.CategoryTitle>
          <ProductImagesCreation
            t={t}
            limit={imagesLimit}
            images={product.images}
            handleChange={setProduct}
          />
        </>
      ) : (
        <S.CategoryTitle style={{ marginBottom: 20, textAlign: 'center' }}>
          {t('product.noBrand')}
        </S.CategoryTitle>
      )}
      {!loading && (
        <Button variant="primary" onClick={handleCreateProduct}>
          {t('product.buttonCreate')}
        </Button>
      )}
      {loading && <Loader />}
    </S.ProductForm>
  )
}

export default ProductForm
