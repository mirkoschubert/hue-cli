import { Command } from 'commander'
import ConfigStore from 'configstore'
import fse from 'fs-extra'
import ui from 'yacliui'

import register from './lib/register.cjs'
import { discoverBridge } from './lib/register-esm.js'

const pkg = JSON.parse(fse.readFileSync('./package.json', 'utf8'))

const config = new ConfigStore(pkg.name, {}, { globalConfigPath: true })
const app = new Command()

app
  .version(pkg.version, '-V, --version')
  .description('Command Line Interface for controlling Philips Hue')

app
  .command('register')
  .description('Registers this app to a Hue Bridge')
  .action(async () => {
    const res = await register.discoverBridge()
    console.log(res)
    if (res) {
      ui.confirm('Use the bridge at ' + res[0].ipaddress + '?', true)
    }
  })

app
  .command('register-esm')
  .description('Register this app to Hue Bridge (ESM)')
  .action(async () => {
    const res = await discoverBridge()
    console.log(res)
    if (res) {
      ui.confirm('Use the bridge at ' + res[0].ipaddress + '?', true)
    }
  })

app.parse(process.argv)
