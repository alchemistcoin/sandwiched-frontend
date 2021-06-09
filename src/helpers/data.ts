import { ISandwichDetailedTableData } from './types'

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
      Number(parsedMessage.open.amountIn).toFixed() +
      ' ' +
      parsedMessage.open.currencyIn +
      ' for ' +
      Number(parsedMessage.open.amountOut).toFixed() +
      ' ' +
      parsedMessage.open.currencyOut,
    targetTx: parsedMessage.target.tx,
    target:
      Number(parsedMessage.target.amountIn).toFixed() +
      ' ' +
      parsedMessage.target.currencyIn +
      ' for ' +
      Number(parsedMessage.target.amountOut).toFixed() +
      ' ' +
      parsedMessage.target.currencyOut,
    closeTx: parsedMessage.close.tx,
    close:
      Number(parsedMessage.close.amountIn).toFixed() +
      ' ' +
      parsedMessage.close.currencyIn +
      ' for ' +
      Number(parsedMessage.close.amountOut).toFixed() +
      ' ' +
      parsedMessage.close.currencyOut,
    profit: Number(parsedMessage.profit.amount).toFixed(2) + ' ' + parsedMessage.profit.currency,
    attributes: { mev: parsedMessage.mev },
  }

  return mappedMessage
}
