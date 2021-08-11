import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import {DefaultButton, HipsterButton} from "./components/Buttons"
import { Button } from '@material-ui/core'

const StyledBtn = styled(Button)`
  text-transform: capitalize;

`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      {/* <BasicTitle special>Styled Component</BasicTitle>
      <BasicTitle>styled components</BasicTitle>

      <DefaultButton>Click me</DefaultButton>
      <HipsterButton>Click me</HipsterButton> */}
      <Button variant="contained" color="primary">
        Hello World!
      </Button>
      <StyledBtn variant="contained" color="primary">
        Hello World!
      </StyledBtn>

    </div>
  );
}

export default App;
