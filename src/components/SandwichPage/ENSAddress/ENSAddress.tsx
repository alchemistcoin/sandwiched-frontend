import React, { useEffect, useState } from 'react'
import { ensLookup, reverseEnsLookup } from '../../../helpers/ens'
import { conciseEthAddress } from '../../../helpers/utilities'
import Web3 from 'web3'

type props = {
  address: string | null
  ensName?: string | null
}
/**
 * will display both address and ens name if available
 */
const ENSAddress = ({ address = '', ensName = '', ...props }: props) => {
  const [fetchedEnsName, setFetchedEnsName] = useState<string | null>(null)
  const [fetchedEnsAddress, setFetchedEnsAddress] = useState<string | null>(null)
  var web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}` || Web3.givenProvider)
  const provider = web3.currentProvider
  // const provider = new
  if (address && address.split('.').length > 1) {
    // indicates an ENS name in address prop, so adjust variables
    ensName = address
    address = ''
  }

  useEffect(() => {
    if (!ensName && address && address !== '') {
      // Reverse lookup
      reverseEnsLookup(provider, address).then((result) => {
        if (result?.name) {
          setFetchedEnsName(result.name)
        }
      })
    } else if (!address && ensName && ensName !== '') {
      // Forward lookup
      ensLookup(provider, ensName).then((result) => {
        setFetchedEnsAddress(result)
      })
    }
  }, [])

  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <span>{conciseEthAddress(address || fetchedEnsAddress || '', 3)}</span>
      <span>{ensName || fetchedEnsName}</span>
    </span>
  )
}

export default ENSAddress
