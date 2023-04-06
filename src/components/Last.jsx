import React, { useEffect, useState } from 'react'
import "./Last.css"
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Quote_generator from './Quote_generator';
import { useDispatch } from 'react-redux';
import { newQuotes } from '../Redux/Quotes';

export default function Last() {
    const [tags, settags] = useState([])
    const dispatch = useDispatch()
    const nextquotes = () => {
        axios.get("https://api.quotable.io/random").then((Quotesdata) => {
            dispatch(newQuotes(Quotesdata.data))
        })
    }
    useEffect(() => {
        axios.get("https://api.quotable.io/tags").then((tagsdata) => {
            settags(tagsdata.data)
        })
    }, [])
    const tagname = (names) => {
        axios.get(`https://api.quotable.io/quotes/random?tags=${names}`).then((randomtagQuotes) => {
            dispatch(newQuotes(randomtagQuotes.data[0]))
        })
    }

    return (
        <>
            <div className='col-sm-12' id='Full_pages_spacer'></div>
            <div className='col-sm-12' id='last_alighn'>
                <Dropdown >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {tags.map((tagsdata,) =>

                            <Dropdown.Item href="#/action-1" onClick={() => tagname(tagsdata.name)}>{tagsdata.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <br />
            <div id='last_alighn'>
            <button id='last_btn'
                    onClick={nextquotes}
                >Next Quote</button>
            </div>
        </>
    )
}
