import React from 'react'
import './CustomerHelp.css'
import Line from '../../../rezability-components/Line/Line';


function CustomerHelp() {
  return (
    <div className='customerHelp'>
        <div className='customerHelp-content'>
            <div className='customerHelp-title'>
                <div className='title-customerHelp'>Customer help</div>
                <div className='crequentlyAsked'>Frequently asked questions</div>
            </div>
            <div className='customerHelp-content'>
                <details><summary>Reque insolens in vel?</summary></details>
                <Line/>
                <details><summary>Vis rebum error graecis ea, id sit postea accusamus?</summary></details>
                <Line/>
                <details>
                    <summary>Lorem repudiandae ne nec?</summary>
                    <div className='card-body'>
                        <div className='card-body-text'>
                            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </div>
                        <button className='customerHelp-btn'>Go to documentation</button>
                    </div>
                </details>
                <Line/>
                <details><summary>Ad dicit numquam vel. Et eos iudico feugait percipitur?</summary></details>
                <Line/>
                <details><summary>Sea no dico percipitur. Fierent constituam definitiones id eum?</summary></details>
                <Line/>
            </div>
        </div>
    </div>
  )
}

export default CustomerHelp