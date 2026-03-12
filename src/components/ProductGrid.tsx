import type { Product } from '../types/product'
import { ProductCard } from './ProductCard'

type ProductGridProps = {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="catalog-grid" aria-label="Список товарів">
      {products.map((product, idx) => (
        <ProductCard key={`${product.id}-${idx}`} product={product} />
      ))}
    </section>
  )
}
