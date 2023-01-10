import React, { useState } from 'react'
import { useEffect } from 'react'
import FullMenuItem from '../FullMenuItem/FullMenuItem'
import Paginate from '../Paginate/Paginate'
import { MenuContainer, MenuWrapper, TotalMenuWrapper } from './ShopMenu.styles'
import { TFoods, useGetAllProductsQuery } from '../../RtkQuery/productsApi'
import ShopMenuFilter from '../ShopMenuFilter/ShopMenuFilter'

const ShopMenu = () => {
  const { data } = useGetAllProductsQuery('100')

  const [dataForFilter, setDataForFilter] = useState<TFoods[]>([])

  useEffect(() => {
    let recipes = data ? data.recipes : []
    setDataForFilter(recipes)
  }, [data])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = dataForFilter?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(dataForFilter?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const filterProductsList = (products: TFoods[]) => {
    setDataForFilter(products)
  }

  return (
    <MenuWrapper>
      <ShopMenuFilter filterProductsList={filterProductsList} />
      <TotalMenuWrapper>
        <MenuContainer>
          {dataForFilter ? (
            currentPosts?.map((item) => (
              <FullMenuItem key={item.id} {...item} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </MenuContainer>
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={dataForFilter?.length}
          currentPage={currentPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </TotalMenuWrapper>
    </MenuWrapper>
  )
}

export default ShopMenu
