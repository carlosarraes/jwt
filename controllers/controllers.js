const login = async (req, res) => {
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
