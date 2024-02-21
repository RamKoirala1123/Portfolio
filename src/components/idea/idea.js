import React from 'react'
import "./idea.css"
const Idea = () => {
    return (
        <div>
            <figure>
                <div className="wrap">
                    <div className="content-wrap">
                        <div className="image-container">
                            <img src="./assets/image/projecttwo.jpg" alt="Your" />
                        </div>
                    </div>
                </div>
                {/* <img src="https://i.imgur.com/aGh7Wsr.png" alt="Necromancer"/> */}
                <figcaption>Financial Calculator</figcaption>
            </figure>
            <figure>
                <img src="https://assets.codepen.io/1480814/druide.png" alt="Druid" />
                <figcaption>The Druid</figcaption>
            </figure>

        </div>
    )
}

export default Idea
