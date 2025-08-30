const querystring = require('querystring');
const index=(req, res) => {
    const query=querystring.stringify(req.query);
    fetch(`https://fakestoreapi.com/users?`+query)
    .then(response => response.json())
    .then(usuarios => {
        res.render(`usuarios`, {usuarios})
    });
    fetch('https://fakestoreapi.com/users?'+query)
  .then(response => response.json())
  .then(data => console.log(data));
}

module.exports={
    index
}