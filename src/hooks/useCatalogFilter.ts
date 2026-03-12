import { useMemo, useState } from 'react'
import type { Product, SortKey } from '../types/product'
import { PAGE_SIZE } from '../constants/catalog'

export function useCatalogFilter(products: Product[]) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortKey>('popularity_desc')
  const [page, setPage] = useState(1)

  const filteredAndSorted = useMemo(() => {
    const query = search.trim().toLowerCase()
    let list = query
      ? products.filter((p) => p.name.toLowerCase().includes(query))
      : [...products]

    switch (sort) {
      case 'price_asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'discount_desc':
        list = [...list].sort((a, b) => b.discount_percent - a.discount_percent)
        break
      case 'rating_desc':
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      case 'popularity_desc':
        list = [...list].sort((a, b) => b.reviews_count - a.reviews_count)
        break
      case 'default':
      default:
        list = [...list].sort((a, b) => Number(a.id) - Number(b.id))
    }

    return list
  }, [products, search, sort])

  const totalItems = filteredAndSorted.length
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const pageItems = filteredAndSorted.slice(start, start + PAGE_SIZE)

  const handleSearchChange = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  const handleSortChange = (key: SortKey) => {
    setSort(key)
    setPage(1)
  }

  const handlePageChange = (nextPage: number) => {
    if (nextPage >= 1 && nextPage <= totalPages) setPage(nextPage)
  }

  return {
    search,
    sort,
    page: currentPage,
    totalItems,
    totalPages,
    pageItems,
    handleSearchChange,
    handleSortChange,
    handlePageChange,
  }
}
