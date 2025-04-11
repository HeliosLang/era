/**
 * @typedef {"Conway"} EraName
 */

/**
 * @type {EraName}
 */
export let ERA = "Conway"

/**
 * @param {EraName} e
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
