'use strict'
/**
babel.config.js with useful plugins. 
*/

  module.exports = function (api) {
    api.cache(true);
  
    // const presets = [ ... ];
    const plugins = ['macros'];
  
    return {
      plugins
    };
  }
