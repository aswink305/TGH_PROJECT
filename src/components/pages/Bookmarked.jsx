import React from 'react'
import Top from '../Top'
import Quote_generator from '../Quote_generator'
import Bookmarked_quotes from '../Bookmarked_quotes'

export default function Bookmarked() {

    var bookmarked = JSON.parse(localStorage.getItem("bookmarked items"))

    console.log("bookmarkedDatas=====>", bookmarked)

    return (
        <>
            <Top />
            <Bookmarked_quotes datas={bookmarked} />
        </>
    )
}
