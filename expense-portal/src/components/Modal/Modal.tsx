import styles from './Modal.module.scss'
import Input from '../Input/Input'

export default function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>title</h3>
        <p>This is glassmorphism modal</p>
        <Input label="name" value={name} placeholder='GBP'></Input>
      </div>
    </div>
  )
}