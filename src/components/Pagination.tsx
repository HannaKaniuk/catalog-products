import { PAGE_SIZE } from '../constants/catalog'
import { ICONS } from '../constants/icons'

type PaginationProps = {
  page: number
  totalPages: number
  totalItems: number
  onChange: (page: number) => void
}

export function Pagination({ page, totalPages, totalItems, onChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
  const from = (page - 1) * PAGE_SIZE + 1
  const to = Math.min(page * PAGE_SIZE, totalItems)

  return (
    <nav className="pagination" aria-label="Пагінація">
      <div className="pagination__info">
        Показано {from}–{to} з {totalItems}
      </div>
      <div className="pagination__controls">
        <button
          type="button"
          className="pagination__nav"
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
        >
          <img src={ICONS.back} alt="back" />
        </button>
        <div className="pagination__pages">
          {pageNumbers.map((p) => (
            <button
              key={p}
              type="button"
              className={p === page ? 'pagination__page pagination__page--active' : 'pagination__page'}
              onClick={() => onChange(p)}
            >
              {p}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="pagination__nav"
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
        >
          <img src={ICONS.next} alt="next" />
        </button>
      </div>
    </nav>
  )
}
