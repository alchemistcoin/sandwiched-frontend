{
  /* eslint-disable react/display-name */
}
import React, { useEffect, useRef, useState } from 'react'
import sandwichPotion from '../../assets/sandwich-potion.svg'
import backgroundSvg from '../../assets/background.svg'
import {
  StyledResultsView,
  StyledPageHeader,
  StyledSummarySandwichTableWrapper,
  StyledDetailedTableContainer,
  StyledAttributesItem,
  StyledCTAButton,
  ButtonsGroup,
} from './ResultsView.styled'
import EthAddressForm from '../common/EthAddressForm'
import SummaryCard from './SummaryCard'
import MaterialTable from 'material-table'
import statusIcon from '../../assets/status-icon.svg'
import { TwitterFill } from 'akar-icons'
import SummaryTotalProfitSandwiches from '../../assets/summary-total-profit-sandwiches.svg'
import SummaryTotalSandwiches from '../../assets/summary-total-sandwiches.svg'
import SummaryBestSandwich from '../../assets/summary-best-sandwich.svg'
import { filterSandwichesToDetailsTable, mapSandwichesToDetailsTable } from '../../helpers/data'
import { AnyShape } from '../../helpers/types'
import ArrowLink from '../../assets/arrow-link.svg'
import Decimal from 'decimal.js-light'
import { messageIsSandwich } from '../../helpers/data'
import useCoinData from '../../hooks/useCoinData'

type DetailedTableProps = {
  data: AnyShape[]
  fetchingComplete: boolean
}

const PageHeader = (x: number) => {
  let title: string
  let body: React.ReactElement
  if (x == 0) {
    title = 'No sandwiches found.'
    // body = 'Well played - use mistX.io to stay unsandwiched!'
    body = (
      <>
        Well played - use{' '}
        <a href="https://mistx.io" onClick={() => window.fathom.trackGoal('WDNN8XUH', 0)}>
          mistX.io
        </a>{' '}
        to stay unsandwiched!
      </>
    )
  } else {
    title = 'Uh-oh!'
    body = (
      <>
        You&apos;ve been sandwiched, wtf were you thinking! Next time use{' '}
        <a href="https://mistx.io" onClick={() => window.fathom.trackGoal('WDNN8XUH', 0)}>
          mistX.io
        </a>
      </>
    )
  }

  return (
    <StyledPageHeader>
      {/*<img src={sandwichPotion} />*/}
      <h1>{title}</h1>
      <p>{body}</p>
    </StyledPageHeader>
  )
}

/** Details Table Components */
const AttributeItem = ({ mev }: { mev?: boolean }) => <>{mev && <StyledAttributesItem>MEV</StyledAttributesItem>}</>
const EtherscanLink = ({ txId }: { txId: string }) => (
  <a style={{ float: 'right' }} href={`https://etherscan.io/tx/${txId}`} rel="noreferrer" target="_blank">
    <img src={ArrowLink} />
  </a>
)

const twitterShareLink = (totalSandwiches: number, totalProfitFromSandwiches: number, bestSandwichValue: string) => {
  const twitterBase = 'https://twitter.com/intent/tweet'
  const defaultText = 'Have you been Sandwiched WTF?'
  const targetBase = window.location.origin
  if (totalSandwiches === 0) return `${twitterBase}?text=${encodeURIComponent(defaultText)}&url=${targetBase}`
  const totalMEV = totalProfitFromSandwiches.toFixed() + ' WETH'
  const numberMEV = totalSandwiches
  const highestMEV = bestSandwichValue
  const targetQuery = `?totalMEV=${totalMEV}&numberMEV=${numberMEV}&highestMEV=${highestMEV}`.replace(/\s/g, '-')
  const text = `I've been Sandwiched, WTF! Have you?`
  const url = `${twitterBase}?text=${encodeURIComponent(text)}&url=${targetBase}${encodeURIComponent(targetQuery)}`
  return url
}

const ResultsView = ({ data = [], fetchingComplete }: DetailedTableProps) => {
  const { fetchData, totalEthProfit, juiciestEthSandwich, loadingTotalEthProfit, totalEthProfitError } = useCoinData()

  useEffect(() => {
    if (fetchingComplete) {
      fetchData(data)
    }
  }, [fetchingComplete])
  // references
  let bestSandwichRef = useRef(null)
  const scrollToBestSandwich = () => {
    if (bestSandwichRef && bestSandwichRef.current) {
      // @ts-ignore
      bestSandwichRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      // @ts-ignore
      bestSandwichRef.current.focus()
    }
  }
  // Prep Data for Summary Tables
  const totalSandwiches = data.filter((rec) => {
    return messageIsSandwich(rec)
  }).length
  // Prep Data for Detailed Table
  const detailedTableData = data.filter(filterSandwichesToDetailsTable).map(mapSandwichesToDetailsTable)

  return (
    <StyledResultsView>
      {PageHeader(totalSandwiches)}
      <StyledSummarySandwichTableWrapper>
        <SummaryCard
          image={SummaryBestSandwich}
          backgroundColor={'#fdf0ca'}
          title={'worst sandwich'}
          value={juiciestEthSandwich?.profit ? juiciestEthSandwich?.profit?.toFixed(2) + ' ETH' : 'None'}
          valueColor={'#D96A19'}
          loading={loadingTotalEthProfit}
          selectBestSandwich={() => {
            scrollToBestSandwich()
          }}
        />
        <SummaryCard
          image={SummaryTotalSandwiches}
          backgroundColor={'#dff8fd'}
          title={'total # sandwiches'}
          value={String(totalSandwiches) + (!fetchingComplete ? ' ...' : '')}
        />
        <SummaryCard
          image={SummaryTotalProfitSandwiches}
          backgroundColor={'#F9EEE5'}
          title={'total loss'}
          value={totalEthProfit + ' ETH' || '?'}
          valueColor={totalEthProfit && totalEthProfit <= 0 ? '#22da4a' : '#d96a19'}
          loading={loadingTotalEthProfit}
          error={totalEthProfitError}
        />
      </StyledSummarySandwichTableWrapper>
      <ButtonsGroup>
        <StyledCTAButton
          href={twitterShareLink(totalSandwiches, totalEthProfit || 0, juiciestEthSandwich.profit)}
          target="_blank"
        >
          <TwitterFill style={{ display: 'inline', verticalAlign: 'middle', marginRight: '1rem' }} size={24} />
          Share your sandwiches
        </StyledCTAButton>
        <EthAddressForm className="small" />
      </ButtonsGroup>
      <StyledDetailedTableContainer>
        <MaterialTable
          style={{
            paddingTop: 30,
            width: '100%',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
          }}
          title={<span style={{ fontSize: 14, letterSpacing: 2 }}>ALL SANDWICHES</span>}
          columns={[
            {
              title: 'Date & Time',
              field: 'dateReadable',
              customSort: (a: any, b: any) => a.date - b.date,
            },
            {
              title: 'Sandwich open',
              field: 'open',
              render: (rowData) => (
                <div style={{ width: 240 }}>
                  <span style={{}}>{rowData.open}</span>
                  <EtherscanLink txId={rowData?.openTx || ''} />
                </div>
              ),
              sorting: false,
            },
            {
              title: 'User transaction',
              field: 'target',
              render: (rowData, rowGroups) => {
                return (
                  <div style={{ width: 240 }}>
                    <span style={{}}>{rowData.target}</span>
                    <EtherscanLink txId={rowData?.targetTx || ''} />
                  </div>
                )
              },
              sorting: false,
            },
            {
              title: 'Sandwich close',
              field: 'close',
              render: (rowData) => (
                <div style={{ width: 240 }}>
                  <span style={{}}>{rowData.close}</span>
                  <EtherscanLink txId={rowData?.closeTx || ''} />
                </div>
              ),
              sorting: false,
            },
            {
              title: 'Sandwich loss',
              field: 'profit',
              render: (rowData) => {
                const isBestSandwichRow = juiciestEthSandwich && juiciestEthSandwich.targetTx === rowData.targetTx
                const BestSandwichScrollToMarker = () => (
                  <div
                    ref={isBestSandwichRow ? bestSandwichRef : undefined}
                    style={{ position: 'relative', top: '-1rem' }}
                  />
                )
                if (rowData.profit && rowData.profit.substr(0, 1) != '-') {
                  return (
                    <>
                      <BestSandwichScrollToMarker />
                      <div>
                        <div style={{ color: '#D96A19' }}>{rowData.profit}</div>
                        <div style={{ color: '#D96A19' }}>{rowData.profit2}</div>
                      </div>
                    </>
                  )
                } else {
                  return (
                    <>
                      <BestSandwichScrollToMarker />
                      <div
                        ref={isBestSandwichRow ? bestSandwichRef : undefined}
                        style={{ color: '#22DA4A', fontWeight: 'bold' }}
                      >
                        {rowData.profit}
                      </div>
                    </>
                  )
                }
              },
              sorting: false,
            },
            {
              title: 'Attributes',
              field: 'attributes',
              render: (rowData) => <AttributeItem {...rowData.attributes}/>, // prettier-ignore
            },
          ]}
          data={detailedTableData}
          options={{
            headerStyle: {
              fontWeight: 'bold',
              fontSize: '14px',
              lineHeight: '24px',
              borderBottom: '2px solid #E0DFDB',
              marginBottom: '20px',
              paddingBottom: '20px',
            },
            rowStyle: (rowData) => {
              return {
                backgroundColor:
                  juiciestEthSandwich && juiciestEthSandwich.targetTx === rowData.targetTx ? '#F9EEE5' : '#FFF',
                fontSize: '14px',
                lineHeight: '24px',
                borderBottom: '0px',
              }
            },
            searchFieldStyle: {
              // color: 'yellow',
            },
            paging: false,
            // pageSizeOptions: [10, 20, 50, 100],
          }}
          localization={{
            body: {
              emptyDataSourceMessage: <h2 style={{}}>No sandwiches to display</h2>,
            },
          }}
        />
      </StyledDetailedTableContainer>
    </StyledResultsView>
  )
}

export default ResultsView
