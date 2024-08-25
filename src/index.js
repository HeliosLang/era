/**
 * @typedef {"Babbage" | "Conway"} Era
 */

/**
 * TODO: fetch from network
 * @param {"preview" | "preprod" | "mainnet"} networkName
 * @returns {Era}
 */
export function getEra(networkName) {
    if (networkName == "preview") {
        return "Conway"
    } else {
        return "Babbage"
    }
}
