import React, { useState, useEffect } from 'react'
import LoadingSandwiches from './LoadingSandwiches'
import ResultsView from './ResultsView'
import _isEmpty from 'lodash/isEmpty'
import { useParams } from 'react-router-dom'
import { ISandwichTableData } from '../../helpers/types'

const SandwichPage = ({}) => {
  const [data, setData] = useState<ISandwichTableData[]>([])
  const [fetching, setFetching] = useState(false)
  // @ts-ignore
  let { walletAddress } = useParams()

  // Fetch Sandwiches for wallet
  useEffect(() => {
    // Create an scoped async function in the hook
    const utf8Decoder = new TextDecoder('utf-8')
    async function fetchStream(reader: any) {
      setFetching(true)
      let messageCount = 0
      for (;;) {
        let { value: chunk, done: readerDone } = await reader.read()
        if (readerDone) {
          setFetching(false)
          return
        }
        messageCount += 1
        // if (messageCount <= 2) {
        //   // can ignore the first 2 messages, or maybe later use the amount found reported to verify that all of the messages did send, and if not then retry
        //   continue
        // }
        const message = utf8Decoder.decode(chunk)
        const parsedMessage = JSON.parse(message)
        if (parsedMessage.message.toLowerCase() != 'sandwich found') {
          continue
        }
        const mappedMessage: ISandwichTableData = {
          message: parsedMessage.message,
          date:
            new Date(parsedMessage.target.ts).toLocaleDateString() +
            '. ' +
            new Date(parsedMessage.target.ts).toLocaleTimeString(),
          open:
            Number(parsedMessage.open.amountIn).toFixed(2) +
            ' ' +
            parsedMessage.open.currencyIn +
            ' for ' +
            Number(parsedMessage.open.amountOut).toFixed(2) +
            ' ' +
            parsedMessage.open.currencyOut,
          target:
            Number(parsedMessage.target.amountIn).toFixed(2) +
            ' ' +
            parsedMessage.target.currencyIn +
            ' for ' +
            Number(parsedMessage.target.amountOut).toFixed(2) +
            ' ' +
            parsedMessage.target.currencyOut,
          close:
            Number(parsedMessage.close.amountIn).toFixed(2) +
            ' ' +
            parsedMessage.close.currencyIn +
            ' for ' +
            Number(parsedMessage.close.amountOut).toFixed(2) +
            ' ' +
            parsedMessage.close.currencyOut,
          profit: Number(parsedMessage.profit.amount).toFixed(2) + ' ' + parsedMessage.profit.currency,
        }
        console.log(mappedMessage)
        setData((oldArray) => [...oldArray, mappedMessage])
      }
    }
    async function runFetchStream() {
      // @ts-ignore
      let reader = (await fetch(`https://api.sandwiched.wtf/sandwiches/${walletAddress}`)).body.getReader() // shouldn't hardcode this endpoint
      fetchStream(reader)
    }
    // Execute the created function directly
    runFetchStream()
  }, [])

  // @ts-ignore
  return <div>{_isEmpty(data[0]) ? <LoadingSandwiches /> : <ResultsView data={data} />}</div>
}

export default SandwichPage
