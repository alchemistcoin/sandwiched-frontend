import React from 'react'

const FAQ = (): React.ReactElement => (
  <>
    <h4>Wtf is this?</h4>
    <p>
      Sandwiched.wtf is a tool that allows you to see how much profit MEV traders and their bots have made by
      sandwiching your trades.
    </p>
    <h4>Who made this?</h4>
    <p>sandwiched.wtf is a community project by Alchemist.</p>
    <h4>What is a sandwich?</h4>
    <p>
      A sandwich is a pair of bot-inserted trades that wrap your regular trade on a DEX like Uniswap. By doing this, the
      bot/attacker can make a profit at your expense. For more information, see medium article.
    </p>
    <h4>Do you track sandwiches on all exchanges?</h4>
    <p>Use mistX.io for protection against front-running and sandwich trades.</p>
  </>
)

export default FAQ
