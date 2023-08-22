const dashboardView = (req, res, next) => {
    res.render('dashboard', {
        title: 'BBB',
        header: 'Protected Page',
        user: req.user
    });
}

module.exports = {
    dashboardView
};