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

const PageHeader = () => (
  <StyledPageHeader>
    <img src={sandwichPotion} />
    <h1>Not too bad!</h1>
    <p>these are the sandwiches we found</p>
  </StyledPageHeader>
)

type SummarySandwichTableRowProps = {
  message: string
  worst?: boolean
  best?: boolean
}
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

const ResultsView = () => (
  <StyledResultsView>
    <PageHeader />
    <StyledSummarySandwichTableWrapper>
      <BadSummarySandwichTable />
      <GoodSummarySandwichTable />
    </StyledSummarySandwichTableWrapper>
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Adı', field: 'name' },
          { title: 'Soyadı', field: 'surname' },
          { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
          { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
        ]}
        data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
        title="Demo Title"
      />
    </div>
  </StyledResultsView>
)

export default ResultsView
