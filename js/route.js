module.exports = function(app){

    app.get('/clientes', function(req, res){
        res.render('clientes', {
            title: 'Clientes'
        });
    });

    //other routes..
}