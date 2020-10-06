const config = require('config')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})

passport.use(new GoogleStrategy({
  clientID: config.get('passport.clientid'),
  clientSecret: config.get('passport.clientsecret'),
  callbackURL: config.get('passport.callbackurl')
},
function (accessToken, refreshToken, profile, done) {
//   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     return cb(err, user)
//   })
  return done(null, profile)
}
))
