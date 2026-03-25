export default function DemoSection ({ title, description, children }) {
  return (
    <section className='demo-section'>
      <div className='demo-section__header'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className='demo-section__body'>{children}</div>
    </section>
  )
}
