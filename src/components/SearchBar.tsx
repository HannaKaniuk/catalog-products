import { ICONS } from '../constants/icons'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = 'Пошук' }: SearchBarProps) {
  return (
    <div className="search-container">
      <div className="search">
        <img src={ICONS.search} alt="Поиск" className="search__icon" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="search__input"
        />
      </div>
    </div>
  )
}
