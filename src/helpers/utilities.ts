import { IChainData } from './types'
import supportedChains from './chains'

export function getChainData(chainId: number): IChainData {
  const chainData = supportedChains.filter((chain: any) => chain.chain_id === chainId)[0]

  if (!chainData) {
    throw new Error('ChainId missing or not supported')
  }

  const API_KEY = process.env.REACT_APP_INFURA_ID

  if (chainData.rpc_url.includes('infura.io') && chainData.rpc_url.includes('%API_KEY%') && API_KEY) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY)

    return {
      ...chainData,
      rpc_url: rpcUrl,
    }
  }

  return chainData
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export const conciseEthAddress = (addr: string, significantCharacters: number = 3) => {
  if (!addr) return ''
  return addr.substring(0, significantCharacters + 2) + '...' + addr.substring(addr.length - 3, addr.length)
}
