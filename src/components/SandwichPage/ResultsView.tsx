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
import MaterialTable from 'material-table'
import statusIcon from '../../assets/status-icon.svg'
import { ISandwichTableData } from '../../helpers/types'
import WorstSandwich from '../../assets/worst-sandwich.svg'
import GreatSandwich from '../../assets/great-sandwich.svg'

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

const GoodSummarySandwichTable = ({ data = [] }: DetailedTableProps) => (
  <div style={{}}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={GreatSandwich} alt="good sandwich" />
    </div>
    <StyledSummarySandwichList className="good">
      <ul>
        {data.map((rec, idx) => {
          if (rec.profit?.substr(0, 1) === '-') return
          const message = 'swap ' + rec.target
          return <SummarySandwichListItem message={message} key={idx} />
        })}
      </ul>
    </StyledSummarySandwichList>
  </div>
)

const BadSummarySandwichTable = ({ data = [] }: DetailedTableProps) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={WorstSandwich} alt="bad sandwich" />
    </div>
    <StyledSummarySandwichList className="bad">
      <ul>
        {data.map((rec, idx) => {
          if (rec.profit?.substr(0, 1) !== '-') return
          const message = 'swap ' + rec.target
          return <SummarySandwichListItem message={message} key={idx} />
        })}
      </ul>
    </StyledSummarySandwichList>
  </div>
)

const ResultsView = ({ data = [] }: DetailedTableProps) => (
  <StyledResultsView>
    {console.log(data)}
    <PageHeader />
    <StyledSummarySandwichTableWrapper>
      <BadSummarySandwichTable data={data} />
      <GoodSummarySandwichTable data={data} />
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
        data={data}
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

export default ResultsView
