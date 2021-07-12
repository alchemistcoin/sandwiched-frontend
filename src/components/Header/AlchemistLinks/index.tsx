import React, { useState } from 'react'
import AlchemistMenuIcon from '../../../assets/alchemist-menu-icon.svg'
import CrucibleIcon from '../../../assets/crucible-icon.svg'
import CopperIcon from '../../../assets/copper-icon.svg'
import MistxIcon from '../../../assets/mistx-icon.svg'
import StyledAlchemistLinks, { StyledList, StyledListItem } from './AlchemistLinks.styled'
import styled from 'styled-components'

interface ListItemsProps {
  imageSrc: string
  title: string
  description: string
  link: string
}

const ListItem = ({ imageSrc, title, description, link }: ListItemsProps) => {
  return (
    <StyledListItem>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={imageSrc} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16 }}>
          <span className={'title'}>{title}</span>
          <span className={'description'}>{description}</span>
        </div>
      </a>
    </StyledListItem>
  )
}

const AlchemistLinks = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledAlchemistLinks
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      <button>
        <img src={AlchemistMenuIcon} />
      </button>

      {isOpen && (
        <StyledList>
          <ListItem
            imageSrc={MistxIcon}
            title={'Mistx'}
            description={'First FlashDEX powered by Flashbots'}
            link={'https://mistx.io'}
          />
          <ListItem
            imageSrc={CrucibleIcon}
            title={'Crucible'}
            description={'Non-custodial staking platform'}
            link={'https://crucible.alchemist.wtf'}
          />
          <ListItem
            imageSrc={CopperIcon}
            title={'Copper'}
            description={'Token fair Launch Auctions'}
            link={'https://copperlaunch.com'}
          />
        </StyledList>
      )}
    </StyledAlchemistLinks>
  )
}

export default AlchemistLinks
