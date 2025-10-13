import OracleClient from './client';

import {
  DEFAULT_FETCH_OPTIONS,
  DEFAULT_NOTARIZATION_BACKENDS,
  DEFAULT_NOTARIZATION_HEADERS,
  DEFAULT_NOTARIZATION_OPTIONS,
  DEFAULT_TIMEOUT_MS,
  DEFAULT_VERIFICATION_BACKEND,
} from './defaults';

import {
  AttestationError,
  AttestationIntegrityError,
  DebugAttestationError,
} from './errors';

import {
  AttestationRequest,
  AttestationResponse,
  ClientConfig,
  CustomBackendAllowedFetchOptions,
  CustomBackendConfig,
  DebugRequestResponse,
  EnclaveInfo,
  HeaderDict,
  InfoOptions,
  NitroDocument,
  NitroInfo,
  NitroReportExtras,
  NotarizationOptions,
  OracleData,
  PositionInfo,
  ProofPositionalInfo,
  SgxInfo,
  TlsConfig,
} from './types';

export {

  AttestationError, AttestationIntegrityError, AttestationRequest,
  AttestationResponse, ClientConfig, CustomBackendAllowedFetchOptions, CustomBackendConfig, DebugAttestationError, DebugRequestResponse, DEFAULT_FETCH_OPTIONS, DEFAULT_NOTARIZATION_BACKENDS, DEFAULT_NOTARIZATION_HEADERS, DEFAULT_NOTARIZATION_OPTIONS, DEFAULT_TIMEOUT_MS, DEFAULT_VERIFICATION_BACKEND, EnclaveInfo,
  HeaderDict,
  InfoOptions, NitroDocument, NitroInfo, NitroReportExtras, NotarizationOptions, OracleClient, OracleData,
  PositionInfo,
  ProofPositionalInfo,
  SgxInfo, TlsConfig
};
