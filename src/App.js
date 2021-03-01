import './App.css';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <>
      <header className="App-header">
        <h2>GitHub User Search</h2>
      </header>
      <div className="App">
        <SearchForm />
      </div>
    </>
  );
}

export default App;
