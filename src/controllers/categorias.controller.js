const categorias =[
    {id: 1, nombre : 'Categoria 1'},
    {id: 2, nombre : 'Categoria 2'},
    {id: 3, nombre : 'Categoria 3'}
]
const index = (req,res)=>{
    res.render('categorias/index',{categorias});
}

const show = (req, res) => {
    const {id}= req.params;
    const categoria = categorias.find(categorias=> categorias.id === parseInt(id));
    if (!categoria) {
        return res.status(404).send('Categoría no encontrada');
    }else{
        res.render('categorias/show', {categorias})
    }
}
module.exports = {
    index,
    show,
}