import { CircleChevronRightFill } from 'akar-icons'
import { StyledAddressForm } from './EthAddressForm.styled'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PrimaryButton from '../PrimaryButton'

type EthAddressFormProps = {
  inputPlaceholder?: string
  className?: string
}

const EthAddressForm = ({ inputPlaceholder = 'Enter wallet address or ENS', ...props }: EthAddressFormProps) => {
  const [inputVal, setInputVal] = useState()
  let history = useHistory()

  let manualAddressSubmit = () => {
    if (inputVal) {
      history.push(`/${inputVal}`)
    }
  }

  return (
    <StyledAddressForm onSubmit={() => manualAddressSubmit()} {...props}>
      <div className={'input-wrapper'}>
        <span />
        {/*<div className="rectangle" />*/}
        <input
          type="text"
          value={inputVal}
          onChange={(e: any) => setInputVal(e.target.value)}
          required
          placeholder={inputPlaceholder}
        />
      </div>
      <PrimaryButton
        //Style Overrides
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, padding: 0, margin: 0 }}
      >
        <CircleChevronRightFill size={26} style={{ color: '#836303' }} />
      </PrimaryButton>
    </StyledAddressForm>
  )
}

export default EthAddressForm
