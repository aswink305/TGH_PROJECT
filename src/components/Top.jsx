import React, { useState } from 'react'
import "./Top.css"
import { useNavigate } from 'react-router-dom'

export default function Top() {
    const navigate = useNavigate()
    const bookmark = () => {
        navigate("/bookmarksQuotes")
    }

    const Home = () => {
        navigate("/")

    }
    return (
        <>
            <div className='col-sm-12' id='Top_Headdings'>
                <div className='container' id='Top_Headdings_1'>
                    <button id='top_btn' onClick={Home}>
                        <p>Home</p>
                    </button>
                </div>
                <div className='container' id='Top_Headdings_2'>
                    <button id='top_btn' onClick={bookmark}>
                        <p>Bookmarks</p>

                    </button>
                </div>
            </div>


        </>
    )
}
