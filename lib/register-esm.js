// import * as hue from 'node-hue-api'
import { discovery } from 'node-hue-api'

export const discoverBridge = async () => {
  //const res = await hue.v3.discovery.nupnpSearch()
  const res = await discovery.nupnpSearch()

  return new Promise((resolve, reject) => {
    if (res.length === 0) {
      reject(new Error('No Bridges found.'))
    } else {
      resolve(res)
    }
  })
}
