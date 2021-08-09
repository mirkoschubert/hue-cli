const hue = require('node-hue-api')

//import hue from 'node-hue-api'
//const { discovery } = hue


const discoverBridge = async () => {
  const res = await hue.discovery.nupnpSearch()

  return new Promise((resolve, reject) => {
    if (res.length === 0) {
      reject(new Error('No Bridges found.'))
    } else {
      resolve(res)
    }
  })
}

module.exports = {
  discoverBridge
}
