import useCalculateContext from "../context/CalculateContext.jsx";

const Input = ({label, name, value}) => {
 
 const {state, dispatch} = useCalculateContext()
 
 const handleClick = (e) => {

  console.log(value)
  dispatch({
   type: "set_value",
   payload: {
    name,
    value
   }
  })
 }
 
 return (
  <>
   <button id={label} onClick={handleClick} name={name} datavalue={value}>{label}</button>
  </>
 )
}

export default Input