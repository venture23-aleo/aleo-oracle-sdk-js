import type { CustomBackendConfig, HeaderDict, NotarizationOptions } from './types';

export const DEFAULT_TIMEOUT_MS = 5000;

export const DEFAULT_NOTARIZATION_HEADERS: HeaderDict = {};

export const DEFAULT_FETCH_OPTIONS: Pick<RequestInit, 'cache' | 'keepalive' | 'mode' | 'referrer' | 'redirect'> = Object.freeze({
  cache: 'no-store',
  mode: 'cors',
  redirect: 'follow',
  referrer: '',
  keepalive: false,
});

export const DEFAULT_NOTARIZATION_OPTIONS: NotarizationOptions = Object.freeze({
  dataShouldMatch: true,
  timeout: DEFAULT_TIMEOUT_MS,
  maxTimeDeviation: undefined,
});

export const DEFAULT_NOTARIZATION_BACKENDS: readonly CustomBackendConfig[] = Object.freeze([
  Object.freeze({
    address: 'sgx.aleooracle.xyz',
    port: 443,
    https: true,
    apiPrefix: '',
    resolve: true,
    init: DEFAULT_FETCH_OPTIONS,
  }),
  Object.freeze({
    address: 'nitro.aleooracle.xyz',
    port: 443,
    https: true,
    apiPrefix: '',
    resolve: true,
    init: DEFAULT_FETCH_OPTIONS,
  }),
]);

export const DEFAULT_VERIFICATION_BACKEND: CustomBackendConfig = Object.freeze({
  address: 'verifier.aleooracle.xyz',
  port: 443,
  https: true,
  apiPrefix: '',
  resolve: true,
  init: DEFAULT_FETCH_OPTIONS,
});

export const MAX_BODY_SIZE = 5 * 1024 * 1024; // 5 MB

