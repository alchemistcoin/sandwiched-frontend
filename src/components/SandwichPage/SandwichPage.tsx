import React, { useState, useEffect } from 'react'
import LoadingSandwiches from './LoadingSandwiches'
import ResultsView from './ResultsView'
import _isEmpty from 'lodash/isEmpty'
import { useParams } from 'react-router-dom'
import { ISandwichDetailedTableData } from '../../helpers/types'
import { sleep } from '../../helpers/utilities'
import { AnyShape } from '../../helpers/types'
import ndjsonStream from 'can-ndjson-stream'

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
        let { value: msg, done: readerDone } = await reader.read()
        if (readerDone) {
          setFetchingComplete(true)
          setFetching(false)
          return
        }
        messageCount += 1
        setData((oldArray) => {
          oldArray.push(msg)
          return oldArray
        })
      }
    }
    async function runFetchStream() {
      // @ts-ignore
      const response = await fetch(`https://api.sandwiched.wtf/sandwiches/${walletAddress}`) // shouldn't hardcode this endpoint
      const reader = ndjsonStream(response.body).getReader()
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

  return (
    <div>
      {_isEmpty(data[0]) ? <LoadingSandwiches /> : <ResultsView data={data} fetchingComplete={fetchingComplete} />}
    </div>
  )
}

export default SandwichPage
