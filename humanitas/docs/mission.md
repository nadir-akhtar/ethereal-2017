# Humanitas Overview
## Users
Two categories of individuals can join into this ecosystem:
* **Donors**: _High-income bracket members of society looking to better lives._ Rather than paying taxes to a generic pool of money in the hands of the government and not being able to see how taxes are used or have a direct say in spending, donors can choose to redirect that money to this charity, which tracks the movement of all financial assets on the public Ethereum blockchain for complete transparency of spending. On top of that, with reduced overhead costs, money is used more effectively rather than being lost due to political or economic friction.
* **Recipients**: _Low-income bracket members of society looking for better lives._ Rather than relying on governments to finish planning a budget while debating about the livelihoods of the impoverished like some game, recipients can choose to verify their status as a recipient of low-income benefits to receive not only discounts on necessities not available through federal or state aid but also to receive a small stipend of tokens to receive an additional discount on goods through the goodwill of donors.

Another category of involvement is as a **sponsor**, which provides funding (ETH) particularly for running the contract. Examples of applicable sponsors: Cosmos, Coinbase, and any other company with substantial holdings of ETH interested in making a positive impact by donating funding to operation costs of this charity.

### Donors
Through a Chrome extension, donors give tax-deductible microdonations with every online shopping transaction (either percent-based or fixed, depending on preference). Donors have an incentive to participate not only for rewards but for the low effort-to-reward ratio. All it takes is turning on a Chrome extension and letting the money flow.

All this money is turned into tokens of a stable coin on the Ethereum blockchain, a token with a fixed exchange rate (i.e. no fluctuation with demand or supply). These tokens represent donations in a way that is transparent and traceable. These tokens can be distributed to recipients to redeem goods within a marketplace. The donor can track their tokens, see directly from the chain what their tokens provide to those in need, and provide on their taxes information to the government demonstrating their tax-deductible contribution to society. Who's gonna say that providing diapers, tampons, toothbrushes, and other necessary goods for basic health is a bad thing?

### Recipients
Anyone who qualifies for the Supplemental Nutrition Assistance Program (SNAP) is eligible to be a recipient. (If possible, TANF and WIC status will also be recognized in time.)

Recipients receive discounts for popular products via our discounted products received via bulksale. With a list of users and, more importantly, a list of needs, the charity purchases goods in bulk, making them cheaper for each individual. On top of that, the charity provides each users with tokens to spend on purchases, which the charity will recognize as "coupons" to receive discounts on items. These tokens are tied to the individual's identity and cannot be transferred. If an individual does not redeem these tokens within a certain period of time, they will be rescinded to avoid shortages.

## Business Model
Basic points:
- Donor incentives: Cheaper products due to bulk purchases leveraged by the company, and a tax deduction from their charitable donations.
- Recipient incentives: Cheaper and free products due to distribution from Frux fund, eventual goal is to be on the giving end.
- Sponsor incentives: Tax deductions and positive community image

## Components
The charity relies on the following components:
* Identity registration, both for donors and for recipients.
  + **Donors**: To ensure that donors can redeem tax deductions, the charity provides donors the opportunity to register as a donor. The charity will track donations on their behalf, giving a statement at the end of every quarter (or other reasonable time period). Donors would still be able to see their information at any point, as their activity are public (yet not publicly linked to their personal identity).
    + **Smart contract registry** (based off uPort) which tracks how much the donor has given and uses events to show where those particular funds have moved. Each donor will be anonymous by default but can reveal themselves publicly if they choose. The charity will generate a scheme to track public and private keys on the donors' behalf.
  + **Recipients**: To ensure that only those in need get discounts, the charity tracks the identities of all recipients of aid and discounts. Amazon uses an EBT number and card photo to verify eligibility for a discounted version of Amazon Prime -- the charity intends on doing similar verification for recipients. Eventually, the charity can transition to a direct evaluation of recipients by examining their tax information.
    + **Central registry** to keep track of identities associated with the charity's service. All users who attempt to register with the charity will be cross-referenced with government information to ensure that only the truly eligible receive benefits. Each recipient must have a Metamask account as well to receive tokens. Management and security of that information belongs to the user, not to the charity.
    + The charity expects recipients to reenroll every year (or other reasonable time period).
* Bulk orders, to provide discounts on popular necessities (diapers, tampons)
  + Purchasing in bulk makes the assumption that there are enough users to make the purchases cost effective. As these items are non-perishable, the charity may store them for an extended period of time as necessary if not enough users are purchasing products.
  + The charity will, until the machine learning aspect is built, buy goods at its own discretion.
* Holding funds, a central entity which receives funds from these microtransactions
  + This fund will be maintained by the entity. All funds will be represented as tokens for use by recipients, and all funds will be spent on purchasing goods at a discount due to wholesale purchase. The charity will most likely sell these goods slightly above cost (but still at a competitive discount) to cover overhead costs.
* Partnerships with other crypto companies who will sponsor any necessary exchanges from fiat to crypto, as well as cover transaction fees of generating or transacting tokens
  + These crypto companies by donating to the charity wil also receive tax deductions
* Multisig wallets for tokens to prevent single points of failures
  + All keys controlled by the charity
* Marketplace, to allow people to access our discounted goods
  + Limits on how much of a certain product can be bought by one individual over a certain period of time to avoid deficits of products
