var _=require("underscore");
module.exports = function (app) {

    //登录中间件
    app.use(function (req, res, next) {
        app.locals.middle = {
            username: req.session.username,
            language: req.cookies.lng,
            unRead:5,
            disSidCust:
            {
                "username": "SH_frank008", //用户号
                "firstName": "张",
                "lastName": "三",
                "mobileNumber": "135XXXX",
                "emailAddress": "123456@qq.com",
                "diffDate": "10分30秒",  //记录上次登录
                "curAccount": "300.00",   //中心账户
                "securityState": "高", //很高 , 高 ，一般 ，低 ，很低 ，危险
                "percentage": 100,    // 100  , 80 , 60  , 40  , 20 ，0
                "isBindName": true, //是否绑定真实名
                "isBindBank": true,//是否绑定银行卡
                "isBindEmail": true,  // 是否绑定email
                "isBindPhone": true, // 是否绑定手机
                "isBindPayPwd": true, // 是否绑定支付密码
                "tips":"忙碌了一整天，晚餐吃顿好的吧。",
                "hello":"晚上好",
                "username":"徐 先生"

            }
        }
        return next()
    })

    app.get('/', function (req, res) {
        res.render('index', app.locals.middle);
    });

    app.get('/sports', function (req, res) {
        res.render('sports', app.locals.middle);
    });

    app.get('/lottery', function (req, res) {
        res.render('lottery', app.locals.middle);
    });

    app.get('/slot', function (req, res) {
        res.render('slot', _.extend({},app.locals.middle,{
            game:[
                1,2,3,4,5,6,7,8,9,10,11,12
            ],
            top:[1,2,3,4,5,6]
        }));
    });

    app.get('/casino', function (req, res) {
        res.render('casino', app.locals.middle);
    });

    app.get('/promotion', function (req, res) {
        res.render('promotion', app.locals.middle);
    });

    app.get('/about', function (req, res) {
        res.render('about', app.locals.middle);
    });

    app.get('/contact', function (req, res) {
        res.render('contact', app.locals.middle);
    });

    app.get('/help', function (req, res) {
        res.render('help', app.locals.middle);
    });

    app.get('/register_success', function (req, res) {
        res.render('reg_ok', app.locals.middle)
    });

    app.get('/pintai', function (req, res) {
        res.render('pintai')
    });

    app.get('/pt', function (req, res) {
        res.render('game/pt_page')
    });

    app.get('/game', function (req, res) {
        res.render('game/game')
    });

    app.get('/integration/integrationRedirect.html', function (req, res) {
        res.render('game/integrationRedirect')
    });

    /*app.get('/integration/integrationRedirect.html', function (req, res) {
        console.log(111111)
        res.sendfile('./views/game/integrationRedirect.html')
    });*/


    app.get('/error', function (req, res) {
        res.render('error')
    });

    app.get('/signout', function (req, res) {
        req.session.username = '';
        res.redirect('/');
    });
};

