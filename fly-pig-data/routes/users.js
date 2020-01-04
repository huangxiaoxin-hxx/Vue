const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 获取所有
router.get('/all', async(ctx, next) => {
  await userService.getAllUsers()
  .then((res) => {
    console.log('打印结果' + JSON.stringify(res))
    ctx.body = res
  })
})

// 登录
router.post('/userLogin', async(ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd

  await userService.userLogin(_username, _userpwd)
  .then((res) => {
    let r = '';
    console.log(res)
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username,
        grade: res[0].grade,
        experience: res[0].experience
      }
      console.log(result)
      ctx.body = {
        code: '200',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error';
      ctx.body = {
        code: '404',
        data: r,
        mess: '账号或密码错误'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})

// 获取所有票
router.post('/findAllTicket', async(ctx, next) => {
  var _username = ctx.request.body.username
  console.log('username',_username)

  await userService.findAllTicket(_username)
  .then((res) => {
    let r = '';
    console.log(res)
    if (res.length) {
      r = 'ok';
      ctx.body = {
        code: '200',
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error';
      ctx.body = {
        code: '404',
        data: r,
        mess: '查找失败'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})

// 根据id删除票
router.post('/deleteTicketById', async(ctx, next) => {
  var _username = ctx.request.body.username
  var _id = ctx.request.body.id
  console.log('username',_username)

  await userService.deleteTicketById(_username,_id)
  .then((res) => {
    let r = ''
    console.log(res)
    if(res.affectedRows !== 0) {
      r = 'ok'
      ctx.body = {
        code: '200',
        data: r,
        mess: '删除成功'
      }
    } else {
      r = 'error';
      ctx.body = {
        code: '404',
        data: r,
        mess: '删除失败'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})



module.exports = router
