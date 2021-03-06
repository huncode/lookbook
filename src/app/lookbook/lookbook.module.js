import LookbookFactory from './lookbook.factory';
import Lookbook from './lookbook.directive';
import LowestFilter from '../components/lowest.filter';
import ScreenHeight from '../components/screenHeight.directive';
import ResourceLoad from '../components/slLoad.directive';

angular.module('lookbook', ['ngResource'])
  .factory('Lookbook', ['$http', ($http) => new LookbookFactory($http)])
  .directive('screenHeight', () => new ScreenHeight())
  .directive('slLoad', () => new ResourceLoad())
  .directive('lookbook', Lookbook)
  .filter('lowest', LowestFilter);
