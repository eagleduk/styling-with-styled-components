
import React, {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Buttton";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  &+& {
    margin-top: 1rem
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595"
}

function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  }

  const onConfirm = () => {
    setDialog(true);
  }

  const onCancel = () => {
    setDialog(false);
  }

  return (
    <ThemeProvider theme={{palette}}>
      <>
        <AppBlock>
        <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button color="gray" size="medium">BUTTON</Button>
            <Button color="pink" size="small">BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" outline>BUTTON</Button>
            <Button color="gray" size="medium" outline>BUTTON</Button>
            <Button color="pink" size="small" outline>BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullWidth>BUTTON</Button>
            <Button color="gray" size="large" fullWidth>BUTTON</Button>
            <Button color="pink" size="large" fullWidth>BUTTON</Button>
          </ButtonGroup>
        </AppBlock>
        <AppBlock>
        <Button color="pink" size="large" fullWidth onClick={onClick}>
          삭제
        </Button>
        </AppBlock>
        <Dialog 
          title="정말로dd 삭제?" 
          confirmText="삭제" 
          cancelText="취소" 
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터를 정말로 삭제?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
