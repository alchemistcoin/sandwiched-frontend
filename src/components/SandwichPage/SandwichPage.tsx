import React, { useState, useEffect } from 'react'
import LoadingSandwiches from './LoadingSandwiches'
import ResultsView from './ResultsView'
import _isEmpty from 'lodash/isEmpty'
import { useParams } from 'react-router-dom'
import { ISandwichDetailedTableData } from '../../helpers/types'
import { sleep } from '../../helpers/utilities'
import { AnyShape } from '../../helpers/types'
import ndjsonStream from 'can-ndjson-stream'
import { dataHasASandwich } from '../../helpers/data'

interface SandwichPageProps {
  onConnect: Function
  walletAddress: string
  connected: boolean
  resetApp: Function
}

const SandwichPage = ({ onConnect, connected, walletAddress, resetApp }: SandwichPageProps) => {
  const [data, setData] = useState<AnyShape[]>([])
  const [fetching, setFetching] = useState(false)
  const [fetchingComplete, setFetchingComplete] = useState(false)
  const [fetchErrorMessage, setFetchErrorMessage] = useState('')
  // @ts-ignore
  let { walletAddress: walletAddressFromUrl } = useParams()

  // Fetch Sandwiches for wallet
  useEffect(() => {
    let errorMessage = 'Something went wrong'
    // Create an scoped async function in the hook
    const utf8Decoder = new TextDecoder('utf-8')
    async function fetchStream(reader: any) {
      setFetching(true)
      let messageCount = 0
      for (;;) {
        try {
          let { value: msg, done: readerDone } = await reader.read()
          const firstLineOfMsg = String(msg).split('/n')[0] // error comes as a string, messages come as json
          /** Catch any errors in message **/
          if (firstLineOfMsg.toLowerCase().substring(0, 5) === 'error') {
            if (firstLineOfMsg.search('bad wallet') !== -1) {
              errorMessage = 'Bad wallet address'
            }
            setFetchErrorMessage(errorMessage)
            setFetching(false)
            return
          }
          if (readerDone) {
            setFetchingComplete(true)
            setFetching(false)
            return
          }
          messageCount += 1
          setData((oldArray) => {
            return [...oldArray, msg]
          })
        } catch (err) {
          console.error('fetchStream catch (err)', err)
          setFetchErrorMessage(errorMessage)
          setFetching(false)
          return // without this return infinite errors can occur
        }
      }
    }
    async function runFetchStream() {
      // @ts-ignore
      try {
        //const response = await fetch(`http://localhost:3000/sandwiches/${walletAddress}`) // shouldn't hardcode this endpoint
        const response = await fetch(`https://api.sandwiched.wtf/sandwiches/${walletAddressFromUrl}`) // shouldn't hardcode this endpoint
        console.log('response', response)
        const reader = ndjsonStream(response.body).getReader()
        console.log('reader', reader)
        await fetchStream(reader)
      } catch (err) {
        console.error('runFetchStream() catch(err)', err) // ERR_SSL_PROTOCOL_ERROR
        setFetchErrorMessage(errorMessage)
        setFetching(false)
        return
      }
    }
    // Execute the created function directly
    runFetchStream()
  }, [])
  return (
    <div>
      {!dataHasASandwich(data) && !fetchingComplete ? (
        <LoadingSandwiches error={fetchErrorMessage} />
      ) : (
        <ResultsView data={data} fetchingComplete={fetchingComplete} />
      )}
    </div>
  )
}

export default SandwichPage
