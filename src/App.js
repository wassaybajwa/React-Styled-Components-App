import Styled from "styled-components";

const BasicTitle = Styled.h1`
  text-align: center;
  text-transform: capitalize;
`
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>Styled Component</BasicTitle>
      <button className="btn">Click me</button>
 
    </div>
  );
}

export default App;
