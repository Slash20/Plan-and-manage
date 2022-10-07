import React from 'react'
import "./Features.css"
import Clouds from "../../../img/svg/features-clouds.svg"
import Vector1 from "../../../img/svg/Vector 2.svg"
import Vector2 from "../../../img/svg/Vector 2.4.svg"
import Vector3 from "../../../img/svg/Vector 2.5.svg"
import Vector4 from "../../../img/svg/Vector 2.6.svg"

const Features = () => {
  return (
    <div className='features'>
        <div className='read-about'>
            <div className='content-features'>
                <div className='title'>
                  <div className='about'>ABOUT US</div>
                  <div className='about-2'>Read about our app</div>
                </div>
                <div className='features-content'>
                  <div className='features-content-item'>
                    <div className='img-conteiner'>
                      <img className='img1' src={Vector1} alt='vector'/>
                    </div>
                    <div className='title-text'>Overview</div>
                    <div className='text'>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</div>
                  </div>
                  <hr className='line'/>
                  <div className='features-content-item'>
                    <div className='img-conteiner'>
                      <img className='img2' src={Vector2} alt='vector'/>
                    </div>
                    <div className='title-text'>Files</div>
                    <div className='text'>No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.</div>
                  </div>
                  <hr className='line'/>
                  <div className='features-content-item'>
                    <div className='img-conteiner'>
                      <img className='img3' src={Vector3} alt='vector'/>
                    </div>
                    <div className='title-text'>Meeting chats</div>
                    <div className='text'>Vim ne tacimates neglegentur. Erat diceret omittam at est.</div>
                  </div>
                  <hr className='line'/>
                  <div className='features-content-item'>
                    <div className='img-conteiner'>
                      <img className='img4' src={Vector4} alt='vector'/>
                    </div>
                    <div className='title-text'>Save events</div>
                    <div className='text'>Nisl idque mel ea, nominati voluptatum.</div>
                  </div>
                </div>
                <div className='buttons'>
                  <button className='read'>Read more</button>
                  <hr className='mLine'/>
                  <div className='or'>OR</div>
                  <hr className='mLine'/>
                  <button className='get-started'>Get Started</button>
                </div>
            </div>
        </div>
        <img className='clouds' src={Clouds} alt="clouds"/>
    </div>
  )
}

export default Features