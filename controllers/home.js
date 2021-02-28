/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  console.log(req, res);
  res.render('home', {
    title: 'Home'
  });
};
