import  Button  from "../components/Button"
import Sidebar from "../documentation/components/Sidebar"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import ButtonExample from "../documentation/examples/ButtonExample";
const MyComponentExample = `
function Example() {
  return (
    <>
    <Button disabled>Component</Button>
    <Button variant="outline">Component</Button>
    </>
    );
}
`.trim();
const ButtonComponent = () => {
  return (
    <>
    <Sidebar/>
    <LiveProvider code={MyComponentExample} scope={{ Button }} noInline={false} >
            <LivePreview />
            <LiveError />
            <LiveEditor />
        </LiveProvider>
    <div style={{display:'flex', gap:'18px', marginTop:'20px'}}>
        <Button>Component</Button>
        <Button variant="outline" >Component</Button>
        <Button variant="text">Component</Button>
        <Button disabled>Component</Button>

        <ButtonExample/>

    </div>
    </>
  )
}

export default ButtonComponent