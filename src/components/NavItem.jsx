
export const NavItem = ({item, setIsOpen}) => {

  const handlerClick = () => {
    setIsOpen(false)
  }


  return (
    <li className='nav__collapse-item' >
        <a href="#" onClick={handlerClick}>{item}</a>
    </li>
  )
}
