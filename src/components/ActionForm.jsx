import { useState } from "react";

const ActionForm = ({ addTransAction }) => {
    const [formValue, setFormValue] = useState({ type: 'expense', amount: 0, desc: '' });
    const changeHandler = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        addTransAction(formValue);
    }
    return (
        <form className="actionForm" onSubmit={submitHandler}>
            <input name="desc" type="text" placeholder="Description" onChange={changeHandler} value={formValue.desc} />
            <input name='amount' type="number" placeholder="Amount" onChange={changeHandler} value={formValue.amount} />
            <div className="form">
                <input type="radio" name="type" onChange={changeHandler} value='expense' checked={formValue.type === 'expense'} />
                <label>Expense</label>
                <input type="radio" name="type" onChange={changeHandler} value='income' checked={formValue.type === 'income'} />
                <label>Income</label>
            </div>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default ActionForm;