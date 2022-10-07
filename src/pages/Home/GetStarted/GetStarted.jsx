import React from 'react'
import './GetStarted.css'
import Clouds from '../../../img/svg/GetStartedClouds.svg'

const GetStarted = () => {
  return (
    <div className='getStarted'>
      <div className='getStarted-text'>
        <div className='getStarted-plan'>PLAN YOUR LIFE</div>
        <div className='getStarted-get'>Get <b>started</b> now</div>
        <div className='getStarted-brute'>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</div>
      </div>
      <div className='getStarted-btns'>
        <button className='getStarted-btn1'>View pricing</button>
        <button className='getStarted-btn2'>Read documentation</button>
      </div>
      <img className='getStartedClouds' src={Clouds} alt='clouds'/>
    </div>
  )
}

export default GetStarted