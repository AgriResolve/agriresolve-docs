# AgriResolve Protocol Documentation (`agriresolve-docs`)

## 🌍 Live Ecosystem & Resources
* **Web App:** [https://agrires.vercel.app/](https://agrires.vercel.app/)
* **Documentation Site:** [https://agriresolve.github.io/agriresolve-docs/](https://agriresolve.github.io/agriresolve-docs/)
* **API / Indexer:** [https://agriresolve-app.onrender.com/health](https://agriresolve-app.onrender.com/health)
* **Demo Video:** [Watch on Google Drive](https://drive.google.com/file/d/19gYJMcZit6NssLxwmhBllQecmnPoG_F8/view)

Standalone technical documentation and protocol reference for **AgriResolve** on Stellar Soroban. Built with Nextra and Next.js for deployment to Vercel.

---

## Deployed Stellar Testnet Contracts

| Contract Name | Role & Responsibility | Status |
|:---|:---|:---|
| `agriresolve-registry` | Participant identity, commodity quality thresholds, and token whitelist | Active (Testnet) |
| `agriresolve-escrow` | SEP-41 collateral custody, delivery confirmations, and split disbursements | Active (Testnet) |
| `agriresolve-dispute` | Evidence dossiers, arbitration status, and cross-contract resolution | Active (Testnet) |
| `Testnet USDC` | Settlement asset token contract | Active (Testnet) |

> Contract addresses are configured securely via environment variables.

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
