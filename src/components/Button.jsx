import './button.css'

export const Button = ({text, color, type = 'button', shadow = true}) => {
  return (
    <button className={`btn ${color} ${shadow ? 'btn__shadow' : ''}`} type={type}>
        {text}
    </button>
  )
}
