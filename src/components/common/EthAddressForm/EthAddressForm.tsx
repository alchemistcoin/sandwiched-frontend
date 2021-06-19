import { CircleChevronRightFill } from 'akar-icons'
import { StyledAddressForm } from './EthAddressForm.styled'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { StyledPrimaryButton } from '../../LandingPage/LandingPage.styled'

const EthAddressForm = () => {
  const [inputVal, setInputVal] = useState()
  let history = useHistory()

  let manualAddressSubmit = () => {
    if (inputVal) {
      history.push(`/${inputVal}`)
    }
  }

  return (
    <StyledAddressForm onSubmit={() => manualAddressSubmit()}>
      <div className={'input-wrapper'}>
        <div className="rectangle" />
        <input
          type="text"
          value={inputVal}
          onChange={(e: any) => setInputVal(e.target.value)}
          required
          placeholder="Enter Wallet Address"
        />
      </div>
      <StyledPrimaryButton
        //Style Overrides
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, padding: 0, margin: 0 }}
      >
        <CircleChevronRightFill size={26} style={{ color: '#836303' }} />
      </StyledPrimaryButton>
    </StyledAddressForm>
  )
}

export default EthAddressForm
