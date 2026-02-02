import './Home.scss'
import Modal from '../../components/Modal/Modal'
import Input from '../../components/Input/Input'
import RadioButton from '../../components/RadioButton/RadioButton'

import { useState, useEffect } from 'react'


export default function Home() {
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('input for full name is:', name)
  }, [name])
  return (
    <div className='welcome'>
      <div className="welcome__content">
        <h1>Welcome to our expense claims portal.</h1>
        <h2>To help us prepare your claim accurately, please provide your name and your preferred reimbursement currency.</h2>
        <h3>We’ll take care of the rest.</h3>
      </div>

      <Modal>
        <Input id='fullName' value={name} onChange={setName} placeholder='Full name'></Input>
      </Modal>
      <RadioButton></RadioButton>
</div>
  )
}