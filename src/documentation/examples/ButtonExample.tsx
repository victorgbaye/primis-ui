import  Button  from "../../components/Button";
import LiveCodeComponent from "../components/LiveCodeExample";


const jsExample = `function Example() {
  return <div>
  <Button>component</Button>
  <Button variant="outline" >Component</Button>
    <Button variant="text">Component</Button>
    <Button disabled>Component</Button>
  </div>;
}`;

const tsExample = `function Example(): JSX.Element {
  return <div><Button>Component</Button></div>;
}`;

const ButtonExample = () => {
  return (
    <div>
      <LiveCodeComponent jsCode={jsExample} tsCode={tsExample} scope={{Button}}/>
    </div>
  );
};

export default ButtonExample;
