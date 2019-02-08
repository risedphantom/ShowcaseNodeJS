const os = require('os');
const pidusage = require('pidusage');
const router = require('express').Router({});


/*
 * Methods
 */
/**
 * Index page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @return {Promise<void>}
 */
const index = async (req, res) => {
  res.render('index', { title: 'Панов Антон, Менеджер продукта' });
};

/**
 * Uses page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @return {Promise<void>}
 */
const uses = async (req, res) => {
  res.render('what-i-use', { title: 'Что я использую' });
};

/**
 * About page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @return {Promise<void>}
 */
const about = async (req, res) => {
  const stats = await pidusage(process.pid);
  res.render('about', {
    title: 'Об этом сайте',
    os_type: os.type(),
    os_arch: os.arch(),
    os_platform: os.release(),
    os_usedmem: Math.round(stats.memory / 1048576),
    os_totalmem: Math.round(os.totalmem() / 1048576),
    os_cpu: os.cpus()[0].model,
    os_cpu_usage: Math.round(stats.cpu),
  });
};

/**
 * Resume page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @return {Promise<void>}
 */
const resume = async (req, res) => {
  res.render('resume', { title: 'Резюме' });
};

/**
 * Contacts page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @return {Promise<void>}
 */
const contacts = async (req, res) => {
  res.render('contacts', { title: 'Контакты' });
};

/**
 * Portfolio page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @return {Promise<void>}
 */
const portfolio = async (req, res) => {
  res.render('portfolio', { title: 'Портфолио' });
};

/*
 * Routes
 */
router.get('/', index);
router.get('/index', index);
router.get('/uses', uses);
router.get('/about', about);
router.get('/resume', resume);
router.get('/contacts', contacts);
router.get('/portfolio', portfolio);


module.exports = router;
