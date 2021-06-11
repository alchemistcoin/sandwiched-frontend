import { ISandwichDetailedTableData } from './types'
import Decimal from 'decimal.js-light'
Decimal.set({
  rounding: Decimal.ROUND_HALF_UP,
})

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
  return false
}
const profit2IfExists = (message: any) => {
  if ('profit2' in message) {
    return `\n ${new Decimal(message.profit2.amount).toSignificantDigits(5)} ${message.profit2.currency}`
  }
  return undefined
}

export const mapSandwichesToDetailsTable = (parsedMessage: any): ISandwichDetailedTableData => {
  const date = new Date(parsedMessage.target.ts)
  // TODO: should just move this data reformatting to the table component instead
  const mappedMessage: ISandwichDetailedTableData = {
    message: parsedMessage.message,
    date: date.getTime(),
    dateReadable:
      date.toISOString().split('T')[0] + ' ' + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    openTx: parsedMessage.open.tx,
    open:
      new Decimal(parsedMessage.open.amountIn).toSignificantDigits(5) +
      ' ' +
      parsedMessage.open.currencyIn +
      ' for ' +
      new Decimal(parsedMessage.open.amountOut).toSignificantDigits(5) +
      ' ' +
      parsedMessage.open.currencyOut,
    targetTx: parsedMessage.target.tx,
    target:
      new Decimal(parsedMessage.target.amountIn).toSignificantDigits(5) +
      ' ' +
      parsedMessage.target.currencyIn +
      ' for ' +
      new Decimal(parsedMessage.target.amountOut).toSignificantDigits(5) +
      ' ' +
      parsedMessage.target.currencyOut,
    closeTx: parsedMessage.close.tx,
    close:
      new Decimal(parsedMessage.close.amountIn).toSignificantDigits(5) +
      ' ' +
      parsedMessage.close.currencyIn +
      ' for ' +
      new Decimal(parsedMessage.close.amountOut).toSignificantDigits(5) +
      ' ' +
      parsedMessage.close.currencyOut,
    profit: new Decimal(parsedMessage.profit.amount).toSignificantDigits(5) + ' ' + parsedMessage.profit.currency,
    profit2: profit2IfExists(parsedMessage),
    attributes: { mev: parsedMessage.mev },
  }

  return mappedMessage
}
