var RSVP = require('rsvp');
var Sequelize = require('sequelize'),
  sequelize = new Sequelize('patron', 'patron', 'patron', {
    logging: function () {}
  });

var Work = sequelize.define('work', {
  title: Sequelize.STRING,
  inventory_id: Sequelize.STRING,
  started: Sequelize.DATE,
  completed: Sequelize.DATE,
  delivered: Sequelize.DATE,
  sold: Sequelize.DATE,
  returned: Sequelize.DATE,
  price: Sequelize.FLOAT(11, 9),
  size: Sequelize.STRING,
  framed: Sequelize.BOOLEAN,
  location: Sequelize.STRING,
  notes: Sequelize.TEXT,
  description: Sequelize.TEXT
});

var Image = sequelize.define('image', {
  path: Sequelize.STRING
});

Image.belongsTo(Work);
Work.hasMany(Image);

exports.Image = Image;
exports.Work = Work;

var start = function () {
  var promise = new RSVP.Promise(function (resolve, reject) {
    return Work.sync()
      .then(function () {
        console.log('got this far 1');
        resolve(Image.sync());
      })
      .catch(function (error) {
        console.log('got this far 4');
        // console.log('error syncing with db through sequelize', error);
        reject(error);
      });
  });
  return promise;
};
start();
exports.start = start;

