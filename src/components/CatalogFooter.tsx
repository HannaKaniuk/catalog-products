import { ICONS } from '../constants/icons'

export function CatalogFooter() {
  return (
    <footer className="catalog-footer">
      <div className="catalog-footer__brand-wrapper">
        <img src={ICONS.footerIcon1} alt="footer-icon-1" />
        <div className="catalog-footer__brand">AQVEX © 2024 | Всі права захищені</div>
      </div>
      <div className="catalog-footer__payments">
        <img src={ICONS.mastercard} alt="mastercard" />
        <img src={ICONS.visa} alt="visa" />
        <img src={ICONS.pay} alt="pay" />
        <img src={ICONS.gPay} alt="g-pay" />
      </div>
    </footer>
  )
}
