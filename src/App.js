import logo from './logo.svg';
import './App.css';
import './Start'
import Start from './Start';
import Globais from './Globais';
import Controle from './Controle';
import Saida from './Saida';
import Titulo from './Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Titulo />
          <Saida />
          <Controle />
          <Start /> {/* Esse é o botao criado como um componente. A criação dele acontece no arquivo Start.js. */}
      </header>
    </div>
  );
}

export default App;
