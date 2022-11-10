import React from 'react'

/**
 * 
 * @param Item objeto con una key name
 * @param handleClickSetter funcion para setear las caracteristicas del github
 * @returns un li
 */

const Item = (props) => {
  function handleClick (){
    props.handleClickSetter(props.item)
  }
  return (
    <li onClick={handleClick} >
      {props.item.name}
    </li>
  )
}

export default Item