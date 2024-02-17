import { React, useState } from 'react'
import Card from '../Card/card'
import './work.css'
import Singleproject from '../Projectttt/singleproject'

const Work = () => {
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Singleproject isActive={isActive} toggleActive={toggleActive} />
      <div className="workpage">
        <div className="title">
          Projects {">"}
        </div>
        <div className='work'>
          <div className="custom-card" onClick={toggleActive}>
            <Card
              title="Algo Visualizer"
              content=""
              view="web "
              backgroundImage="./assets/image/project/algovisualizer.jpg"
            />
          </div>

          <div className="custom-card" onClick={toggleActive}>
            <Card
              title="Horoscope"
              content=""
              view="mobile"
              backgroundImage="./assets/image/project/horoscope.jpg"
            />
          </div>

          <div className="custom-card" onClick={toggleActive}>
            <Card
              title="Financial Calculator"
              content=""
              view="mobile"
              backgroundImage="./assets/image/project/calculator.jpg"
            ></Card>
          </div>

          <div className="custom-card" onClick={toggleActive}>
            <Card
              title="Survey App"
              content=""
              view="mobile"
              backgroundImage="./assets/image/project/survey.jpg"
            ></Card>
          </div>
          <div className="custom-card" onClick={toggleActive} >
            <Card
              title="SLR Parser"
              content=""
              view="web "
              backgroundImage="./assets/image/project/slrparser.jpg"
            />
          </div>

          {/* <div className="custom-card">
          <Card
            title="Horoscope"
            content=""
            view="mobile"
            backgroundImage="./assets/image/project/imgone.jpg"
          />
        </div> */}
        </div>
      </div>

    </>
  )
}

export default Work
