import Button from "./Button.jsx";
import useCalculateContext from "../context/CalculateContext.jsx";


const operators = [
 {
  label: "+",
  operator: "+"
 },
 {
  label: "-",
  operator: "-"
 },
 {
  label: "x",
  operator: "*"
 }
]

const Buttons = () => {
 
 const {dispatch} = useCalculateContext()
 const handleAddOperator = (op) => {
    dispatch({
        type: 'set_operator',
        payload: op
    })
 }
 const handleCalculate = () => {
  dispatch({
   type: "calculate",
  })
 }
 
 const handleReset = () => {
  dispatch({
   type: "reset"
  })
 }
 
 return (
  <>
   {
    operators.map((op, i) => <Button label={op.label} key={i} handleClick={() => handleAddOperator(op.operator)} />)
   }
   <br />
   <Button label={"reset"} handleClick={handleReset} />
   <Button label={"="} handleClick={handleCalculate} />
  </>
 )
}

export default Buttons