export default function FirstRenderDemo ({ isFirstRender, count, onIncrement }) {
  return (
    <>
      <p>
        Is this the first render (only works in production mode)?{' '}
        {isFirstRender ? 'Yes' : 'No'}
      </p>
      <p>
        Rerender: <button onClick={onIncrement}>Increment</button>
      </p>
      <p>Current render count: {count}</p>
    </>
  )
}
