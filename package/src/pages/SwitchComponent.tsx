import Switch from '../components/Switch'
import Sidebar from '../documentation/components/Sidebar'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const MyComponentExample = `
function Example() {
  return <Switch/>;
}
`.trim();

const SwitchComponent = () => {
  return (
    <div>
         <LiveProvider code={MyComponentExample} scope={{ Switch }}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
        <Sidebar/>
        <Switch/>
    </div>
  )
}

export default SwitchComponent