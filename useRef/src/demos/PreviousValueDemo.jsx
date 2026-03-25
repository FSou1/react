export default function PreviousValueDemo ({ count, previousCount }) {
  return (
    <>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount ?? 'None yet'}</p>
    </>
  )
}
