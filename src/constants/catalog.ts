import type { SortKey } from '../types/product'

export const PAGE_SIZE = 12

export const SORT_LABELS: Record<SortKey, string> = {
  default: 'За замовчуванням',
  price_asc: 'Від дешевшого',
  price_desc: 'Від дорожчого',
  discount_desc: 'По знижці',
  rating_desc: 'За рейтингом',
  popularity_desc: 'По популярності',
} as const
