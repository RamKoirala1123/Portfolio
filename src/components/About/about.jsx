// import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const codeString = `class RamKoirala {

          String name = 'Ram Koirala';
          int dayOfBirthTimestamp = 996764400;
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
    fontSize: '1.4rem',
    borderRadius: '5px',
    backgroundColor: 'var(--background-color)',
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
    let style = { display: 'block', transition: 'background-color 0s', borderLeft: '5px solid var(--vertical-line-color)',};
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
  return (
    <>
    <div className="aboutpage">
      <div className="title">
        About {">"}
      </div>
      <SyntaxHighlighter language="javascript" style={solarizedlight} showLineNumbers customStyle={customStyle} codeTagProps={{ ref: codeRef }} wrapLines lineProps={lineProps} >
        {codeString}
      </SyntaxHighlighter>
      </div>
    </>
  );
};

export default About
