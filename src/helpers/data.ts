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

export const mapSandwichesToDetailsTable = (parsedMessage: any): ISandwichDetailedTableData => {
  const date = new Date(parsedMessage.target.ts)
  // TODO: should just move this data reformatting to the table component instead
  const mappedMessage: ISandwichDetailedTableData = {
    message: parsedMessage.message,
    date: date.toISOString().split('T')[0] + ' ' + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    openTx: parsedMessage.open.tx,
    open:
      new Decimal(parsedMessage.open.amountIn).toPrecision(5) +
      ' ' +
      parsedMessage.open.currencyIn +
      ' for ' +
      new Decimal(parsedMessage.open.amountOut).toPrecision(5) +
      ' ' +
      parsedMessage.open.currencyOut,
    targetTx: parsedMessage.target.tx,
    target:
      new Decimal(parsedMessage.target.amountIn).toPrecision(5) +
      ' ' +
      parsedMessage.target.currencyIn +
      ' for ' +
      new Decimal(parsedMessage.target.amountOut).toPrecision(5) +
      ' ' +
      parsedMessage.target.currencyOut,
    closeTx: parsedMessage.close.tx,
    close:
      new Decimal(parsedMessage.close.amountIn).toPrecision(5) +
      ' ' +
      parsedMessage.close.currencyIn +
      ' for ' +
      new Decimal(parsedMessage.close.amountOut).toPrecision(5) +
      ' ' +
      parsedMessage.close.currencyOut,
    profit: new Decimal(parsedMessage.profit.amount).toPrecision(5) + ' ' + parsedMessage.profit.currency,
    attributes: { mev: parsedMessage.mev },
  }

  return mappedMessage
}
