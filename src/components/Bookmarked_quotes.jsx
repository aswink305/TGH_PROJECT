import React from 'react'
import "./Last.css"
export default function Bookmarked_quotes({ datas }) {
    return (
        <>
            {datas.map(maping=>
                <>
                  <div id='Quote_grtr_media'>
                        <div className='row' >
                            <div className='col-sm-3'></div>
                            <div className='col' id='Quote_grtr_col-height'>
                                <div id='Quote_grtr_spacer'></div>
                                <p id='Quote_grtr_font_size'>{maping.content}</p>
                                <div className='col-sm-12' id='Quote_grtr_spacer2'></div>
                                <div className='row' id='Quote_grtr_alighn'>
                                    <div className='col' id='Quote_grtr_Author_alighns'>
                                        <p id='Quote_grtr_font_size2'>-{maping.author}-</p>
                                    </div>
                                </div>  
                            </div>
                            <div className='col-sm-3'></div>
                        </div>
                    </div>
                    <br />
                </>
            )}
        </>
    )
}
