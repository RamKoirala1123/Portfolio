import React from 'react'
import './singleproject.css'
import CustomButton from '../Button/CustomButton';
import 'material-symbols';

const Singleproject = () => {
    return (

        <div className="app-container">
            <div className="left-section">
                <div className="wrap">
                    <div className="content-wrap">
                        <div className="image-container">
                            <img src="./assets/image/project.jpg" alt="Your" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="right-section">
                <button className='back-btn'>
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
                <div className='about-project'>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti odit molestiae adipisci commodi! Numquam aperiam veniam provident temporibus assumenda id vel fugit, impedit similique iusto corrupti quasi veritatis voluptates nesciunt saepe? Consectetur iusto aut, vero a quam accusantium iure officia quibusdam ut, qui commodi impedit illo rerum recusandae quaerat et est totam enim cupiditate hic expedita tempore sunt incidunt! At impedit, reprehenderit et esse eum quia aliquam hic. Eaque asperiores culpa cum velit impedit cupiditate ipsam harum. Obcaecati, ducimus accusamus? Sequi nam inventore minima at ipsum atque nobis consequatur voluptatum saepe ad ex voluptatibus, fugiat error ab amet veniam ipsam.                    </p>
                    <CustomButton name="Go to Project" />
                </div>
            </div>
        </div>
    );
}

export default Singleproject
