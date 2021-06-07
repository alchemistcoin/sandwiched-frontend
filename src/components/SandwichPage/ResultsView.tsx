{/* eslint-disable */}
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
import { ISandwichDetailedTableData } from '../../helpers/types'
import SummaryTotalProfitSandwiches from '../../assets/summary-total-profit-sandwiches.svg'
import SummaryTotalSandwiches from '../../assets/summary-total-sandwiches.svg'
import GreatSandwich from '../../assets/great-sandwich.svg'
import SummaryBestSandwich from '../../assets/summary-best-sandwich.svg'
import { filterSandwichesToDetailsTable, mapSandwichesToDetailsTable } from '../../helpers/data'
import { AnyShape } from '../../helpers/types'

type DetailedTableProps = {
  data: AnyShape[]
  fetchingComplete: boolean
}

const PageHeader = () => (
  <StyledPageHeader>
    <img src={sandwichPotion} />
    <h1>Not too bad!</h1>
    <p>these are the sandwiches we found</p>
  </StyledPageHeader>
)

const AttributeItem = ({ mev }: { mev?: boolean }) => <>{mev && <StyledAttributesItem>MEV</StyledAttributesItem>}</>
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

  return (
    <StyledResultsView>
      <PageHeader />
      <StyledSummarySandwichTableWrapper>
        <SummaryCard
          image={SummaryBestSandwich}
          backgroundColor={'#fdf0ca'}
          title={'juiciest'}
          value={Number(bestSandwich?.profit?.amount).toFixed() + ` ${bestSandwich?.profit?.currency}` || '?'}
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
            { title: 'Sandwich open', field: 'open' },
            { title: 'User transaction', field: 'target' },
            { title: 'Sandwich close', field: 'close' },
            { title: 'Profit earned', field: 'profit' },
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
            },
            rowStyle: {
              fontSize: '14px',
              lineHeight: '24px',
              backgroundColor: '#EEE',
            },
            searchFieldStyle: {
              // color: 'yellow',
            },
            pageSizeOptions: [10, 20, 50, 100],
          }}
          // localization={{
          //   pagination: {
          //     labelDisplayedRows: '1',
          //     labelRowsSelect: '2',
          //     labelRowsPerPage: '3',
          //     firstAriaLabel: '4',
          //     firstTooltip: '5',
          //     previousAriaLabel: '5',
          //     previousTooltip: '5',
          //     nextAriaLabel: '5',
          //     nextTooltip: '5',
          //     lastAriaLabel: '5',
          //     lastTooltip: '5',
          //   },
          // }}
          // components={{
          //   // eslint-disable-next-line react/display-name
          //   Pagination: (props) => <MTablePagination {...props} />,
          // }}
        />
      </StyledDetailedTableContainer>
    </StyledResultsView>
  )
}

export default ResultsView
