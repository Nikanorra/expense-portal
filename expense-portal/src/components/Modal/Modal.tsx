// import { Outlet } from 'react-router-dom'
import { ReactNode } from 'react'
import styles from './Modal.module.scss'

type ModalProps = {
  children: ReactNode
}

export default function Modal({children}: ModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>title</h3>
          {children}
      </div>
    </div>
  )
}