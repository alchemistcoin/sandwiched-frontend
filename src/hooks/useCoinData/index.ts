import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const useCoinData = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [marketData, setMarketData] = useState<any>(null)
  const [tradeData, setTradeData] = useState([])
  const [totalEthProfit, setTotalEthProfit] = useState<number | null>(null)
  const [error, setError] = useState<boolean>(false)

  const calcProfit = (trade: any, marketData: any): number => {
    let totalEthProfit: number = 0
    if (trade.profit && trade.profit.cgId !== 'unknown') {
      let pairRate: any = null
      try {
        pairRate = marketData?.data[trade.profit.cgId]
      } catch (e) {
        console.log('error - pairRate for profit1 not found', trade, marketData?.data)
      }
      if (pairRate) {
        const profitInEth = Number(trade.profit.amount) * pairRate.eth
        totalEthProfit += profitInEth
      }
    }
    if (trade.profit2 && trade.profit2.cgId !== 'unknown') {
      let pairRate2: any = null
      try {
        pairRate2 = marketData?.data[trade.profit2.cgId]
      } catch (e) {
        console.log('error - pairRate for profit2 not found', trade, marketData?.data)
      }
      if (pairRate2) {
        const profitInEth = Number(trade.profit2.amount) * pairRate2.eth
        totalEthProfit += profitInEth
      }
    }
    return totalEthProfit
  }

  useEffect(() => {
    if (marketData && tradeData) {
      console.log('tradeData', tradeData)
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

    axios
      .get(`https://api.coingecko.com/api/v3/simple/price?vs_currencies=eth&ids=${uniqueIds.join(',')}`)
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
