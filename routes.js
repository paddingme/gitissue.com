const routes = require('next-routes')

module.exports = routes()
  .add('index', '/', 'issues') // 热门 issue 列表
  .add('hot', '/hot/:page', 'issues') // 热门 issue 列表
  .add('read', '/read/:page', 'issues')  // TODO 未读 issue 列表，需要登录权限
  .add('favorites', '/favorites/:page', 'issues') // TODO 我收藏的 issue 列表，需要登录权限
  .add('labels', '/labels/:name/:page', 'issues') // 标签
  .add('repo', '/repos/:name', 'repo') // 某个仓库
  .add('followers') // TODO 我关注的 repo 列表，需要登录权限
  .add('search') // TODO
  .add('my') // TODO 我个人的 repo 仓库统计信息, 需要登录权限
  .add('issue', '/issues/:id/', 'issue') // 某个 issue
  .add('about', '/about', 'issue')  // 关于信息页面
  .add('version', '/version', 'issue')  // 版本信息页面
  .add('help', '/help', 'issue')  // 帮助与反馈
  .add('login') // 登录页面
  .add('blog', '/blog', 'repo')  // GitIssue 官方博客
  .add('info') // GitIssue 官方统计信息
  .add('careers') // 招贤纳士
