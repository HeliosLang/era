/**
 * @typedef {"Conway"} Era
 */

/**
 * @type {Era}
 */
export let ERA = "Conway"

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
    setEra("Conway")
}
