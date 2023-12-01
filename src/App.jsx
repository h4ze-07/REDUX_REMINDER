import { useSelector, useDispatch } from "react-redux"
import { incr, decr, reset, showHi, hideHi } from "./state/countSlice";
import { add, sortUD, sortDU } from "./state/listSlice";
import { useRef, useState } from "react";

function App() {

  const [input, setInput] = useState('');

  const inputRef = useRef(null)

  const count = useSelector((state) => state.counter.count);
  const text = useSelector((state) => state.counter.text);
  const list = useSelector((state) => state.list)
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const addText = () => {
    dispatch(add(input));
    inputRef.current.value = '';
  }

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(incr())}>+</button>
        <button onClick={() => dispatch(decr())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div>
        <p>{text}</p>
        <button onClick={() => dispatch(showHi())}>Show</button>
        <button onClick={() => dispatch(hideHi())}>Hide</button>
      </div>

      <div>
        <input type="text" onChange={(e) => handleInputChange(e)} ref={inputRef}/>
        <button onClick={addText}>Add</button>
        <button onClick={() => dispatch(sortDU())}>Sort 1</button>
        <button onClick={() => dispatch(sortUD())}>Sort 2</button>
        <div>
          {list.map(el => (
            <article key={el}>
              <p>{el}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
