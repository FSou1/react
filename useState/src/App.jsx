import Toggle from './Toggle'
import Debounce from './Debounce'
import PhoneNumberInput from './PhoneNumberInput'

export default function App () {
  return (
    <div>
      <Toggle />

      <Debounce />

      <h2>Phone Number</h2>
      <PhoneNumberInput />
    </div>
  )
}
