import { useState } from 'react'
import type { Product } from '../types/product'
import { ICONS } from '../constants/icons'

const IMAGE_URL = '/bottle.png'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    price,
    old_price,
    discount_percent,
    currency,
    reviews_count,
    in_stock,
    volumes,
    selected_volume_id,
    category,
  } = product

  const [isVolumeOpen, setIsVolumeOpen] = useState(false)
  const [chosenVolumeId, setChosenVolumeId] = useState(selected_volume_id)

  const selectedVolume = volumes.find((v) => String(v.id) === String(chosenVolumeId)) ?? volumes[0]

  const handleVolumeSelect = (volumeId: string) => {
    setChosenVolumeId(volumeId)
    setIsVolumeOpen(false)
  }

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={IMAGE_URL}
          alt={name}
          className="product-card__image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>

      <div className="product-card__bottom">
        <div className="product-card__body">
          <div className="product-card__price-row">
            <div className="product-card__price-main">
              {old_price > price && (
                <span className="product-card__old-price">
                  {old_price.toLocaleString('uk-UA')} {currency}
                </span>
              )}
              <div className="product-card__price-line">
                <span className="product-card__price">
                  {price.toLocaleString('uk-UA')} {currency}
                </span>
                {discount_percent > 0 && (
                  <span className="product-card__discount-pill">{discount_percent}%</span>
                )}
              </div>
            </div>
          </div>

          <div className="product-card__rating-row">
            <h2 className="product-card__title">{name}</h2>
            <div className="rating-container">
              <span className="product-card__rating-stars">★★★★★</span>
              <button className="product-card__rating-link" type="button">
                {reviews_count}
              </button>
            </div>
          </div>

          <div className="product-card__status-row">
            <div className="status-container">
              <img width={16} height={16} src={ICONS.status} alt="status" />
              <p className="status">В наявності</p>
            </div>
            <div className="status-container">
              <img src={ICONS.category} alt="" width={9} height={11} />
              <p className="name-product">{category}</p>
            </div>
          </div>
        </div>

        <div className="product-card__controls">
          <div className="product-card__volume-dropdown">
            {selectedVolume && (
              <button
                className="product-card__volume-pill"
                type="button"
                disabled={!selectedVolume.in_stock}
                onClick={() => setIsVolumeOpen((open) => !open)}
              >
                <span>{selectedVolume.label}</span>
                <span
                  className={
                    isVolumeOpen
                      ? 'product-card__volume-icon product-card__volume-icon--open'
                      : 'product-card__volume-icon'
                  }
                  aria-hidden
                >
                  <img src={ICONS.caret} alt="" width={10} height={10} />
                </span>
              </button>
            )}

            {isVolumeOpen && (
              <div className="product-card__volume-popup sort-dropdown__menu">
                {volumes.map((v) => (
                  <button
                    key={`${product.id}-vol-${v.id}`}
                    type="button"
                    className={`sort-dropdown__item${
                      !v.in_stock ? ' sort-dropdown__item--disabled' : ''
                    }`}
                    onClick={() => v.in_stock && handleVolumeSelect(v.id)}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="product-card__button" type="button" disabled={!in_stock}>
            <img src={ICONS.basket} alt="basket" />
            В корзину
          </button>
        </div>
      </div>
    </article>
  )
}
