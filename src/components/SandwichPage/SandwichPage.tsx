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
      let messageCount = 0
      for (;;) {
        let { value: chunk, done: readerDone } = await reader.read()
        if (readerDone) {
          return
        }
        messageCount += 1
        if (messageCount <= 2) {
          // can ignore the first 2 messages, or maybe later use the amount found reported to verify that all of the messages did send, and if not then retry
          continue
        }
        const message = utf8Decoder.decode(chunk)
        const parsedMessage = JSON.parse(message)
        // @ts-ignore
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

  console.log('data')
  console.log(data)

  return <div>{!_isEmpty(data[1]) ? <ResultsView /> : <LoadingSandwiches />}</div>
}

export default SandwichPage
