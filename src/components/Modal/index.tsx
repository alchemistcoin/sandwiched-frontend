import React, { ReactElement, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Modal, { ModalProvider, BaseModalBackground } from 'styled-react-modal'
import { StyledModalHeader, StyledModalMain } from './Modal.styled'

const StyledModal = Modal.styled`
  max-width: 600px;
  width: calc(100% - 30px);
  display: flex;
  background-color: #fff;
  opacity: ${(props: any) => props.opacity};
  transition : all 0.3s ease-in-out;
  border-radius: 24px;
  box-sizing: border-box; 
  display: flex;
  flex-direction: column;
`

interface ModalProps {
  open: boolean
  setModalOpen: any
  children?: ReactElement
  title?: string
}

const modal = ({ open, setModalOpen, children, title }: ModalProps) => {
  const [opacity, setOpacity] = useState(0)

  function toggleModal() {
    setOpacity(0)
    setModalOpen(!open)
  }

  return (
    <StyledModal isOpen={open} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
      <StyledModalHeader>
        <span>{title}</span>
        <button onClick={toggleModal}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 13L13 1M1 1L13 13"
              stroke="#190134"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </StyledModalHeader>
      <StyledModalMain>{children}</StyledModalMain>
    </StyledModal>
  )
}

export default modal
