const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
  return {
    data: [
      {
        id: 1,
        username: 'aaa',
        password: 'aaa'
      },
      {
        id: 2,
        username: 'bbb',
        password: 'bbb'
      },
      {
        id: 3,
        username: 'ccc',
        password: 'ccc'
      }
    ]
  }
})
