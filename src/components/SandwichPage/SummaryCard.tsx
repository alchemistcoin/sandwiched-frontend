import React from 'react'
import StyledSummaryCard from './SummaryCard.styled'
import statusIcon from '../../assets/status-icon.svg'

type SummaryCardProps = {
  image?: string
  title?: string
  value?: string
  valueColor?: string
  backgroundColor?: string
}

const SummaryCard = ({ image, title, value, backgroundColor, valueColor }: SummaryCardProps) => {
  return (
    <StyledSummaryCard>
      <div className="statusIcon">
        <img
          style={{ visibility: 'hidden' }} // Remain Hidden until this icon has a function
          src={statusIcon}
        />
      </div>
      <div className="centeredContent">
        <div className="iconContainer" style={{ backgroundColor: backgroundColor }}>
          <img className="summaryCardIcon" src={image} />
        </div>
        <div className="summaryCardTitle">{title}</div>
        <div className="summaryCardValue" style={{ color: valueColor }}>
          {value}
        </div>
      </div>
    </StyledSummaryCard>
  )
}

export default SummaryCard
