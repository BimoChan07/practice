import React from "react";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Heading />
      <Paragraph />
      <List />
      <Button>Submit</Button>
      <Button>Reset</Button>
    </>
  );
}

export default App;
