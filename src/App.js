import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <Card
          title="Test title"
          description="Aliquip eu ea esse excepteur sint elit culpa et."
        />
        <Card title="Test1" description="description 1" />
      </header>
    </div>
  );
}

export default App;
