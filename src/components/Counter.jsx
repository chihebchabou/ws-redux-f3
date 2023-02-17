import React from 'react'
import { connect } from 'react-redux'
import { increment, incrementByTen, decrement } from '../redux/actions/counterActions'

const Counter = ({counter, inc, incByTen, dec}) => {
  return (
    <div>
      <button onClick={() => inc()}>+</button>
      {counter}
      <button onClick={() => dec()}>-</button>
      <button onClick={() => incByTen()}>+10</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer.counter
  }
}

const mapDispathcToProps = dispatch => {
  return {
    inc: () => dispatch(increment()),
    incByTen: () => dispatch(incrementByTen()),
    dec: () => dispatch(decrement()),
  }
}

export default connect(mapStateToProps, mapDispathcToProps)(Counter)


