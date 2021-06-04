export interface IChainData {
  name: string
  short_name: string
  chain: string
  network: string
  chain_id: number
  network_id: number
  rpc_url: string
  native_currency: IAssetData
}

export interface IAssetData {
  symbol: string
  name: string
  decimals: string
  contractAddress: string
  balance?: string
}

export interface ITransaction {
  amountIn: string
  amountOut: string
  currencyIn: string
  currencyOut: string
  ts: string
  tx: string
}
export interface ISandwichTableData {
  message: string
  open?: string
  close?: string
  target?: string
  date?: string
  profit?: string
}
