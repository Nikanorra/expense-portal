import styles from './Modal.module.scss'

export default function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>title</h3>
        <p>This is glassmorphism modal</p>
      </div>
    </div>
  )
}