const express = require('express');
const router = express.Router();

// route
router.get('/create-or-update-user', (req, res) => {
    res.json({
        data: 'hey you hit create-or-updata-user API endpoint',
    });
});

module.exports = router;