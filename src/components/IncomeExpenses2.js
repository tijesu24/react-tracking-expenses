import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map((transaction)=>{return(transaction.amount)})
    const income = amounts.filter((element) => element > 0).reduce((accumulator, value) => {return accumulator + value;
    },0).toFixed(2)

    const expenses = amounts.filter((element) => element < 0).reduce((accumulator, value) => {
        
        return accumulator + value;
    },0).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p  className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p  className="money minus">-${Math.abs(expenses).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
