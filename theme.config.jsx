import React from 'react'

export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1.1rem' }}>
      <span style={{ color: '#1E4D2B' }}>AgriResolve</span>
      <span style={{ color: '#666', fontWeight: 400, fontSize: '0.85rem' }}>Protocol Docs</span>
    </div>
  ),
  project: {
    link: 'https://github.com/AgriResolve/agriresolve-app',
  },
  docsRepositoryBase: 'https://github.com/AgriResolve/agriresolve-docs/blob/main',
  footer: {
    text: (
      <span>
        AgriResolve Protocol Documentation © {new Date().getFullYear()}. Built on Stellar Soroban.
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – AgriResolve Documentation',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AgriResolve Documentation" />
      <meta
        name="description"
        content="Decentralized agricultural trade escrow and automated dispute arbitration protocol on Stellar Soroban."
      />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌾</text></svg>" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
}
