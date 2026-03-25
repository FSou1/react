import Toggle from './Toggle'
import Debounce from './Debounce'
import PhoneNumberInput from './PhoneNumberInput'
import UseArraySample from './UseArraySample'

export default function App () {
  return (
    <div>
      <Toggle />

      <Debounce />

      <h2>Phone Number</h2>
      <PhoneNumberInput />

      <h2>Use Array Sample</h2>
      <UseArraySample />
    </div>
  )
}
