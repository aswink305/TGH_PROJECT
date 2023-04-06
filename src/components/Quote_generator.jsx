import React, { useEffect } from 'react'
import "./Quote_generator.css"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newQuotes } from '../Redux/Quotes';
export default function Quote_generator() {
    const { Quotes } = useSelector(state => state.Quote)
    const dispatch = useDispatch()
    const [bookmarkedItems, setbookmarkedItems] = useState(JSON.parse(localStorage.getItem("bookmarked items")) || [])
    const bookmarkbtn = (datas) => {
        setbookmarkedItems([...bookmarkedItems, datas])
    }
    localStorage.setItem("bookmarked items", JSON.stringify(bookmarkedItems))
    return (
        <>
            <div id='Quote_grtr_media'>
                <div className='row' >
                    <div className='col-sm-3'></div>
                    <div className='col' id='Quote_grtr_col-height'>
                        <div id='Quote_grtr_spacer'></div>
                        <p id='Quote_grtr_font_size'>{Quotes?.content}</p>
                        <div className='col-sm-12' id='Quote_grtr_spacer2'></div>
                        <div className='row' id='Quote_grtr_alighn'>
                            <div className='col' id='Quote_grtr_Author_alighn'>
                                <p >-{Quotes?.author}-</p>
                            </div>
                            <div className='col-sm-5' id='Quote_grtr_bookmark_alighn'>
                                <button id='Quote_grtr_btn' onClick={() => bookmarkbtn(Quotes)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3'></div>
                </div>
            </div>
        </>)
}
