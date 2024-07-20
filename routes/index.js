const router = require('express').Router();
const htmlRoutes = require('./html');
const apiRoutes = require('./api');

// Middleware routing
router.use('./api', apiRoutes);
router.use('/', htmlRoutes);

// Export router
module.exports = router;