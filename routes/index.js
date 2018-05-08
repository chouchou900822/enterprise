const router = require('koa-router')()
const home = require('../controllers/home');

router.prefix('/api')
/**
 * 测试路由
 */
router.get('/test', home.test);

module.exports = router;
