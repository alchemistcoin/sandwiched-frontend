import React from 'react'
import sandwichPotion from '../../assets/sandwich-potion.svg'
import {
  StyledResultsView,
  StyledSummarySandwichList,
  StyledSummarySandwichListItem,
  StyledPageHeader,
  StyledSummarySandwichTableWrapper,
  StyledDetailedTableContainer,
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

type SummarySandwichTableRowProps = {
  message: string
  worst?: boolean
  best?: boolean
}

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

// const SummarySandwichListItem = ({ message, worst = false, best = false }: SummarySandwichTableRowProps) => (
//   <StyledSummarySandwichListItem>
//     <span className="message">{message}</span>
//     <img className="icon" src={statusIcon} />
//   </StyledSummarySandwichListItem>
// )
//
// const GoodSummarySandwichTable = ({ data = [] }: DetailedTableProps) => (
//   <div style={{}}>
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <img src={GreatSandwich} alt="good sandwich" />
//     </div>
//     <StyledSummarySandwichList className="good">
//       <ul>
//         {data.map((rec, idx) => {
//           if (rec.profit?.substr(0, 1) === '-') return
//           const message = 'swap ' + rec.target
//           return <SummarySandwichListItem message={message} key={idx} />
//         })}
//       </ul>
//     </StyledSummarySandwichList>
//   </div>
// )
//
// const BadSummarySandwichTable = ({ data = [] }: DetailedTableProps) => (
//   <div>
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <img src={WorstSandwich} alt="bad sandwich" />
//     </div>
//     <StyledSummarySandwichList className="bad">
//       <ul>
//         {data.map((rec, idx) => {
//           if (rec.profit?.substr(0, 1) !== '-') return
//           const message = 'swap ' + rec.target
//           return <SummarySandwichListItem message={message} key={idx} />
//         })}
//       </ul>
//     </StyledSummarySandwichList>
//   </div>
// )

const ResultsView = ({ data = [], fetchingComplete }: DetailedTableProps) => {
  console.log('data', data)
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

  const detailedTableData = data.filter(filterSandwichesToDetailsTable).map(mapSandwichesToDetailsTable)
  console.log('detailedTableData', detailedTableData)
  return (
    <StyledResultsView>
      {/*{console.log(data)}*/}
      <PageHeader />
      <StyledSummarySandwichTableWrapper>
        <SummaryCard
          image={SummaryBestSandwich}
          backgroundColor={'#fdf0ca'}
          title={'juiciest'}
          value={Number(bestSandwich?.profit?.amount).toFixed() + ` ${bestSandwich?.profit?.currency}` || '?'}
          // value={'?'}
        />
        <SummaryCard
          image={SummaryTotalSandwiches}
          backgroundColor={'#dff8fd'}
          title={'total # sandwiches'}
          // value={fetchingComplete ? data[data.length-1].count}
          value={String(totalSandwiches)}
        />
        <SummaryCard
          image={SummaryTotalProfitSandwiches}
          backgroundColor={'#F9EEE5'}
          title={'total profit made'}
          // value={fetchingComplete ? data[data.length-1].count}
          value={'?'}
        />
        {/*<BadSummarySandwichTable data={data} />*/}
        {/*<GoodSummarySandwichTable data={data} />*/}
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
