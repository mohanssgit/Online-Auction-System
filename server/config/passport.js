const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/user'); // Import your user model

// Configure Passport.js
passport.use(new LocalStrategy(
  { usernameField: 'email' }, // You can use 'username' if needed
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
