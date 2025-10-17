export type CustomBackendAllowedFetchOptions = Omit<RequestInit, 'body' | 'integrity' | 'method'>;

/**
 * TLS (including mTLS) configuration for HTTPS connections.
 * Provide file system paths to PEM-encoded files. The SDK will read them internally.
 */
export type TlsConfig = {
  /**
   * Path to client certificate file (PEM). Required for mTLS when using cert/key pair.
   */
  certPath?: string;
  /**
   * Path to client private key file (PEM). Required for mTLS when using cert/key pair.
   */
  keyPath?: string;
  /**
   * Path(s) to Certificate Authority file(s) (PEM) to trust. Optional: if omitted, system CAs are used.
   */
  caPath?: string | string[];
  /**
   * If false, TLS cert validation is disabled (NOT recommended). Defaults to true.
   */
  rejectUnauthorized?: boolean;

  /**
   * Optional SNI servername override. By default the SDK uses backend.address when connecting via IP.
   * Override this if the server certificate's DNS name differs from backend.address.
   */
  servername?: string;
};

/**
 * Oracle SDK backend configuration type for using custom backends with the client.
 */
export type CustomBackendConfig = {
  /**
   * Domain name or IP address of the backend
   */
  address: string;

  /**
   * The port that the backend listens on for the API requests
   */
  port: number;

  /**
   * Whether the client should use HTTPS to connect to the backend
   */
  https: boolean;

  /**
   * Whether the client should resolve the backend (when it's a domain name).
   * If the domain name is resolved to more than one IP, then the requests will be
   * sent to all of the resolved servers, and the first response will be used.
   */
  resolve: boolean;

  /**
   * Optional API prefix to use before the API endpoints
   */
  apiPrefix?: string;

  /**
   * Optional custom Fetch API options
   */
  init?: CustomBackendAllowedFetchOptions;

  /**
   * Optional TLS/mTLS configuration (only used when https: true)
   */
  tls?: TlsConfig;
};

/**
 * Oracle SDK client configuration
 */
export type ClientConfig = {
  /**
   * Can be set to use self-hosted Oracle Notarization service for testing
   */
  notarizer?: CustomBackendConfig;

  /**
   * Can be set to use a self-hosted Oracle Notarization Verification service
   */
  verifier?: CustomBackendConfig;

  /**
   * Disables Oracle Client logging
   */
  quiet?: boolean;

  /**
   * Custom logging function. Will be used for logging by the client unless "quiet" flag is enabled
   */
  logger?: (...args: any[]) => void;
};
