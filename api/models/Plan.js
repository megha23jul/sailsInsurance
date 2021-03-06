/**
 * Plan.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id: {
  		type: 'string',
		primaryKey: true,
  	},
	type: {
	    type: 'string',
	},
	medicalConditions: {
		type: 'boolean',
	},
	duration: {
		type: 'integer',
	},
	name: {
		type: 'string',
		unique : true
	},
	price: {
		type: 'integer',
	},
	cover: {
		type: 'string',
	}
  }
};

