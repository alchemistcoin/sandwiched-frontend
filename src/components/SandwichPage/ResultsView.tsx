{
  /* eslint-disable react/display-name */
}
import React from 'react'
import sandwichPotion from '../../assets/sandwich-potion.svg'
import {
  StyledResultsView,
  StyledPageHeader,
  StyledSummarySandwichTableWrapper,
  StyledDetailedTableContainer,
  StyledAttributesItem,
} from './ResultsView.styled'
import SummaryCard from './SummaryCard'
import MaterialTable from 'material-table'
import statusIcon from '../../assets/status-icon.svg'
import SummaryTotalProfitSandwiches from '../../assets/summary-total-profit-sandwiches.svg'
import SummaryTotalSandwiches from '../../assets/summary-total-sandwiches.svg'
import SummaryBestSandwich from '../../assets/summary-best-sandwich.svg'
import { filterSandwichesToDetailsTable, mapSandwichesToDetailsTable } from '../../helpers/data'
import { AnyShape } from '../../helpers/types'
import ArrowLink from '../../assets/arrow-link.svg'

type DetailedTableProps = {
  data: AnyShape[]
  fetchingComplete: boolean
}

const PageHeader = () => (
  <StyledPageHeader>
    <img src={sandwichPotion} />
    <h1>No sandwiches found!</h1>
    <p>these are the sandwiches we found</p>
  </StyledPageHeader>
)
/** Details Table Components */
const AttributeItem = ({ mev }: { mev?: boolean }) => <>{mev && <StyledAttributesItem>MEV</StyledAttributesItem>}</>
const EtherscanLink = ({ txId }: { txId: string }) => (
  <a style={{ float: 'right' }} href={`https://etherscan.io/tx/${txId}`} rel="noreferrer" target="_blank">
    <img src={ArrowLink} />
  </a>
)

const ResultsView = ({ data = [], fetchingComplete }: DetailedTableProps) => {
  console.log('data', data)
  // Prep Data for Summary Tables
  const bestSandwich = data.reduce((prev, curr) => {
    // TODO: find a better way to grab a records profit data (maybe combine, maybe take the max, or maybe one of them is always preferred?)
    const prevProfit = prev.profit?.amount || prev.profit2?.amount || 0
    const currProfit = curr.profit?.amount || curr.profit2?.amount || 0
    return Number(prevProfit) >= Number(currProfit) ? prev : curr
  })
  const totalSandwiches = data.filter((rec) => {
    if (rec.message.toLowerCase() === 'sandwich found') {
      return true
    }
  }).length
  let totalProfitFromSandwiches = 0
  data.forEach((rec) => {
    if (rec.profit?.currency.toLowerCase() === 'weth') {
      totalProfitFromSandwiches += Number(rec.profit?.amount)
    }
    if (rec.profit2?.currency.toLowerCase() === 'weth') {
      totalProfitFromSandwiches += Number(rec.profit2?.amount)
    }
  })
  // Prep Data for Detailed Table
  const detailedTableData = data.filter(filterSandwichesToDetailsTable).map(mapSandwichesToDetailsTable)
  // console.log('detailedTableData', detailedTableData)

  const bestSandwichValue =
    bestSandwich && bestSandwich.profit
      ? `${Number(bestSandwich?.profit?.amount).toFixed()}  ${bestSandwich?.profit?.currency}`
      : 'None'

  return (
    <StyledResultsView>
      <PageHeader />
      <StyledSummarySandwichTableWrapper>
        <SummaryCard
          image={SummaryBestSandwich}
          backgroundColor={'#fdf0ca'}
          title={'juiciest'}
          value={bestSandwichValue}
          valueColor={'#22da4a'}
        />
        <SummaryCard
          image={SummaryTotalSandwiches}
          backgroundColor={'#dff8fd'}
          title={'total # sandwiches'}
          value={String(totalSandwiches)}
        />
        <SummaryCard
          image={SummaryTotalProfitSandwiches}
          backgroundColor={'#F9EEE5'}
          title={'total profit made'}
          value={totalProfitFromSandwiches.toFixed() + ' WETH' || '?'}
          valueColor={totalProfitFromSandwiches <= 0 ? '#22da4a' : '#d96a19'}
        />
      </StyledSummarySandwichTableWrapper>
      <StyledDetailedTableContainer>
        <MaterialTable
          style={{
            paddingTop: 50,
            width: '100%',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
          }}
          columns={[
            { title: 'Date & Time', field: 'date' },
            {
              title: 'Sandwich open',
              field: 'open',
              render: (rowData) => (
                <div style={{ minWidth: 220 }}>
                  <span style={{}}>{rowData.open}</span>
                  <EtherscanLink txId={rowData?.openTx || ''} />
                </div>
              ),
            },
            {
              title: 'User transaction',
              field: 'target',
              render: (rowData) => (
                <div style={{ minWidth: 220 }}>
                  <span style={{}}>{rowData.target}</span>
                  <EtherscanLink txId={rowData?.targetTx || ''} />
                </div>
              ),
            },
            {
              title: 'Sandwich close',
              field: 'close',
              render: (rowData) => (
                <div style={{ minWidth: 220 }}>
                  <span style={{}}>{rowData.close}</span>
                  <EtherscanLink txId={rowData?.closeTx || ''} />
                </div>
              ),
            },
            {
              title: 'Profit earned',
              field: 'profit',
              render: (rowData) => {
                if (rowData.profit && rowData.profit.substr(0, 1) != '-') {
                  return <span style={{ color: '#D96A19' }}>{rowData.profit}</span>
                } else {
                  return <span style={{ color: '#22DA4A', fontWeight: 'bold' }}>{rowData.profit}</span>
                }
              },
            },
            {
              title: 'Attributes',
              field: 'attributes',
              render: (rowData) => <AttributeItem {...rowData.attributes}/>, // prettier-ignore
            },
          ]}
          data={detailedTableData}
          title={<span style={{ fontSize: 14, letterSpacing: 2 }}>ALL SANDWICHES</span>}
          options={{
            headerStyle: {
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '24px',
              borderBottom: '2px solid #E0DFDB',
              marginBottom: '20px',
              paddingBottom: '20px',
            },
            rowStyle: {
              fontSize: '14px',
              lineHeight: '24px',
              borderBottom: '0px',
            },
            searchFieldStyle: {
              // color: 'yellow',
            },
            pageSizeOptions: [10, 20, 50, 100],
          }}
        />
      </StyledDetailedTableContainer>
    </StyledResultsView>
  )
}

export default ResultsView
