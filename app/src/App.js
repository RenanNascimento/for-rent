import Predict from './components/Predict/Predict'
import * as El from './App.style';

const App = () => (
  <El.App>
    <El.Title>
      Preencha os dados abaixo <br/>
      e veja quanto será o valor <br/>
      do aluguel
    </El.Title>
    <Predict />
  </El.App>
);

export default App;
