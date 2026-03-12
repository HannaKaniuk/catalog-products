export type ProductVolume = {
  id: string
  label: string
  in_stock: boolean
}

export type Product = {
  id: string
  slug: string
  name: string
  image: string
  price: number
  old_price: number
  discount_percent: number
  currency: string
  rating: number
  reviews_count: number
  in_stock: boolean
  category: string
  volumes: ProductVolume[]
  selected_volume_id: string
}

export type ApiResponse = {
  success: boolean
  data: {
    products: Product[]
  }
}

export type SortKey =
  | 'default'
  | 'price_asc'
  | 'price_desc'
  | 'discount_desc'
  | 'rating_desc'
  | 'popularity_desc'
