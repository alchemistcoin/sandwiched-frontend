// @ts-ignore
import ENS, { getEnsAddress } from '@ensdomains/ensjs'

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
    // let ens = new ENS({ provider, ensAddress: getEnsAddress('1') })
    const ens = getEns(provider)
    name = await ens.getName(address)
    console.log(address, '--->', name)
    // Check to be sure the reverse record is correct.
    if (address != (await ens.name(name.name).getAddress())) {
      name = null
    }
    return name
  } catch (e) {
    console.log(e)
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
    console.log(name, '-->', address)
    return address
  } catch (e) {
    console.log(e)
    console.error('ensLookup error' + e)
    address = { error: e }
    return address
  }
}
