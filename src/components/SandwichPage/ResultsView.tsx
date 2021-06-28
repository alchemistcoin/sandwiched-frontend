import styled from 'styled-components'

{
  /* eslint-disable react/display-name */
  /* eslint-disable react/jsx-no-target-blank */
}
import React, { useEffect, useRef, useState, useMemo } from 'react'
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
import LoadingBar from '../common/LoadingBar'
import { reverseEnsLookup } from '../../helpers/ens'
import EthAddressForm from '../common/EthAddressForm'
import SummaryCard from './SummaryCard'
import MaterialTable from 'material-table'
import statusIcon from '../../assets/status-icon.svg'
import loadingBar from '../../assets/loading-bar.svg'
import { TwitterFill, Alarm } from 'akar-icons'
import SummaryTotalProfitSandwiches from '../../assets/summary-total-profit-sandwiches.svg'
import SummaryTotalSandwiches from '../../assets/summary-total-sandwiches.svg'
import SummaryBestSandwich from '../../assets/summary-best-sandwich.svg'
import { filterSandwichesToDetailsTable, mapSandwichesToDetailsTable } from '../../helpers/data'
import { AnyShape, ISandwichDetailedTableData } from '../../helpers/types'
import ArrowLink from '../../assets/arrow-link.svg'
import Decimal from 'decimal.js-light'
import { messageIsSandwich } from '../../helpers/data'
import useCoinData from '../../hooks/useCoinData'
import ENSAddress from './ENSAddress'

type DetailedTableProps = {
  data: AnyShape[]
  fetchingComplete: boolean
  walletAddressFromUrl: string
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
        <a
          className={'mistx-link'}
          href="https://mistx.io"
          target="_blank"
          onClick={() => window.fathom.trackGoal('WDNN8XUH', 0)}
        >
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
        <a
          className={'mistx-link'}
          href="https://mistx.io"
          target="_blank"
          onClick={() => window.fathom.trackGoal('WDNN8XUH', 0)}
        >
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

const ResultsView = ({ data = [], fetchingComplete, walletAddressFromUrl }: DetailedTableProps) => {
  // Constants
  const dateColumnWidth = 160
  const sandwichColumnWidth = 230
  const profitColumnWidth = 120
  const attributesColumnWidth = 100

  // Hooks
  const { fetchData, totalEthProfit, juiciestEthSandwich, loadingTotalEthProfit, totalEthProfitError } = useCoinData()
  const [ensName, setEnsName] = useState(null)
  useEffect(() => {
    if (fetchingComplete) {
      fetchData(data)
    }
  }, [fetchingComplete])

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

  const tableRef = useRef()

  const LoadingBarForDetailsTable = (width: number): JSX.Element => <LoadingBar width={width} height={16} />

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
          <TwitterFill
            style={{
              display: 'inline',
              verticalAlign: 'middle',
              marginRight: '1rem',
            }}
            size={24}
          />
          Share your sandwiches
        </StyledCTAButton>
        <EthAddressForm className="small" inputPlaceholder={'Enter new wallet address or ENS'} />
      </ButtonsGroup>
      <StyledDetailedTableContainer>
        <MaterialTable
          tableRef={tableRef}
          style={{
            paddingTop: 30,
            width: '100%',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
          }}
          title={
            <div>
              <span style={{ fontSize: 14, letterSpacing: 2, marginRight: '3rem' }}>
                <span>ALL SANDWICHES</span>
                <ENSAddress style={{ marginBottom: 7 }} address={walletAddressFromUrl} ensName={ensName} />
              </span>
            </div>
          }
          columns={[
            {
              title: (
                <>
                  <Alarm
                    style={{
                      position: 'relative',
                      top: 4,
                      display: 'inline',
                      marginRight: '.75rem',
                    }}
                    size={18}
                  />
                  <span>Date & Time</span>
                </>
              ),
              field: 'dateReadable',
              customSort: (a: any, b: any) => a.date - b.date,
              render: (rowData) => (
                <div style={{ minWidth: dateColumnWidth }}>
                  {rowData.dateReadable ? rowData.dateReadable : LoadingBarForDetailsTable(160)}
                </div>
              ),
            },
            {
              title: (
                <>
                  <span>Sandwich open</span>
                </>
              ),
              field: 'open',
              render: (rowData) => (
                <div style={{ width: sandwichColumnWidth }}>
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
                  <div style={{ width: sandwichColumnWidth }}>
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
                <div style={{ width: sandwichColumnWidth }}>
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
                    style={{ position: 'relative', top: '-1rem', width: profitColumnWidth }}
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
              render: (rowData) => <div style={{ width: attributesColumnWidth }}><AttributeItem {...rowData.attributes}/></div>, // prettier-ignore
            },
          ]}
          data={detailedTableData}
          options={{
            // loadingType: 'overlay',
            search: false,
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
        {/*
        Loading Table Display
        */}
        {!fetchingComplete && (
          <MaterialTable
            tableRef={tableRef}
            style={{
              width: '100%',
              marginTop: '0px',
              paddingTop: '0px',
            }}
            columns={[
              {
                cellStyle: {
                  width: dateColumnWidth,
                },
                field: 'dateReadable',
                render: (rowData) => (
                  <div style={{ minWidth: dateColumnWidth }}>{LoadingBarForDetailsTable(dateColumnWidth)}</div>
                ),
              },
              {
                field: 'open',
                render: (rowData) => (
                  <div style={{ width: sandwichColumnWidth }}>{LoadingBarForDetailsTable(sandwichColumnWidth)}</div>
                ),
                sorting: false,
              },
              {
                field: 'target',
                render: (rowData, rowGroups) => {
                  return (
                    <div style={{ width: sandwichColumnWidth }}>{LoadingBarForDetailsTable(sandwichColumnWidth)}</div>
                  )
                },
                sorting: false,
              },
              {
                field: 'close',
                render: (rowData) => (
                  <div style={{ width: sandwichColumnWidth }}>{LoadingBarForDetailsTable(sandwichColumnWidth)}</div>
                ),
                sorting: false,
              },
              {
                field: 'profit',
                render: (rowData) => (
                  <div style={{ width: profitColumnWidth }}>{LoadingBarForDetailsTable(profitColumnWidth)}</div>
                ),
                sorting: false,
              },
              {
                field: 'attributes',
                render: (rowData) => <AttributeItem {...rowData.attributes}/>, // prettier-ignore
              },
            ]}
            data={Array(5).fill({} as ISandwichDetailedTableData)}
            options={{
              toolbar: false,
              search: false,
              showTitle: false,
              headerStyle: {
                display: 'none',
              },
              paging: false,
              rowStyle: (rowData) => {
                return {
                  backgroundColor:
                    juiciestEthSandwich && juiciestEthSandwich.targetTx === rowData.targetTx ? '#F9EEE5' : '#FFF',
                  fontSize: '14px',
                  lineHeight: '24px',
                  borderBottom: '0px',
                }
              },
            }}
          />
        )}
      </StyledDetailedTableContainer>
    </StyledResultsView>
  )
}

export default ResultsView
