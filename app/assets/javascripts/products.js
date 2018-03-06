$.ajax({
  url: 'http://json-server.devpointlabs.com/api/v1/products', 
  type: 'GET',
  dataType: 'JSON',
  data: {key: value}
}).done(function(data) {
  products=data
  console.log(data);
}).fail(function(data) {
  // a server error happened. Display something useful to the user!
  console.log(data);
});