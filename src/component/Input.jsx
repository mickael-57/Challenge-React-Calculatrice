import useCalculateContext from "../context/CalculateContext.jsx";

const Input = ({label, name, value}) => {
 
 const {state, dispatch} = useCalculateContext()
//  const value = state[name]
 
 const handleClick = (e) => {
//   const {value} = e.target
//   const val = e.target.attributes.datavalue.nodeValue;
  
//   if (!/^\d+$/.test(val) && val.trim() !== "") {
//    return
//   }
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