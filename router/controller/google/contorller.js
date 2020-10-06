const callback = (req, res) => {
  try {
    res.redirect('/good')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const access = (req, res) => {
  try {
    res.send(`Welcome mr ${req.user.displayName}!`)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const denied = (req, res) => {
  try {
    res.send('You Failed to log in!')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const logout = (req, res) => {
  try {
    req.session = null
    req.logout()
    res.redirect('/')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

module.exports = {
  callback,
  access,
  denied,
  logout
}
