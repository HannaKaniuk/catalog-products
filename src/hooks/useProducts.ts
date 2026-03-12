import { useEffect, useState } from 'react'
import type { ApiResponse, Product } from '../types/product'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isCancelled = false

    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const res = await fetch('/api/v1/products')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json = (await res.json()) as ApiResponse
        if (!json.success || !json.data?.products) throw new Error('Invalid API response')

        if (!isCancelled) setProducts(json.data.products)
      } catch (e) {
        if (!isCancelled) {
          setError(e instanceof Error ? e.message : 'Unknown error')
        }
      } finally {
        if (!isCancelled) setIsLoading(false)
      }
    }

    fetchProducts()
    return () => {
      isCancelled = true
    }
  }, [])

  return { products, isLoading, error }
}
