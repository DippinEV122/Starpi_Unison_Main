'use strict';

/**
 * term-insurance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::term-insurance.term-insurance');
