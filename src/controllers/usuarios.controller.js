const querystring = require('querystring');
const index=(req, res) => {
    const query=querystring.stringify(req.query);
    fetch(`https://fakestoreapi.com/users?`+query)
    .then(response => response.json())
    .then(usuarios => {
        res.render(`usuarios`, {usuarios})
    });
}

module.exports={
    index
}