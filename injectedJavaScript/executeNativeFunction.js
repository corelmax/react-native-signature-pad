var content = `
  function executeNativeFunction(fnName, args) {
    window.postMessage('&executeFunction<-' + fnName + '&' + '&arguments<-' + JSON.stringify(args) + '&');
  }
`;

export default content;
