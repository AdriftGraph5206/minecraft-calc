let block = 4 //aukstis
let leng = 20 // ilgis

function sienos(block, leng) {
return block * leng - 4 * block
}
let kamp = 4 * block

let siena = sienos(block, leng)

console.log("Sienom bloku: " + siena)
console.log("Kampams bloku: " + kamp)
