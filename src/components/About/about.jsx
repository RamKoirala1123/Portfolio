// import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useEffect, useRef, useState } from 'react';
import './about.css'

const About = () => {
  const codeString = `class RamKoirala {

    String name = 'Ram Koirala';
    String email = 'ramkoirala1123@gmail.com';
        
    List<Map<String, String>> education() {
      return [
        {
          '2016-2018': 
          'Kavre Secondary School, Banepa - High School Education, Science Faculty'
          },
        {
          '2019-2024':  
          'Kathmandu University, Dhulikhel- Bachelor of Engineering , Computer Engineering'
        }
      ];
    }
        
    List<String> skills() {
      return [
       'HTML/CSS/JS',
        'Flutter',
        'Dart',
        'React',
        'C#',
        'C/C++',
        'Python',
        ];
        }
      } `;

  const customStyle = {
    lineHeight: '1.5',
    fontSize: '1.3rem',
    borderRadius: '5px',
    backgroundColor: 'var(--background-color)',
    // opacity:'0',
    // backgroundColor: 'transparent',

    padding: '0px',
  };

  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.style.whiteSpace = 'pre-wrap';
    }
  }, []);
  // const modifiedSolarizedLight = {
  //   ...solarizedlight,
  //   'code[class*="language-javascript"]': {
  //     all: 'unset',
  //     ...solarizedlight['pre[class*="language-javascript"]'],
  //     whiteSpace: 'break-spaces !important', 
  //     wordBreak: 'break-word',
  //     tabSize: '10'// Your desired whiteSpace value
  //   },
  // };

  //   const lineProps = (lineNumber) => {
  //     let style = { display: 'block' };
  //     if (lineNumber === 2) {
  //       style.backgroundColor = '#ffdd57';
  //     }
  //     return { style };
  //   };

  // const combinedStyle = { ...solarizedlight, ...style };

  const [hoveredLine, setHoveredLine] = useState(null);

  const lineProps = (lineNumber) => {
    // let style = { display: 'block', transition: 'background-color 0s', borderLeft: '5px solid var(--vertical-line-color)',};
    let style = { display: 'block', transition: 'background-color 0s', };
    if (lineNumber === hoveredLine) {
      // style.backgroundColor = '#ffdd57';
      style.backgroundColor = 'var(--hover-lin-color)';

    }
    return {
      style,
      onMouseOver: () => setHoveredLine(lineNumber),
      onMouseOut: () => setHoveredLine(null)
    };
  };

  const preprocessCodeString = (codeString) => {
    return codeString.split('\n').map(line => line.trimLeft()).join('\n');
  };

  return (
    <>
    <div className="aboutpage" id='about'>
      <div className="title">
        About {">"}
      </div>
      <SyntaxHighlighter language="javascript" style={solarizedlight} showLineNumbers customStyle={customStyle} codeTagProps={{ ref: codeRef }} wrapLines lineProps={lineProps} className="code">
         {window.innerWidth <= 600 ? preprocessCodeString(codeString) : codeString}
      </SyntaxHighlighter>
      </div>
    </>
  );
};

export default About
