import './Home.scss'
import Modal from '../../components/Modal/Modal'

export default function Home() {
  return (
    <div className='welcome'>
      <h1>Welcome to our expense claims portal.</h1>
      <h2>To help us prepare your claim accurately, please provide your name and your preferred reimbursement currency.</h2>
      <h3>We’ll take care of the rest.</h3>

      <Modal></Modal>
</div>
  )
}