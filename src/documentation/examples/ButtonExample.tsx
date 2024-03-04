import  Button  from "../../components/Button";
import LiveCodeComponent from "../components/LiveCodeExample";


const jsExample = `function Example() {
  return <div style={{display:'flex', gap:'18px', marginTop:'20px', marginBottom:'20px'}}>
  <Button>component</Button>
  <Button variant="outline" >Component</Button>
    <Button variant="text">Component</Button>
    <Button disabled>Component</Button>
  </div>;
}`.trim();

const tsExample = `function Example(): JSX.Element {
  return <div style={{display:'flex', gap:'18px', marginTop:'20px', marginBottom:'20px'}}>
  <Button>component</Button>
  <Button variant="outline" >Component</Button>
    <Button variant="text">Component</Button>
    <Button disabled>Component</Button>
  </div>;
}`.trim();

const ButtonExample = () => {
  return (
    <div>
      <LiveCodeComponent jsCode={jsExample} tsCode={tsExample} scope={{Button}}/>
    </div>
  );
};

export default ButtonExample;
