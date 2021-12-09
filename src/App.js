import './App.css';
import Card from './components/card'
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Background>
        <Card />
      </Background>
    </div>
  );
}

const Background = styled.div`
  background-color: hsl(233, 47%, 7%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;
