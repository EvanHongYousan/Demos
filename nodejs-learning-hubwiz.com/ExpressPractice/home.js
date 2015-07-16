/**
 * Created by Evan on 2015/3/12.
 */
module.exports = function(app){
    app.get('/home',function(req, res){
        if(req.session.user){
            res.render('home');
        }else{
            req.session.error = "请先登录";
            res.redirect('login');
        }
    });
};