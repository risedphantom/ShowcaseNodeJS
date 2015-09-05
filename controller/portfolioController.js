var os = require('os');
var core = require('../core');
var config = require('../config');

// Greeting
exports.greeting = function(req, res) {
    // Answers
    var friendAns = config.get('friendAns');
    var enemyAns = config.get('enemyAns');
    var anonAns = config.get('anonAns');
    var soonAns = config.get('soonAns');

    var response = '';
    var resId = core.randomInt(0, 4);
    switch (req.query.type) {
        case 'friend':
            response = friendAns[resId];
            break
        case 'enemy':
            response = enemyAns[resId];
            break
        case 'anonymous':
            response = anonAns[resId];
            break
        case 'soon':
            response = soonAns[resId];
            break
        default:
            response = 'Всего хорошего!'
    };
    res.send(response);
};

// Index page
exports.index = function(req, res) {
    res.render('Index', { title: 'Панов Антон, C# разработчик' });
};

// Resume page
exports.resume = function(req, res) {
    res.render('Resume', { title: 'Резюме' });
};

// Portfolio page
exports.portfolio = function(req, res) {
    res.render('Portfolio', { title: 'Портфолио' });
};

// WhatIUse page
exports.uses = function(req, res) {
    res.render('WhatIUse', { title: 'Что я использую' });
};

// About page
exports.about = function(req, res) {
    res.render('About', 
        { 
            title: 'Об этом сайте',
            os_type: os.type(),
            os_arch: os.arch(),
            os_platform: os.release(),
            os_freemem: Math.round(os.freemem()/1048576),
            os_totalmem: Math.round(os.totalmem()/1048576),
            os_cpu: os.cpus()[0].model
        });
};

// Contacts page
exports.contacts = function(req, res) {
    res.render('Contacts', { title: 'Контакты' });
};

// Error page
exports.error = function(req, res, next) {
    res.render('Error', { title: 'Страница не найдена' });
};