const middleware = {}

middleware['test'] = require('..\\src\\middleware\\test.js');
middleware['test'] = middleware['test'].default || middleware['test']

export default middleware
