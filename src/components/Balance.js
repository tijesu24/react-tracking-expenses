import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  // Calculate the total amount using reduce
const totalAmount = transactions.reduce((accumulator, transaction) => {
  return accumulator + transaction.amount;
}, 0).toFixed(2);

const sign = totalAmount.amount < 0 ? '-' : ''

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 >{sign}${Math.abs(totalAmount).toFixed(2)}</h1>
    </div>
  )
}

export default Balance
