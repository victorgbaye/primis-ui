import {useState} from 'react'
import { TabButton, TabContainer, TabContent } from '../assets/wrappers/Tabs.styles';

interface TabProps {
    id: number;
    label: string;
    content: React.ReactNode;
  }
interface TabsProps {
    tabs: TabProps[];
  }

const Tabs: React.FC<TabsProps> = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
      };
  return (
    <>
    <TabContainer className='tab-content'>
      {tabs.map((tab, index) => (
        <TabButton
          key={tab.id}
          isActive={index === activeTab}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabContainer>
    <TabContent>{tabs[activeTab].content}</TabContent>
  </>
  )
}

export default Tabs