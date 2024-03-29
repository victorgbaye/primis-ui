import { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled from 'styled-components';


// Styled components remain the same
const TabButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => active ? '#007bff' : '#f0f0f0'};
  color: ${({ active }) => active ? 'white' : 'black'};
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 5px;
`;

const CopyButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;

  
`;


const StyledLiveEditor = styled(LiveEditor)`
  && {
    font-size: 14px !important;
    /* background-color: red !important;  */
    color: #abb2bf !important; // Light grey text color for readability
    font-family: 'Fira Code', 'Monaco', monospace !important;
    border-radius: 4px !important;
    overflow: auto !important;
    padding: 10px !important; // Increase padding for a more spacious feel
    border: 1px solid #abb2bf !important; // Subtle border
    box-shadow: 0 2px 15px rgba(0,0,0,0.1) !important; // Soft box shadow for depth
    /* width: 100px; */

    .token-line{
      color: blue !important;
    }
    .language-tsx{
      background: #090942 !important;
    }
    .prism-code {
      color: blue !important;
    }
    .token{
      color: red !important;
    }
    .tag{
      color: red !important;
    } 
    .class-name{
      color: red !important;
    }
    .token-line {
    color: #6272a4 !important; /* For comments */
  }

  .prism-code {
    color: #f8f8f2 !important; /* Default text color */
  }

  .token {
    color: #8be9fd !important; /* Base token color */
  }

  .tag {
    color: #ff79c6 !important; /* HTML/XML tags or components */
  }

  .class-name {
    color: #50fa7b !important; 
  }
  }
`;


const StyledLiveError = styled(LiveError)`
  color: red;
  background-color: pink; // Custom background for errors
  padding: 10px;
  border-radius: 4px;
`;

const StyledLivePreview = styled(LivePreview)`
  padding: 10px;
  /* border: 1px solid #ddd; */
  border-radius: 4px;
  background-color: white; // Light background for preview
`;
 
interface LiveCodeComponentProps {
    jsCode?: string;
    tsCode?: string;
    // Defining scope to explicitly expect React component types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    scope?: { [key: string]: React.ComponentType<any> };
    noInline?: boolean;
  }
// Update the component to use TypeScript
const LiveCodeComponent: React.FC<LiveCodeComponentProps> = ({ jsCode = '', tsCode = '', scope = {}, noInline = false }) => {
  const [activeCode, setActiveCode] = useState<string>(jsCode || tsCode);
  const [language, setLanguage] = useState<'JS' | 'TS'>(jsCode ? 'JS' : 'TS');
  const [copyFeedback, setCopyFeedback] = useState<string>('');

  const copyCodeToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(activeCode);
      setCopyFeedback('Code copied!');
      setTimeout(() => setCopyFeedback(''), 2000);
    } catch (err) {
      setCopyFeedback('Failed to copy');
      setTimeout(() => setCopyFeedback(''), 2000);
    }
  };

  const switchLanguage = (lang: 'JS' | 'TS') => {
    setLanguage(lang);
    setActiveCode(lang === 'JS' ? jsCode : tsCode);
  };

  return (
    <div style={{ position: 'relative', marginBottom: '20px' , width:'700px', border:'1px solid red'}}>
     
      <LiveProvider code={activeCode} scope={scope} noInline={noInline}>
        <StyledLivePreview style={{ padding: '10px',  marginTop: '10px', borderRadius: '4px' }} />
      {copyFeedback && <div style={{ marginTop: '10px', color: 'green' }}>{copyFeedback}</div>}
        <div>
          {jsCode && <TabButton onClick={() => switchLanguage('JS')} active={language === 'JS'}>JS</TabButton>}
          {tsCode && <TabButton onClick={() => switchLanguage('TS')} active={language === 'TS'}>TS</TabButton>}
          <CopyButton onClick={copyCodeToClipboard}>Copy</CopyButton>
        </div>
        <StyledLiveEditor/>
        <StyledLiveError style={{ color: 'red', padding: '10px', backgroundColor: 'lightgray' }} />
      </LiveProvider>
    </div>
  );
};

export default LiveCodeComponent;
