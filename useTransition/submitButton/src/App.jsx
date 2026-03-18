import './App.css'
import SubmitButton from './SubmitButton'
import CheckoutForm from './CheckoutForm'
import CheckoutFormWithoutAction from './CheckoutFormWithoutAction'

function App() {
  return (
    <>
      <h1>submitButton</h1>
      <SubmitButton />

      <h1>Checkout Form</h1>
      <CheckoutForm />

      <h1>Checkout Form (Without action)</h1>
      <CheckoutFormWithoutAction />
    </>
  )
}

export default App
