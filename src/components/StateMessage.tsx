type StateMessageProps =
  | { variant: 'loading' }
  | { variant: 'error'; message: string }
  | { variant: 'empty' }

const MESSAGES = {
  loading: 'Завантаження товарів, зачекайте…',
  empty: 'За вашим запитом товари не знайдені.',
} as const

export function StateMessage(props: StateMessageProps) {
  if (props.variant === 'loading') {
    return <div className="state state--info">{MESSAGES.loading}</div>
  }

  if (props.variant === 'error') {
    return (
      <div className="state state--error">
        Не вдалося завантажити товари.{' '}
        <span className="state__details">{props.message}</span>
      </div>
    )
  }

  return <div className="state state--empty">{MESSAGES.empty}</div>
}
