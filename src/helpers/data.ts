import { ISandwichDetailedTableData } from './types'

export const filterSandwichesToDetailsTable = (parsedMessage: any) => {
  if (parsedMessage.message.toLowerCase() == 'sandwich found') {
    return true
  }
  return false
}

export function messageIsSandwich(o: any) {
  return 'profit' in o
}

export function dataHasASandwich(data: any[]): boolean {
  for (let i = 0; i < data.length; i++) {
    if (messageIsSandwich(data[i])) {
      return true
    }
  }
  console.log(data, 'false')
  return false
}
export const mapSandwichesToDetailsTable = (parsedMessage: any): ISandwichDetailedTableData => {
  const date = new Date(parsedMessage.target.ts)
  const mappedMessage: ISandwichDetailedTableData = {
    message: parsedMessage.message,
    date: date.getTime(),
    dateReadable:
      date.toISOString().split('T')[0] + ' ' + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    openTx: parsedMessage.open.tx,
    open:
      Number(parsedMessage.open.amountIn).toFixed(2) +
      ' ' +
      parsedMessage.open.currencyIn +
      ' for ' +
      Number(parsedMessage.open.amountOut).toFixed(2) +
      ' ' +
      parsedMessage.open.currencyOut,
    targetTx: parsedMessage.target.tx,
    target:
      Number(parsedMessage.target.amountIn).toFixed(2) +
      ' ' +
      parsedMessage.target.currencyIn +
      ' for ' +
      Number(parsedMessage.target.amountOut).toFixed(2) +
      ' ' +
      parsedMessage.target.currencyOut,
    closeTx: parsedMessage.close.tx,
    close:
      Number(parsedMessage.close.amountIn).toFixed(2) +
      ' ' +
      parsedMessage.close.currencyIn +
      ' for ' +
      Number(parsedMessage.close.amountOut).toFixed(2) +
      ' ' +
      parsedMessage.close.currencyOut,
    profit: Number(parsedMessage.profit.amount).toFixed(2) + ' ' + parsedMessage.profit.currency,
    attributes: { mev: parsedMessage.mev },
  }

  return mappedMessage
}
