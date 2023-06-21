import { useState } from "react";
import ActionForm from "./ActionForm";
const OverView = ({ income, expense, addTransAction }) => {
    const [show, setShow] = useState(true);
    return (
        <div>
            <div className='balance'>
                <p>Balance is : {income - expense}</p>
                <button onClick={() => setShow((prevState) => !prevState)}>{show ? 'Cancel' : 'Add'}</button>
            </div>
            {show && <ActionForm addTransAction={addTransAction} />}
            <div className='exAndIn'>
                <div className='ex'>Expense  <span> {expense}</span></div>
                <div className='in'>Income  <span>{income}</span> </div>
            </div>
        </div>
    );
}

export default OverView;