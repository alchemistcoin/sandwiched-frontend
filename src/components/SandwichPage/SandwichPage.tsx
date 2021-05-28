import React, { useState, useEffect } from 'react'
import LoadingSandwiches from './LoadingSandwiches'
import ResultsView from './ResultsView'
import _isEmpty from 'lodash/isEmpty'

const SandwichPage = () => {
  const [data, setData] = useState([{}])

  // Fetch Sandwiches for wallet
  useEffect(() => {
    setTimeout(() => {
      setData((oldArray) => [...oldArray, { something: 'ok' }])
    }, 3000)
  })

  console.log(data)

  return <>{!_isEmpty(data[1]) ? <ResultsView /> : <LoadingSandwiches />}</>
}

export default SandwichPage
