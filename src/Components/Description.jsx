import React from 'react'

const Description = (props) => {
    if (!props.objSelected){
        return (
            <div>
                Selecciona un repositorio
            </div>
        )
    }
  return (
    <div>
        <h2>{props.objSelected.name}</h2>
        <h4>{props.objSelected.description}</h4>
        <h5>{props.objSelected.fork?'esta forkeado': "no esta forkeado"}</h5>
        <a href={props.objSelected.html_url} target = "_blank">Go to github</a>
        <h5>Created at: {props.objSelected.created_at}</h5>
        <h5>Language: {props.objSelected.language}</h5>
    </div>
  )
}

export default Description