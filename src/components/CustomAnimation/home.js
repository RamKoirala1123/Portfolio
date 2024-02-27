import React from 'react'
import TextSpan from './TextSpan';
import './home.css'

const Home = () => {
    const sentence = "Hi, ~I am Ram Koirala.".split("");
    console.log(sentence)
  return (
    <>
    <div id='homepage' className='homepage'>
      {sentence.map((letter, index) => {
        return(
            letter === "~"?<br/>:
            <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
            </TextSpan>
        )
      })}
    </div>
    </>
  )
}

export default Home
