const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new CustomAPIError('Please provide a username and password', 400)
  }
  res.send('Fake login')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({ msg: `Hello John`, secret: `${luckyNumber} your number` })
}

module.exports = {
  login,
  dashboard
}
