import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCondicional from './components/RenderCondicional';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCondicional x={5} y={10}/>
      {/* value of props in the RenderCondicional */}
      <Fragment />
      <Container>
        <h1>This its a container son</h1>
      </Container>
    </div>
  );
}

export default App;
