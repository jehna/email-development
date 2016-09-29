var React = require('react');
var ReactDOMServer = require('react-dom/server');

module.exports = function render() {
  var element = React.createElement('div', null, 'Hello World!');
  return ReactDOMServer.renderToString(element);
}
