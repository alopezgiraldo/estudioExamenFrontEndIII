import { useState } from 'react'
import ListaCompleta from './ListaCompleta'
import data from '../data/data.json'
import Description from './Description'

function App() {
  const [selectedObj, setSelectedObj] = useState(null)

  function handleClickSetter (item) {
    console.log(item.name);
    setSelectedObj(item);

  }
  return (
    <div>
      <h1>DALLAS MAVERICKS THE BEST TEAM IN THE WEST</h1>
      <Description objSelected = {selectedObj}/>
      <ListaCompleta arrayObjetos = {data} handleClickSetter = {handleClickSetter}/>
    </div>
  )
}

export default App
