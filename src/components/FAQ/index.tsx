import React from 'react'

const FAQ = (): React.ReactElement => (
  <>
    <h4>Wtf is this?</h4>
    <p>
      Sandwiched.wtf is a tool that allows you to see how much profit MEV traders and their bots have made by
      sandwiching your trades.
    </p>
    <h4>Who made this?</h4>
    <p>
      Sandwiched.wtf is a community project by{' '}
      <a href="https://docs.alchemist.wtf" target="_blank" rel="noreferrer">
        Alchemist.
      </a>
    </p>
    <h4>What is a sandwich?</h4>
    <p>
      A sandwich is a pair of bot-inserted trades that wrap your regular trade on a DEX like Uniswap. By doing this, the
      bot/attacker can make a profit at your expense. For more information, see{' '}
      <a href="https://medium.com/@alchemistcoin/sandwiched.wtf-f3123a7d409b" target="_blank" rel="noreferrer">
        this article
      </a>
      .
    </p>
    <h4>Do you track sandwiches on all exchanges?</h4>
    <p>
      Currently we only search trades on uniswap v2. We will soon add more; please follow{' '}
      <a href="https://twitter.com/@sandwichedwtf" target="_blank" rel="noreferrer">
        @sandwichedwtf
      </a>{' '}
      on twitter to track updates.
    </p>
    <h4>How do I avoid being sandwiched?</h4>
    <p>
      Use{' '}
      <a href="https://mistx.io" target="_blank" rel="noreferrer">
        mistX.io
      </a>{' '}
      for protection against front-running and sandwich trades.
    </p>
    <h4>How do you compute the total loss?</h4>
    <p>
      The total loss number (right-hand card) is the sum of all sandwich bot profits. ETH profits are added as-is, and
      other tokens are converted to ETH, at the current rates using the Coingecko APIs (thanks Coingecko!). This means
      that total loss can vary over time for the same set of sandwiches.
    </p>
    <h4>Is this open source?</h4>
    <p>
      Of course! Checkout our{' '}
      <a href="https://github.com/alchemistcoin/sandwiched-frontend" target="_blank" rel="noreferrer">
        frontend
      </a>{' '}
      and{' '}
      <a href="https://github.com/alchemistcoin/sandwiched-backend" target="_blank" rel="noreferrer">
        backend
      </a>{' '}
      repos on GitHub. While you&apos;re there, a star would be welcome.
    </p>
  </>
)

export default FAQ
