import Image from 'next/image'
import React from 'react'
import Row from '../components/Row'

import requests from '../api/api'
import TrendRow from '../components/TrendRow'

function browse() {
  return (
    <div>
      <div className='mx-3 md:mx-20 lg:mx-44 my-2 space-y-10 px-2'>
        <Row rowId="1" rowTitle="Top Rated" rowUrl={requests.fetchTopRated} />
        <Row rowId="2" rowTitle="Horror" rowUrl={requests.fetchHorror} />
        <TrendRow rowId="3" rowTitle="Trending Now" rowUrl={requests.fetchTrending} />
        <Row rowId="4" rowTitle="Drama" rowUrl={requests.fetchDrama} />
        <Row rowId="5" rowTitle="Action" rowUrl={requests.fetchAction} />
      </div>
    </div>
  )
}

export default browse