const passport = require('passport')
const { Router } = require('express')
const { callback, access, denied, logout } = require('./controller/google/contorller')
const { createUser, getUser, getUserById, updateUser, deleteUser } = require('./controller/users/controller')
const { createBook, getBook, getBookById, updateBook, deletBook } = require('./controller/books/controller')
const { middleware, isLoggedIn } = require('./middleware/controller')

const router = Router()
// TODO google
router.get('/', (req, res) => res.send('Example Home page!'))
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }), callback)
router.get('/good', isLoggedIn, access)
router.get('/failed', denied)
router.get('/logout', logout)

router.post('/users', middleware, createUser)
router.get('/users', middleware, getUser)
router.get('/users/:Id', middleware, getUserById)
router.put('/users/:Id', middleware, updateUser)
router.patch('/users/:Id', middleware, updateUser)
router.delete('/users/:Id', middleware, deleteUser)

router.post('/books', createBook)
router.get('/books', getBook)
router.get('/books/:Id', getBookById)
router.put('/books/:Id', updateBook)
router.patch('/books/:Id', updateBook)
router.delete('/books/:Id', deletBook)

module.exports = router
