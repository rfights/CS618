import { createUser, loginUser, getUserInfoById } from '../services/users.js'

export function userRoutes(app) {
  app.post('/api/v1/user/signup', async (req, res) => {
    try {
      const user = await createUser(req.body)
      return res.status(201).json({ username: user.username })
    } catch (err) {
      return res.status(400).json({
        error: 'Failed to create the user, does the username already exist?',
      })
    }
  })
  app.get('/api/v1/users/:id', async (req, res) => {
    try {
      const userInfo = await getUserInfoById(req.params.id)
      return res.status(200).json(userInfo)
    } catch (err) {
      return res.status(404).json({ error: 'User not found' })
    }
  })

  app.post('/api/v1/user/login', async (req, res) => {
    try {
      const token = await loginUser(req.body)
      return res.status(200).send({ token })
    } catch (err) {
      return res.status(400).send({
        error: 'login failed, did you enter the correct username/password?',
      })
    }
  })
}
