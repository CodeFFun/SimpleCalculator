import {useState} from 'react'
import * as math from 'mathjs'

function Calculator() {

  const [display, setDisplay] = useState('')

  const onChange = () => {

  }

  const onClick = (e) => {
    const value = e.target.value
    const toString = value.toString()
    setDisplay(display + toString)
  } 

  const clear = () => {
    setDisplay('')
  }
  

  const calculate = () => {
    const calc = math.evaluate(display)
    setDisplay(calc)
  }


  return (
    <div className="container">
      <div className="calculator">
        <div className="input-display">
          <input type="text" className="display" value={display} onChange={onChange}/>
        </div>
        <div className="calculator-buttons">
          <div className="row-1">
            <button className=" btn btn-primary" value='9' onClick={onClick}>9</button>
            <button className=" btn btn-primary" value='8' onClick={onClick}>8</button>
            <button className=" btn btn-primary" value='7' onClick={onClick}>7</button>
            <button className="btn btn-secondary" value = '/' onClick={onClick}>/</button>
          </div>
          <div className="row-2">
            <button className="btn btn-primary" value='6' onClick={onClick}>6</button>
            <button className="btn btn-primary" value='5' onClick={onClick}>5</button>
            <button className="btn btn-primary" value='4' onClick={onClick}>4</button>
            <button className="btn btn-secondary" value = '*' onClick={onClick}>*</button>
          </div>
          <div className="row-3">
            <button className="btn btn-primary" value='3' onClick={onClick}>3</button>
            <button className="btn btn-primary" value='2' onClick={onClick}>2</button>
            <button className="btn btn-primary" value='1' onClick={onClick}>1</button>
            <button className="btn btn-secondary" value = '-' onClick={onClick}>-</button>
          </div>
          <div className="row-4">
            <button className="btn btn-secondary" value = '.' onClick={onClick}>.</button>
            <button className="btn btn-primary" value='0' onClick={onClick}>0</button>
            <button className="btn btn-secondary"  onClick={calculate}>=</button>
            <button className="btn btn-secondary" value = '+' onClick={onClick}>+</button>
          </div>
          <button className="btn btn-block" onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  )
  }

export default Calculator