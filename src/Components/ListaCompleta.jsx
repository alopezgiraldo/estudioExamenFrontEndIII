import React from 'react'
import Item from './Item'

/**
 * 
 * @param ListaCompleta recibe un array con objetos de tipo .JSON
 * @param handleClickSetter funcion para setear las caracteristicas del github.
 * @returns devuelve una lista de nombres
 */

const ListaCompleta = (props) => {
  return (
    <ul>
        {props.arrayObjetos.map((cadaObj) => {
            return <Item key = {cadaObj.id} item = {cadaObj} handleClickSetter = {props.handleClickSetter}/>
        })}
    </ul>
  )
}

export default ListaCompleta