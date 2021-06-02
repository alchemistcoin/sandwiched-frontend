import React, { useState, useEffect } from 'react'
import LoadingSandwiches from './LoadingSandwiches'
import ResultsView from './ResultsView'
import _isEmpty from 'lodash/isEmpty'
import { useParams } from 'react-router-dom'

const SandwichPage = ({}) => {
  const [data, setData] = useState([{}])
  // @ts-ignore
  let { walletAddress } = useParams()

  // Fetch Sandwiches for wallet
  useEffect(() => {
    // Create an scoped async function in the hook
    const utf8Decoder = new TextDecoder('utf-8')
    async function fetchStream(reader: any) {
      for (;;) {
        let { value: chunk, done: readerDone } = await reader.read()
        if (readerDone) {
          return
        }
        const message = utf8Decoder.decode(chunk)
        const parsedMessage = JSON.parse(message)
        // console.log(parsedMessage)
        setData((oldArray) => [...oldArray, parsedMessage])
      }
    }
    async function runFetchStream() {
      // @ts-ignore
      let reader = (await fetch(`https://api.sandwiched.wtf/sandwiches/${walletAddress}`)).body.getReader() // shouldn't hardcode this endpoint
      fetchStream(reader)
    }
    // Execute the created function directly
    runFetchStream()

    // setTimeout(() => {
    //   setData((oldArray) => [...oldArray, { something: 'ok' }])
    // }, 3000)
  }, [])

  console.log(data)

  return <div>{!_isEmpty(data[1]) ? <ResultsView /> : <LoadingSandwiches />}</div>
}

export default SandwichPage
