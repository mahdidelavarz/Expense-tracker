import { useEffect, useState } from 'react';
import TransActions from './TransActions'
import OverView from './OverView';
const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [actions, setActions] = useState([]);
    const addTransAction = (formValue) => {
        const data = { ...formValue, id: Date.now() };
        setActions([...actions, data]);
    }
    const deleteHandler = (id) => {
        const filteredActions = actions.filter((action) => action.id !== id);
        setActions(filteredActions);
    }
    useEffect(() => {
        let exp = 0;
        let inc = 0;
        actions.forEach((a) => {
            console.log(a);
            a.type === 'expense' ? (exp = exp + parseFloat(a.amount)) : (inc = inc + parseFloat(a.amount));
        })
        setExpense(parseInt(exp));
        setIncome(parseInt(inc));

    }, [actions])
    return (
        <section>
            <OverView income={income} expense={expense} addTransAction={addTransAction} />
            <TransActions actions={actions} onDelete={deleteHandler} />
        </section>
    );
}

export default ExpenseApp;