const Configstore = require('configstore')

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
const config = new Configstore(packageJson.name, {foo: 'bar'});



module.exports = {
  config
}