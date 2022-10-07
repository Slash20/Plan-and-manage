import React from 'react'
import './Stats.css'
import Image1 from "../../../img/svg/Group.svg"
import Image2 from "../../../img/svg/Group 4.svg"

const Stats = () => {
  return (
    <div className='stats'>
        <div className='stats-left'>
            <div className='stats-left-content'>
                <img src={Image1} alt="img"/>
                <div>
                    <div className='percents'>89%</div>
                    <div className='custumers'>Customers who have increased their productivity</div>
                </div>
            </div>
        </div>
        <div className='stats-right'>
            <div className='stats-right-content'>
                <img src={Image2} alt="img"/>
                <div>
                    <div className='count'>3123</div>
                    <div className='users'>Users who have used our application</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats