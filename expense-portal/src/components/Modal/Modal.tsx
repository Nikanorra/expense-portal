import styles from './Modal.module.scss'
import Input from '../Input/Input'
import { useState } from 'react'

export default function Modal() {
  const [name, setName] = useState('')
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>title</h3>
        <Input value={name} onChange={setName} placeholder='Full name'></Input>
      </div>
    </div>
  )
}