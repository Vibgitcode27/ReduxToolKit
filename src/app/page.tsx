"use client"

import Image from 'next/image'

import { RootState } from './GlobalRedux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement , incrementByAmount } from './GlobalRedux/Features/counter/counterSlice'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <main >
      <button onClick={() => {dispatch(increment())}} style={{ backgroundColor : "Cyan" , border :"2px solid red"}}>Increment</button>
      <span>{count}</span>
      
      <button style={{ backgroundColor : "Cyan" , border :"2px solid red"}} onClick={() => {dispatch(decrement())}}>decrement</button>
      <span>{count}</span>

      <button style={{ backgroundColor : "Cyan" , border :"2px solid red"}} onClick={() => {dispatch(incrementByAmount(7))}}>incrementBy 7</button>
      <span>{count}</span>
    </main>
  )
}
