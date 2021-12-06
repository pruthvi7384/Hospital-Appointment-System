import React from 'react'
import Features from './HomeComponents/Features'
import Highights from './HomeComponents/Highights'
import HomeBanner from './HomeComponents/HomeBanner'
import SubBanner from './HomeComponents/SubBanner'
import Feedback from './HomeComponents/Feedback'
import Contact from './Contact'

function Home() {
    return (
        <>
            <HomeBanner/>
            <Features/>
            <SubBanner/>
            <Highights/>
            <Feedback/>
            <Contact/>
        </>
    )
}

export default Home
