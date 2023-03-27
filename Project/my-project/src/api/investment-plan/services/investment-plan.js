'use strict';

/**
 * investment-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::investment-plan.investment-plan');
