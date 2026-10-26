import { useState } from 'react'
import configureMeasurements from "convert-units";
import allMeasures from "convert-units/definitions/all";


import './App.css'

function App() {
  const [value, setValue] = useState(0)
  const [magnitud, setMagnitud] = useState("")
  const [from, setFrom] = useState(" ")
  const [to, setTo] = useState(" ")
  
    const convert = configureMeasurements(allMeasures);
    const magnitudes = convert().measures()
    const unidades = convert().possibilities(magnitud)

    const resultado = value !== "" && unidades.includes(from) && unidades.includes(to) ? convert(value).from(from).to(to) : "Conversión no válida"

    const cambiarMagnitud = (mag) => {
      const nuevaMagnitud = mag.target.value
      const unidades = convert().possibilities(nuevaMagnitud)
      setMagnitud(nuevaMagnitud)
      setFrom(unidades[0])
      setTo(unidades[1]||unidades[0])
    }
    const intercambiarMagnitudes = () => {
      const temp = from
      setFrom(to)
      setTo(temp)
    }

  return (
    <>
    <div>
      <h1>Conversor de Unidades</h1>
      <select onChange={cambiarMagnitud}>
        {magnitudes.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <div>
      <select onChange={(e) => setFrom(e.target.value)} value={from}>
        {convert().possibilities(magnitud).map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
      <button onClick={intercambiarMagnitudes}>Intercambiar</button>
      <select onChange={(e) => setTo(e.target.value)} value={to}>
        {convert().possibilities(magnitud).map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>

      </div>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />

     <p>Resultado: {resultado}</p>
    </div>
    
      
    </>
  )
}

export default App
