import React, { useState, useEffect } from 'react'
import LoadingSandwiches from './LoadingSandwiches'
import ResultsView from './ResultsView'
import _isEmpty from 'lodash/isEmpty'
import { useParams } from 'react-router-dom'
import { ISandwichDetailedTableData } from '../../helpers/types'
import { sleep } from '../../helpers/utilities'
import { AnyShape } from '../../helpers/types'
import { dataHasASandwich } from '../../helpers/data'

const SandwichPage = ({}) => {
  const [data, setData] = useState<AnyShape[]>([])
  const [fetching, setFetching] = useState(false)
  const [fetchingComplete, setFetchingComplete] = useState(false)
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
          setFetchingComplete(true)
          setFetching(false)
          return
        }
        messageCount += 1
        const message = utf8Decoder.decode(chunk)
        let splitMessages = message.split('\n')
        splitMessages.splice(splitMessages.length - 1, 1)
        const parsedMessages = splitMessages.map((msg) => JSON.parse(msg))
        setData((oldArray) => {
          const newArray = oldArray.concat(parsedMessages)
          return [...newArray]
        })
      }
    }
    async function runFetchStream() {
      // @ts-ignore
      let reader = (await fetch(`https://api.sandwiched.wtf/sandwiches/${walletAddress}`)).body.getReader() // shouldn't hardcode this endpoint
      let successfulFetch = false
      // while (!successfulFetch) {
      //   try {
      fetchStream(reader)
      //     successfulFetch = true
      //   } catch (err) {
      //     sleep(3000)
      //   }
      // }
    }
    // Execute the created function directly
    runFetchStream()
  }, [])
  console.log('dataHasASandwich(data)', dataHasASandwich(data))
  return (
    <div>
      {!dataHasASandwich(data) ? (
        <LoadingSandwiches />
      ) : (
        <ResultsView data={data} fetchingComplete={fetchingComplete} />
      )}
    </div>
  )
}

export default SandwichPage
