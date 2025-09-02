import { writeFileSync, readFileSync } from 'fs'

const users = [{ name: 'Adam Ondra', email: 'adam.ondra@limb,ing' }]
const usersJson = JSON.stringify(users)
writeFileSync('backend/users.json', usersJson)
const readUsersJson = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJson)
console.log(readUsers)
