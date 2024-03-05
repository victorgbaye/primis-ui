import Tabs from "../components/Tabs"

const TabsComponent = () => {
    const tabsData = [
        { id: 1, label: 'Tab 1', content: <p>Tab 1 content</p> },
        { id: 2, label: 'Tab 2', content: <p>Tab 2 content</p> },
        { id: 3, label: 'Tab 3', content: <p>Tab 3 content</p> },

      ];
  return (
    <div>
        <Tabs tabs={tabsData}/>
    </div>
  )
}

export default TabsComponent