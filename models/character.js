'use strict';
module.exports = function(sequelize, DataTypes) {
  var Character = sequelize.define('Character', {
    name: DataTypes.STRING,
    layout: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Character;
};
