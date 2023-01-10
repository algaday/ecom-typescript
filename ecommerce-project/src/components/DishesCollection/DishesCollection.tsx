import React from 'react'
import { useState } from 'react'
import { useGetAllProductsQuery } from '../../RtkQuery/productsApi'
import FullMenuItem from '../FullMenuItem/FullMenuItem'
import {
  CategoriesButtons,
  CategoryMenu,
  CollectionCategories,
  LeftArrow,
  RightArrow,
} from './DishesCollection.styles'

type Foods = {
  id: number
  title: string
  servings: number
  pricePerServing: number
  image: string
  vegetarian: boolean
  vegan: boolean
  glutenFree: boolean
  veryHealthy: boolean
  veryPopular: boolean
  categories?: string
}

function DishesCollection() {
  const { data, isLoading } = useGetAllProductsQuery('100')

  let allProducts: Foods[] = []

  if (!isLoading) {
    allProducts = data
      ? data?.recipes?.map((item) => {
          let categories = ['breakfast', 'lunch', 'dinner']
          let randomNum = Math.floor(Math.random() * categories.length)

          return { ...item, categories: categories[randomNum] }
        })
      : []
  }

  const [value, setValue] = useState('lunch')
  const [currentPage, setCurrentPage] = useState(1)
  const [dishesPerPage] = useState(6)
  let filteredMenu = allProducts?.filter((item) => item.categories === value)

  const indexOfLastPost = currentPage * dishesPerPage
  const indexOfFirstPost = indexOfLastPost - dishesPerPage
  const currentPosts = filteredMenu?.slice(indexOfFirstPost, indexOfLastPost)

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredMenu.length / dishesPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }
  const checkValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === e.target.value) {
      return
    }
    setValue(e.target.value)
    setCurrentPage(1)
  }

  return (
    <>
      <CollectionCategories>
        <LeftArrow onClick={previousPage} />

        <CategoriesButtons
          value={'breakfast'}
          onClick={checkValue}
          className={value === 'breakfast' ? 'active' : null}
        >
          Breakfast
        </CategoriesButtons>
        <CategoriesButtons
          value={'lunch'}
          onClick={checkValue}
          className={value === 'lunch' ? 'active' : null}
        >
          Lunch
        </CategoriesButtons>
        <CategoriesButtons
          value={'dinner'}
          onClick={checkValue}
          className={value === 'dinner' ? 'active' : null}
        >
          Dinner
        </CategoriesButtons>
        <RightArrow onClick={nextPage} />
      </CollectionCategories>
      <CategoryMenu>
        {allProducts ? (
          currentPosts.map((item) => <FullMenuItem key={item.id} {...item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </CategoryMenu>
    </>
  )
}

export default DishesCollection
