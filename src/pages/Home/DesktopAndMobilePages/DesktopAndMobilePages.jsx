import React from 'react'
import './DesktopAndMobilePages.css'
import MiniHeadText from '../../../rezability-components/Text/MiniHeadText/MiniHeadText.jsx'
import HeadText from '../../../rezability-components/Text/HeadText/HeadText'
import Bold from '../../../rezability-components/Text/Bold/Bold.jsx'
import ContentText from '../../../rezability-components/Text/ContentText/ContentText.jsx'
import DoubleButtons from '../../../rezability-components/Buttons/DoubleButtons/DoubleButtons.jsx'
import Icon from '../../../img/svg/Polygon.svg'
import Rectangle from '../../../img/svg/Rectangle 2.svg'

function DesktopAndMobilePages() {
  return (
    <div className='DesktopAndMobilePages'>
        <div className='TextAndButtons'>
            <MiniHeadText text='DESKTOP AND MOBILE APP' />
            <HeadText medium={true} text={<><Bold text='Plan'/> and <Bold text='manage'/></>}/>
            <ContentText text={<>
                Brute laoreet efficiendi id his, ea illum nonumes luptatum
                <br />
                pro. Usu atqui laudem an, insolens gubergren similique
                <br />
                est cu. Et vel modus congue vituperata. Solum patrioque
                <br />
                no sea. Mea ex malis mollis oporteat. Eum an expetenda
                <br />
                consequat.
            </>}/>
            <DoubleButtons firstButton={{text: <>View video <img src={Icon} alt="Icon" /></>, type: 'primal'}} secondButton={{text: 'See features', type: 'clear'}}/>
        </div>
        <div className='ImageDesktopAndMobile'>
              <img src={Rectangle} alt="Rectangle"/>
        </div>
    </div>
  )
}

export default DesktopAndMobilePages