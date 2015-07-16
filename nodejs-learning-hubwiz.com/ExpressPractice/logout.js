/**
 * Created by Evan on 2015/3/12.
 */
module.exports = function(app){
    app.get('/logout',function(req, res){
        req.session.user = null;
        req.session.error = null;
        res.redirect('index');
    });
};