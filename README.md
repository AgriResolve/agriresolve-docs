# AgriResolve Protocol Documentation (`agriresolve-docs`)

## 🌍 Live Ecosystem & Resources
* **Web App:** [https://agrires.vercel.app/](https://agrires.vercel.app/)
* **Documentation Site:** [https://agriresolve.github.io/agriresolve-docs/](https://agriresolve.github.io/agriresolve-docs/)
* **API / Indexer:** [https://agriresolve-app.onrender.com/health](https://agriresolve-app.onrender.com/health)
* **Demo Video:** [Watch on Google Drive](https://drive.google.com/file/d/19gYJMcZit6NssLxwmhBllQecmnPoG_F8/view)

Standalone technical documentation and protocol reference for **AgriResolve** on Stellar Soroban. Built with Nextra and Next.js for deployment to Vercel.

---

## Deployed Stellar Testnet Contracts

| Contract Name | Contract Identifier | Explorer |
|:---|:---|:---|
| `agriresolve-registry` | `CC3OJZP4DCYOOTRJTT66UHMAGR2677JNDBNFQYMREQA2ONDWNRAO75J6` | [View on Stellar.Expert](https://stellar.expert/explorer/testnet/contract/CC3OJZP4DCYOOTRJTT66UHMAGR2677JNDBNFQYMREQA2ONDWNRAO75J6) |
| `agriresolve-escrow` | `CCPZFPNUQGNT5O6H3VWT2H23CLXF2POF5QYDAD4HPOB2RRKSHO63OIXC` | [View on Stellar.Expert](https://stellar.expert/explorer/testnet/contract/CCPZFPNUQGNT5O6H3VWT2H23CLXF2POF5QYDAD4HPOB2RRKSHO63OIXC) |
| `agriresolve-dispute` | `CCBQBMQFQPRRMOQLPNYSIBGTL7AOXXQAAIADXE2YYTZHSUSDS6Z4ES5N` | [View on Stellar.Expert](https://stellar.expert/explorer/testnet/contract/CCBQBMQFQPRRMOQLPNYSIBGTL7AOXXQAAIADXE2YYTZHSUSDS6Z4ES5N) |
| `Testnet USDC` | `CCQGOTGN6HTQE74XYERYSYVU57T5NPYWV5DLCROMB56OXTV6RSO6KIGK` | [View on Stellar.Expert](https://stellar.expert/explorer/testnet/contract/CCQGOTGN6HTQE74XYERYSYVU57T5NPYWV5DLCROMB56OXTV6RSO6KIGK) |

Administrative Public Key: `GCBOKYT7TAARXDILFZ43QX2WWIRHAWA2S3V3ZP7EWN4KWTDIBS3NQS4Y`

---

## Repository Structure

```text
agriresolve-docs/
├── pages/
│   ├── _meta.json
│   ├── index.mdx                       # 1. Introduction & Problem Scale
│   ├── protocol-mechanics.mdx          # 2. Protocol Mechanics & Worked Settlement Math
│   ├── smart-contract-reference.mdx    # 3. Smart Contract Reference
│   ├── user-guides.mdx                 # 4. End-User Guides (Farmers & Buyers)
│   ├── developer-guide.mdx             # 5. Developer Guide, SDK & API Reference
│   └── contributing.mdx                # 6. Contributing Guide
├── theme.config.jsx
├── next.config.js
├── package.json
└── README.md
```

---

## Local Development

### Prerequisites
- Node.js >= 20.0.0
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```

---

## Deployment to Vercel

This repository deploys directly to Vercel with zero extra configuration:

1. Import the repository in the Vercel Dashboard.
2. Framework Preset: **Next.js**.
3. Root Directory: `./` (or `agriresolve-docs` if monorepo).
4. Build Command: `next build` (default).
5. Output Directory: `.next` (default).
6. Click **Deploy**.

---

## Maintainers

| Name | Role | GitHub | Telegram | Email |
|:---|:---|:---|:---|:---|
| **Hassan Korey** | Protocol Architect & Lead Developer | [@HassanKorey](https://github.com/HassanKorey) | [@HassanKorey](https://t.me/HassanKorey) | `edunhassan1006@gmail.com` |

---

## License

This documentation is licensed under the [MIT License](https://opensource.org/licenses/MIT).
