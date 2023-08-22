const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// // General

// app.get('/', site.index);

// // User /user?id=:id&op=:op

// app.get('/users', user.list);
// app.all('/user/:id/:op?', user.load);
// app.get('/user/:id', user.view);
// app.get('/user/:id/view', user.view);
// app.get('/user/:id/edit', user.edit);
// app.put('/user/:id/edit', user.update);

// // Posts

// app.get('/posts', post.list);


module.exports = router;
