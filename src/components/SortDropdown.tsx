import type { SortKey } from '../types/product'
import { SORT_LABELS } from '../constants/catalog'
import { ICONS } from '../constants/icons'

const SORT_OPTIONS: SortKey[] = [
  'popularity_desc',
  'price_asc',
  'price_desc',
  'discount_desc',
  'rating_desc',
]

type SortDropdownProps = {
  value: SortKey
  isOpen: boolean
  onToggle: () => void
  onChange: (key: SortKey) => void
}

export function SortDropdown({ value, isOpen, onToggle, onChange }: SortDropdownProps) {
  return (
    <div className="sort-dropdown">
      <button className="sort-button" type="button" onClick={onToggle}>
        <img src={ICONS.sort} alt="Сортування" className="sort-button__icon" />
        <span className="sort-button__label">{SORT_LABELS[value]}</span>
        <span
          className={isOpen ? 'sort-button__caret sort-button__caret--open' : 'sort-button__caret'}
          aria-hidden
        >
          <img src={ICONS.caret} alt="" width={10} height={10} />
        </span>
      </button>

      {isOpen && (
        <div className="sort-dropdown__menu">
          {SORT_OPTIONS.map((key) => (
            <button
              key={key}
              type="button"
              className="sort-dropdown__item"
              onClick={() => onChange(key)}
            >
              {SORT_LABELS[key]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
