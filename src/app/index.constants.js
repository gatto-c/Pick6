/* global malarkey:false, moment:false, _:false */
(function() {
  'use strict';


  angular
    .module('pick6')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('_', _)
    .constant('ergastAPIAddress', 'http://ergast.com/api/f1');
})();
