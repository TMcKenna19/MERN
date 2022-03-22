import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      fullName = {"Rick, Sanchez"}
      age = {80}
      hairColor = {"grey"}
      >
      </PersonCard>
      <PersonCard
      fullName = {"Bird, Person"}
      age = {45}
      hairColor = {"brown"}
      >
      </PersonCard>
      <PersonCard
      fullName = {"Morty, Smith"}
      age = {13}
      hairColor = {"brown"}
      >
      </PersonCard>
      <PersonCard
      fullName = {"Jerry, Smith"}
      age = {37}
      hairColor = {"brown"}
      >
      </PersonCard>
    </div>
  );
}

export default App;
