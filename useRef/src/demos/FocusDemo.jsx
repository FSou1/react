export default function FocusDemo ({ inputRef, isFocused }) {
  return (
    <>
      <input ref={inputRef} placeholder='Focus me' />
      <p>Is focused: {isFocused ? 'Yes' : 'No'}</p>
    </>
  )
}
