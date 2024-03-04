import Tabs from "../components/Tabs"

const TabsComponent = () => {
    const tabsData = [
        { id: 1, label: 'Availability', content: <p>Tab 1</p> },
        { id: 2, label: 'Profile', content: <p>Tab2</p> },
      ];
  return (
    <div>
        <Tabs tabs={tabsData}/>
    </div>
  )
}

export default TabsComponent