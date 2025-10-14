# Aleo Web Oracle SDK

[![npm version](https://badge.fury.io/js/@venture23-aleo%2Faleo-oracle-sdk.svg)](https://badge.fury.io/js/@venture23-aleo%2Faleo-oracle-sdk)

This repository contains a Node.js client SDK for Aleo Oracle.

For documentation, see [aleo-oracle-docs.surge.sh](https://aleo-oracle-docs.surge.sh).

**Disclaimer: Experimental software**

This repository is a part of an experimental project and should be treated as such. It has not undergone any formal security audits yet.
While the software contained herein may not be necessarily dangerous to your PC, it may produce unreliable results or unexpected behavior.
Users are advised to exercise caution when using this software and to not deploy it in production environments without thorough testing and review.
The maintainers of this repository cannot be held liable for any damages or security breaches that may occur as a result of its use.
By accessing and using the contents of this repository, you agree to do so at your own risk.

## mTLS (client TLS certificate)

You can connect to self-hosted notarizer/verifier that require mutual TLS (mTLS). Provide file paths for your client certificate, key, and CA in the backend config under `tls`. The SDK will read the files internally.

Example (Node.js):

```ts
import { OracleClient } from '@venture23-aleo/aleo-oracle-sdk';

const notarizer = {
  address: 'my.notarizer.local',
  port: 443,
  https: true,
  resolve: false,
  apiPrefix: '',
  // Default fetch options can be overridden via init
  init: { cache: 'no-store', mode: 'cors', redirect: 'follow', referrer: '', keepalive: false },
  tls: {
    // For PEM cert/key (SDK reads these files internally)
    certPath: '/path/to/client.crt',
    keyPath: '/path/to/client.key',
    // Trust this CA for the server cert
    caPath: '/path/to/ca.crt',
    // Optional SNI override if server cert uses a different DNS name
    // servername: 'my.notarizer.local',
    // Optional: disable only if you know what you are doing
    rejectUnauthorized: true,
  },
} as const;

const verifier = {
  address: 'my.verifier.local',
  port: 443,
  https: true,
  resolve: false,
  tls: {
    certPath: '/path/to/client.crt',
    keyPath: '/path/to/client.key',
    caPath: '/path/to/ca.crt',
  },
} as const;

const client = new OracleClient({ notarizer, verifier });
```

Notes:

- Supply `certPath` and `keyPath` for PEM files (and optional `caPath`).
- PKCS#12 archives are not supported; extract PEM cert/key if needed before using the SDK.
- By default, `rejectUnauthorized` is true. Set to false only for local testing.
