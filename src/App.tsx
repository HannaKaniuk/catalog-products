import { useState } from 'react'
import './App.scss'

import {
  Header,
  SearchBar,
  SortDropdown,
  CatalogFooter,
  StateMessage,
  ProductGrid,
  Pagination,
} from './components'
import { useProducts } from './hooks/useProducts'
import { useCatalogFilter } from './hooks/useCatalogFilter'

function App() {
  const [isSortOpen, setIsSortOpen] = useState(false)

  const { products, isLoading, error } = useProducts()
  const {
    search,
    sort,
    page,
    totalItems,
    totalPages,
    pageItems,
    handleSearchChange,
    handleSortChange,
    handlePageChange,
  } = useCatalogFilter(products)

  return (
    <div className="catalog-layout">
      <Header />
      <SearchBar value={search} onChange={handleSearchChange} />

      <div className="catalog-page">
        <div className="catalog-page__count">
          {totalItems > 0 ? `${totalItems} товарів` : 'Товари'}
          <SortDropdown
            value={sort}
            isOpen={isSortOpen}
            onToggle={() => setIsSortOpen((o) => !o)}
            onChange={handleSortChange}
          />
        </div>

        <main className="catalog-main">
          {isLoading && <StateMessage variant="loading" />}
          {error && !isLoading && <StateMessage variant="error" message={error} />}
          {!isLoading && !error && totalItems === 0 && <StateMessage variant="empty" />}

          {!isLoading && !error && totalItems > 0 && (
            <>
              <ProductGrid products={pageItems} />
              <Pagination
                page={page}
                totalPages={totalPages}
                totalItems={totalItems}
                onChange={handlePageChange}
              />
            </>
          )}
        </main>

        <CatalogFooter />
      </div>
    </div>
  )
}

export default App
