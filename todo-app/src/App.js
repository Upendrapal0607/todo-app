import logo from './logo.svg';
import './App.css';
import { Todo } from './Componants/Todo';
import styled from'styled-components';

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <DIV>
        <Todo/>
      </DIV>
    </div>
  );
}

export default App;
const DIV = styled.div`
/* border: 1px solid red; */

/* background-color: #90A4AE; */
`
