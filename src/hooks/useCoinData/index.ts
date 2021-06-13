import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

// https://api.coingecko.com/api/v3/simple/price?ids=alchemist%2Cchainlink&vs_currencies=eth

const BASE_URL = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=eth&ids='

const useCoinData = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [marketData, setMarketData] = useState<any>(null)
  const [tradeData, setTradeData] = useState([])
  const [totalEthProfit, setTotalEthProfit] = useState<number | null>(null)

  useEffect(() => {
    if (marketData && tradeData) {
      console.log('marketData', marketData?.data)
      let totalEthProfit = 0
      tradeData.forEach((trade: any) => {
        let pairRate: any = 0
        try {
          pairRate = marketData?.data[trade.profit.cgId]
        } catch (e) {
          console.log('pairRate not found')
        }
        if (pairRate) {
          const profitInEth = Number(trade.profit.amount) * pairRate.eth
          totalEthProfit += profitInEth
        }
      })
      setTotalEthProfit(+totalEthProfit.toFixed(2))
      setLoading(false)
    }
  }, [marketData])

  const fetchData = (data: any) => {
    setTradeData(data)
    let uniquieIds: string[] = []
    data.filter((item: any) => {
      if (item.profit && uniquieIds.indexOf(item.profit.cgId) < 0) {
        uniquieIds.push(item.profit.cgId)
      }
    })

    const requestUrl = `${BASE_URL}${uniquieIds.join(',')}`
    console.log('requestUrl', requestUrl)
    axios
      .get(requestUrl)
      .then((response: any) => {
        console.log('response ', response)
        setMarketData(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }

  return {
    fetchData,
    totalEthProfit,
    loadingTotalEthProfit: loading,
  }
}

export default useCoinData
