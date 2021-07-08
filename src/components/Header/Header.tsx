import React, { useState } from 'react'
import StyledHeader from './Header.styled'
import ConnectWalletWithStatusButton from './ConectWalletWithStatusButton'
import logoText from '../../assets/logo-text.svg'
import { useHistory } from 'react-router-dom'
import Modal from '../../components/Modal'
import FAQ from '../../components/FAQ'
interface HeaderProps {
  onConnect: Function
  walletAddress: string
  connected: boolean
  resetApp: Function
  showLogo: boolean
}

const ExternalLink = ({ name, link }: { name: string; link: string }) => (
  <a href={link} target="_blank" rel="noreferrer">
    {name}
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      ></path>
    </svg>
  </a>
)

const Header = ({ onConnect, walletAddress, connected, resetApp, showLogo }: HeaderProps) => {
  const history = useHistory()
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <StyledHeader>
        <div>
          {/* Only Show Small Logo in corner if we're not on the landing page */}
          <img
            src={logoText}
            style={{ display: showLogo ? 'flex' : 'none', cursor: 'pointer', marginRight: '20px' }}
            alt="sandwich.wtf"
            onClick={() => {
              resetApp()
            }}
          ></img>
          <nav>
            <ul>
              <li onClick={() => setModalOpen(true)}>FAQ</li>
              <li>
                <ExternalLink name={'feedback'} link={'https://alchemistcoin.typeform.com/to/rmykUVWf'} />
              </li>
              <li>
                <ExternalLink name={'mistx'} link={'https://mistx.io/'} />
              </li>
              <li>
                <ExternalLink name={'crucible'} link={'https://crucible.alchemist.wtf'} />
              </li>
            </ul>
          </nav>
        </div>
        <ConnectWalletWithStatusButton
          connected={connected}
          onConnect={onConnect}
          ethereumAddress={walletAddress} //TODO 1: Replace placeholder ethereum address with users wallet address
          resetApp={() => resetApp()}
        />
      </StyledHeader>
      <Modal open={isModalOpen} setModalOpen={setModalOpen} title="FAQ">
        <FAQ />
      </Modal>
    </>
  )
}

export default Header
