import './styles/App.css';
import ExpenseApp from './components/ExpenseApp';
function App() {
  return (
    <section className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <ExpenseApp />
    </section>
  );
}
export default App;
