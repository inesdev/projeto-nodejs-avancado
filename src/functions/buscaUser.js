const fetch = require('node-fetch')

module.exports = async function buscaUser(user){
const response = await fetch(`https://api.github.com/users/${user}`)
    const json = await response.json()

    return json
}