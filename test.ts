import { CustomBackendConfig, OracleClient } from './dist/index.js'

(async () => {

    // const notarizer = {
    //     address: '130.33.96.108',
    //     port: 8000,
    //     https: false,
    //     resolve: false,
    // }

    const notarizer: CustomBackendConfig = {
        address: '20.83.185.145',
        port: 8094,
        https: true,
        resolve: false,
        tls: {
            certPath: 'client.crt',
            keyPath: 'client.key',
            caPath: 'ca.crt',
            rejectUnauthorized: true,
            servername: 'nginx-mtls-proxy',
        },
    }

    const verifier = {
        address: '20.127.234.181',
        port: 8080,
        https: false,
        resolve: false,
    }

    const client = new OracleClient({
        notarizer: notarizer,
        verifier: verifier,
        quiet: false
    })

    const attestationRequest = {
        "url": "price_feed: btc",
        "requestMethod": "GET" as const,
        "selector": "weightedAvgPrice",
        "responseFormat": "json" as const,
        "encodingOptions": {
            "value": "float" as const,
            "precision": 6
        },
        "debugRequest": true
    }

    // const attestationRequest = {
    //     "url": "google.com",
    //     "requestMethod": "GET",
    //     "selector": "/html/head/title",
    //     "responseFormat": "html",
    //     "htmlResultType": "value",
    //     "requestHeaders": {
    //         "Accept": "*/*",
    //         "DNT": "1",
    //         "Upgrade-Insecure-Requests": "1",
    //         "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
    //     },
    //     "encodingOptions": {
    //         "value": "string",
    //         "precision": 0
    //     },
    //     debugRequest: true

    // } as const

    // const attestationResponse = await client.notarize(attestationRequest)
    // const attestationResponse = await client.getAttestedRandom(20000n)
    const attestationResponse = await client.testSelector(attestationRequest, 10000)

    console.log(attestationResponse)
})()