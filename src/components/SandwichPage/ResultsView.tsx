import React from 'react'
import sandwichPotion from '../../assets/sandwich-potion.svg'
import {
  StyledResultsView,
  StyledSummarySandwichList,
  StyledSummarySandwichListItem,
  StyledPageHeader,
  StyledSummarySandwichTableWrapper,
} from './ResultsView.styled'
import MaterialTable from 'material-table'
import statusIcon from '../../assets/status-icon.svg'
import { ISandwichTableData } from '../../helpers/types'

type SummarySandwichTableRowProps = {
  message: string
  worst?: boolean
  best?: boolean
}

type DetailedTableProps = {
  data: ISandwichTableData[]
}

const PageHeader = () => (
  <StyledPageHeader>
    <img src={sandwichPotion} />
    <h1>Not too bad!</h1>
    <p>these are the sandwiches we found</p>
  </StyledPageHeader>
)

const SummarySandwichListItem = ({ message, worst = false, best = false }: SummarySandwichTableRowProps) => (
  <StyledSummarySandwichListItem>
    <span className="message">{message}</span>
    <img className="icon" src={statusIcon} />
  </StyledSummarySandwichListItem>
)

const GoodSummarySandwichTable = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h1>Sandwich</h1>
    <StyledSummarySandwichList className="good">
      <ul>
        <SummarySandwichListItem message={`swap 100 ETH for 10 MIST`} />
        <SummarySandwichListItem message={`swap 200 ETH for 10 MIST`} />
        <SummarySandwichListItem message={`swap 300 ETH for 10 MIST`} />
      </ul>
    </StyledSummarySandwichList>
  </div>
)

const BadSummarySandwichTable = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <h1>Sandwich</h1>
    <StyledSummarySandwichList className="bad"></StyledSummarySandwichList>
  </div>
)

const ResultsView = ({ data = [] }: DetailedTableProps) => (
  <StyledResultsView>
    {console.log(data)}
    <PageHeader />
    <StyledSummarySandwichTableWrapper>
      <BadSummarySandwichTable />
      <GoodSummarySandwichTable />
    </StyledSummarySandwichTableWrapper>
    <MaterialTable
      columns={[
        { title: 'Date & Time', field: 'date' },
        { title: 'Sandwich open', field: 'open' },
        { title: 'User transaction', field: 'target' },
        { title: 'Sandwich close', field: 'close' },
        { title: 'Profit earned', field: 'profit' },
      ]}
      // data={[{ date: 'Mehmet', open: 'Baran', target: 1987, close: 63, profit: 54 }]}
      data={data}
      title="All sandwiches"
      options={{
        headerStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </StyledResultsView>
)

export default ResultsView
