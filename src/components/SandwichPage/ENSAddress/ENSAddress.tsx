import React, { useEffect, useState } from 'react'
import { ensLookup, reverseEnsLookup } from '../../../helpers/ens'
import { conciseEthAddress } from '../../../helpers/utilities'
import Web3 from 'web3'
import styled from 'styled-components'

type props = {
  address: string | null
  ensName?: string | null
  style?: any
}

const StyledEnsAddress = styled.span`
  font-size: 12px;
  display: flex;
  flex-direction: row;
  a {
    text-decoration: none;
  }
`
/**
 * will display both address and ens name if available
 */
const ENSAddress = ({ address = '', ensName = '', style, ...props }: props) => {
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

  const ensNameToUse = ensName || fetchedEnsName
  return (
    <StyledEnsAddress style={style}>
      <span>{conciseEthAddress(address || fetchedEnsAddress || '', 3)}</span>
      {ensNameToUse && (
        <a href={`https://app.ens.domains/name/${ensNameToUse}`} target="_blank" rel="noopener noreferrer">
          <span style={{ color: '#2F48A7', fontWeight: 'bold', marginLeft: 1 }}> ({ensNameToUse})</span>
        </a>
      )}
    </StyledEnsAddress>
  )
}

export default ENSAddress
