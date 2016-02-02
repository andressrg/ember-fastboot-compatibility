import Ember from 'ember';
import _ from 'ember-fastboot-compatibility/utils/lodash';


export default Ember.Route.extend({
  model() {
    const cities = ['Medellin', 'Bogota', 'Cali', 'Barranquilla'];

    return _.take(cities, 2);
  },
});
