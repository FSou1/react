import { useState } from 'react'

const notificationMessages = [
  'Invoice #1042 was approved.',
  'Payment receipt is ready to download.',
  'New comment added to the review thread.',
] as const

export default function AriaRelevant() {
  const [notifications, setNotifications] = useState<string[]>([
    'Quarterly report was shared with the team.',
  ])

  const addNotification = () => {
    setNotifications((currentNotifications) => {
      const nextMessage =
        notificationMessages[currentNotifications.length % notificationMessages.length]

      return [...currentNotifications, nextMessage]
    })
  }

  const updateLatestNotification = () => {
    setNotifications((currentNotifications) => {
      if (currentNotifications.length === 0) {
        return ['Notification center refreshed.']
      }

      const nextNotifications = [...currentNotifications]
      nextNotifications[nextNotifications.length - 1] =
        'Latest notification was marked as reviewed.'

      return nextNotifications
    })
  }

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-relevant</h2>
      </header>

      <section className='page-card__section'>
        <p>
          tells assistive technology which kinds of changes in a live region are
          relevant enough to announce
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Notification list that announces additions and text changes</h4>
        <p>
          Add a notification or update the latest one to change the live region.
        </p>

        <div className='page-card__list'>
          <button type='button' onClick={addNotification}>
            Add notification
          </button>
          <button type='button' onClick={updateLatestNotification}>
            Update latest notification
          </button>
        </div>

        <ul aria-live='polite' aria-relevant='additions text'>
          {notifications.map((notification, index) => (
            <li key={`${notification}-${index}`}>{notification}</li>
          ))}
        </ul>

        <pre className='code-block'>
          <code>{`<ul aria-live="polite" aria-relevant="additions text">
  <li>Invoice #1042 was approved.</li>
  <li>Payment receipt is ready to download.</li>
</ul>`}</code>
        </pre>

        <h4>Feed where removals should also be announced</h4>
        <pre className='code-block'>
          <code>{`<section aria-live="polite" aria-relevant="additions removals">
  <article>New activity item</article>
</section>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>live regions add new messages, alerts, or activity items</li>
          <li>existing live-region text changes and should be announced</li>
          <li>removed items are meaningful enough for users to hear about</li>
          <li>you need to reduce unnecessary live-region announcements</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Common values include `additions`, `removals`, `text`, and `all`.
          </li>
          <li>
            The default value is usually `additions text`, which works for many
            status and notification regions.
          </li>
          <li>
            `aria-relevant` works with live regions; it does not make a region
            live by itself.
          </li>
        </ul>
      </section>
    </article>
  )
}
