import React, { useEffect } from 'react'
import Top from '../Top'
import Quote_generator from '../Quote_generator'
import Last from '../Last'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { newQuotes } from '../../Redux/Quotes';

export default function Full_pages() {
  const { Quotes } = useSelector(state => state.Quote)
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((Quotesdata) => {
      dispatch(newQuotes(Quotesdata.data))
    })
  }, [])
  return (
    <>
      <Top/>
      <div className='col-sm-12' id='Full_pages_spacer'></div>
      <Quote_generator />
      <div className='col-sm-12' id='Full_pages_spacer'></div>

      <Last/>
    </>
  )
}

