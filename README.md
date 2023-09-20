# whale.finance - ZenCon 2023

## Decentralized Asset Management

whale.finance basically implements Decentralized Asset Management with ERC 6551. We want to give the opportunity to investors sees their money been managed with full security and auditability.

## The Idea

This project uses ERC 6551 to allow managers to hold assets from investors. In this way, we can basically make a descentralized asset management using EVM. The platform is designed for the two publics: The investors, who will be able to invest their tokens in really great funds around the work in a safe way, and the managers, who will be able to manage and hold investor tokens and can have a profit to themselves.

- Overview of the project with a focus on the decentralization aspect and the role of ERC 6551.
- Importance and benefits of decentralized asset management.
- Insights on security and auditability features of the platform.

### Traditional

![Project Logo](./frontend/src/assets/traditional_am.png)

- **Distributor & Fund:** The distributor acts as a bridge between the fund and potential investors, marketing and selling the fund's financial products. Through collaborations and agreements, distributors help expand the fund's reach and increase its assets under management, enhancing the fund's visibility and accessibility.

- **Exchange & Fund:** Exchanges serve as vital platforms where funds can actively participate in trading activities, acquiring or disposing of assets as per their investment strategies. They facilitate a transparent environment where funds can execute trades based on real-time market conditions, thus helping in the price discovery process and achieving investment objectives.

- **Custodian & Fund:** Custodians play a pivotal role in safeguarding the assets of the fund, ensuring that they are held securely and are not susceptible to theft or loss. Apart from asset safekeeping, they also assist in transaction settlements and administrative services, thus ensuring smooth operational flow and compliance with regulatory requirements.

![Project Logo](./frontend/src/assets/descentralized_am.png)

## Features
### Security
- Explanation of the security protocols in place to safeguard investments.
- Details on how ERC 6551 contributes to the secure environment.

### Auditability
- Information on the transparency and auditability aspects of the project.
- How it promotes trust and reliability in asset management.

### User Roles
#### Investors
- Features and benefits available for investors.
- How they can invest in global funds securely.

#### Managers
- Functionalities accessible to managers.
- How they can manage and hold investor tokens profitably.

## How it Works
- A concise overview of the technical workings of the platform.
- The role of ERC 6551 and EVM in facilitating decentralized asset management.

### Technology

- Frontend: We used typescrit + tailwind css + vite.js to deploy more fast and be adjusted to our web3 project, that does not have backend
- Contracts: We use ERC 6551 to allow managers to hold assets from investor, and control them.

### Folder Structure

├── README.md
│
├── frontend/
│ └── src/
│ ├── main.py
│ └── utilities.py
│
├── whale-finance/
└── src/
└── Counter.sol
└── ERC6551Registry.sol
└── MockERC20.sol
└── QuotaBeacon.sol
└── QuotaToken.sol
└── SafeAccount.sol
└── WhaleFinance.sol




## Usage
### Prerequisites
- List of prerequisites necessary to get started with the project.

### Installation
- Step-by-step installation guide or links to relevant documentation.

### Usage
- Basic usage guidelines with examples, if possible.

