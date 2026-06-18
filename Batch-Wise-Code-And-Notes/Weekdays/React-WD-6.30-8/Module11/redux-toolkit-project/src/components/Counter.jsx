
// we need this reducer function for consuming 
import {increment, decrement, reset} from "../Redux/Store/counterSlice"


// we need useDispatch and useSelector hook by react-redux 

import {useDispatch, useSelector} from "react-redux"





function Counter() {

  const count = useSelector((state)=>state.counter.value) // slice value = 0 

  const dispatch = useDispatch()


  return (
    <>
      <h2>Count: {count }</h2>

      <button onClick={()=> dispatch(increment())} >+</button>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  );
}

export default Counter;
