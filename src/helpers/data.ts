import { ISandwichDetailedTableData } from './types'

export const filterSandwichesToDetailsTable = (parsedMessage: any) => {
  if (parsedMessage.message.toLowerCase() == 'sandwich found') {
    return true
  }
  return false
}

export const mapSandwichesToDetailsTable = (parsedMessage: any): ISandwichDetailedTableData => {
  const mappedMessage: ISandwichDetailedTableData = {
    message: parsedMessage.message,
    date:
      new Date(parsedMessage.target.ts).toLocaleDateString() +
      '. ' +
      new Date(parsedMessage.target.ts).toLocaleTimeString(),
    open:
      Number(parsedMessage.open.amountIn).toFixed(2) +
      ' ' +
      parsedMessage.open.currencyIn +
      ' for ' +
      Number(parsedMessage.open.amountOut).toFixed(2) +
      ' ' +
      parsedMessage.open.currencyOut,
    target:
      Number(parsedMessage.target.amountIn).toFixed(2) +
      ' ' +
      parsedMessage.target.currencyIn +
      ' for ' +
      Number(parsedMessage.target.amountOut).toFixed(2) +
      ' ' +
      parsedMessage.target.currencyOut,
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
