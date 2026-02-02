import './Button.scss'

export type Button = {
  title: string,
  link: string
}


export default function Button({title, link}: Button) {
  return (
    <button className='button' LinkTo={link}>{title}</button>
  )
}