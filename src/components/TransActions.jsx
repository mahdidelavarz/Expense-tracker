const TransActions = ({ actions, onDelete }) => {
    return (
        <section className="actions">
            <h3>Transactions</h3>
            <input type="text" placeholder="Search ..." />
            {actions.map((action) => {
                console.log(action)
                return (
                    <div className={action.type === 'expense' ? 'action ex' : 'action in'}>
                        <p className="desc">{action.desc}</p>
                        <span>{action.amount}</span>
                        <button className="delete" onClick={() => onDelete(action.id)}>Delete</button>
                    </div>
                )
            })}
        </section>
    );
}

export default TransActions;