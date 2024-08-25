/**
 * @typedef {"Babbage" | "Conway"} Era
 */

/**
 * @type {Era}
 */
export let ERA = "Babbage"

/**
 * @param {Era} e
 */
export function setEra(e) {
    ERA = e
}

/**
 * TODO: fetch from network
 * @param {"preview" | "preprod" | "mainnet"} networkName
 */
export async function syncEra(networkName) {
    if (networkName == "preview") {
        setEra("Conway")
    } else {
        setEra("Babbage")
    }
}
