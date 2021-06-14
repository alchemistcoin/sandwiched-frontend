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

  useEffect(() => {
    if (marketData && tradeData) {
      let totalEthProfit = 0
      tradeData.forEach((trade: any) => {
        let pairRate: any = 0
        if (trade.profit && trade.profit.cgId) {
          try {
            pairRate = marketData?.data[trade.profit.cgId]
          } catch (e) {
            console.log('error - pairRate not found', trade.profit, marketData?.data)
          }
          if (pairRate) {
            const profitInEth = Number(trade.profit.amount) * pairRate.eth
            totalEthProfit += profitInEth
          }
        }
      })
      setTotalEthProfit(+totalEthProfit.toFixed(2))
      setLoading(false)
    }
  }, [marketData])

  const fetchData = (data: any) => {
    setTradeData(data)
    let uniqueIds: string[] = []
    data.filter((item: any) => {
      if (item.profit && uniqueIds.indexOf(item.profit.cgId) < 0) {
        uniquieIds.push(item.profit.cgId)
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
