import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, incrementByTen, decrement } from '../redux/actions/counterActions'

const Counter = () => {
  const counter = useSelector(state => state.counterReducer.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      {counter}
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByTen())}>+10</button>
    </div>
  )
}



export default Counter


