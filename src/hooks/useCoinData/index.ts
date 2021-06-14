import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

// https://api.coingecko.com/api/v3/simple/price?ids=alchemist%2Cchainlink&vs_currencies=eth

const useCoinData = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [marketData, setMarketData] = useState<any>(null)
  const [tradeData, setTradeData] = useState([])
  const [totalEthProfit, setTotalEthProfit] = useState<number | null>(null)
  const [error, setError] = useState<boolean>(false)

  const calcProfit = (trade: any, marketData: any): number => {
    let pairRate: any = null
    let totalEthProfit: number = 0
    try {
      pairRate = marketData?.data[trade.profit.cgId] || marketData?.data[trade.profit2.cgId]
    } catch (e) {
      console.log('error - pairRate not found', trade, marketData?.data)
    }
    if (trade.profit && trade.profit.cgId !== 'unknown' && pairRate) {
      const profitInEth = Number(trade.profit.amount) * pairRate.eth
      totalEthProfit += profitInEth
    }
    if (trade.profit2 && trade.profit2.cgId !== 'unknown' && pairRate) {
      const profitInEth = Number(trade.profit2.amount) * pairRate.eth
      totalEthProfit += profitInEth
    }
    return totalEthProfit
  }

  useEffect(() => {
    if (marketData && tradeData) {
      let totalEthProfit = 0
      tradeData.forEach((trade: any) => {
        totalEthProfit += calcProfit(trade, marketData)
      })
      setTotalEthProfit(+totalEthProfit.toFixed(2))
      setLoading(false)
    }
  }, [marketData])

  const fetchData = (data: any) => {
    setTradeData(data)
    let uniqueIds: string[] = []
    data.forEach((item: any) => {
      if (item.profit && uniqueIds.indexOf(item.profit.cgId) < 0) {
        uniqueIds.push(item.profit.cgId)
      }
    })

    const requestUrl = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=eth&ids=${uniqueIds.join(',')}`

    axios
      .get(requestUrl)
      .then((response: any) => {
        setMarketData(response)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }

  return {
    fetchData,
    totalEthProfit,
    loadingTotalEthProfit: loading,
    totalEthProfitError: error,
  }
}

export default useCoinData
