// @ts-ignore
import ENS, { getEnsAddress } from '@ensdomains/ensjs'
import { IEnsData } from './types'

// ENS Singleton
let ensApi: any = null
export const getEns = (provider: any) => {
  if (ensApi === null) {
    ensApi = new ENS({ provider, ensAddress: getEnsAddress('1') })
  }
  return ensApi
}

export async function reverseEnsLookup(provider: any, address: string) {
  let name
  try {
    const ens = getEns(provider)
    name = await ens.getName(address)
    // Check to be sure the reverse record is correct.
    if (address != (await ens.name(name.name).getAddress())) {
      name = null
    }
    return name
  } catch (e) {
    console.error('reverseEnsLookup error' + e)
    name = { error: e }
    return name
  }
}

export async function ensLookup(provider: any, name: string) {
  let address
  try {
    const ens = getEns(provider)
    address = await ens.name(name).getAddress()
    return address
  } catch (e) {
    console.error('ensLookup error' + e)
    address = { error: e }
    return address
  }
}

export const getEnsData = async (provider: any, address: string = '', name: string = ''): Promise<IEnsData> => {
  let data = { address, name }
  if (!name && address && address !== '') {
    // Reverse lookup
    const reverseEnsLookupResult = await reverseEnsLookup(provider, address)
    if (reverseEnsLookupResult?.name) {
      data.name = reverseEnsLookupResult.name
    }
  } else if (!address && name && name !== '') {
    // Forward lookup
    const ensLookupResult = await ensLookup(provider, name)
    data.address = ensLookupResult
  }
  return data
}
