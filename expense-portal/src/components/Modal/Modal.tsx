// import { Outlet } from 'react-router-dom'
import { ReactNode } from 'react'
import styles from './Modal.module.scss'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

export default function Modal({children, onClose}: ModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>title</h3>
          {children}
      </div>
    </div>
  )
}