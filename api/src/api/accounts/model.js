/*
Account is a Person: A person is either alive, dead, undead, or fictional.
http://schema.org/Person
*/

const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const sequence = require("mongoose-sequence")(mongoose)
const Schema = mongoose.Schema

// -----------------------------------------------------------------------------
// PRECONFIGURATION

const modelName = "Account"

const SALT_WORK_FACTOR = 8

// -----------------------------------------------------------------------------
// SCHEMA

const schema = new Schema(
  {
    // Internal
    name: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      lowercase: true
    },
    password: String,
    hash: String,
    salt: String,
    login: {
      type: Boolean,
      default: false
    },
    login_token: {
      type: String,
      default: ""
    },
    reset_token: {
      type: String,
      default: ""
    },
    // Profile
    username: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: "https://modusin.com"
    },
    bio: {
      type: String,
      default: ""
    },
    followings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Account"
      }
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Account"
      }
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
  },
  { timestamps: true }
)

// -----------------------------------------------------------------------------
// GENERATED FIELDS

// Auto increment accountId
schema.plugin(sequence, { id: "account_counter", inc_field: "id" })

// -----------------------------------------------------------------------------
// MIDDLEWARES
// - ROLES ASSIGNER
// - PASSWORD HASH + SALT GENERATOR

// BEWARE! We cannot define the same mongoose middlewares separately
schema.pre("save", function(next) {
  if (!this.isModified("password")) return next()
  else {
    // Generate salt with predefined factor
    // BEWARE! We cannot do these in synchronous way
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) return next(err)
      else {
        // Generate hash with current plain password and salt
        bcrypt.hash(this.password, salt, (err, hash) => {
          if (err) return next(err)
          else {
            // override the clear text password with the hashed one
            this.password = hash
            this.hash = hash
            this.salt = salt
            return next() // finally!
          }
        })
      }
    })
  }
})

// -----------------------------------------------------------------------------
// DATA POPULATION

schema.pre("find", function(next) {
  this.select({
    password: 0,
    hash: 0,
    salt: 0,
    login: 0,
    login_token: 0,
    reset_token: 0
  })
  next()
})

schema.pre("findOne", function(next) {
  this.select({
    hash: 0,
    salt: 0
  })
  next()
})

// Set updatedAt timestamp
schema.pre("update", function() {
  this.update(
    {},
    {
      $set: { updatedAt: new Date() }
    }
  )
})

// -----------------------------------------------------------------------------
// FINALLY REGISTER THE SCHEMA INTO MODEL

module.exports = mongoose.model(modelName, schema)
