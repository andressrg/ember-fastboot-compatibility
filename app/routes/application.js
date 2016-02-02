import Ember from 'ember';


/* globals _ */


export default Ember.Route.extend({
  model() {
    const cities = ['Medellin', 'Bogota', 'Cali', 'Barranquilla'];

    return _.take(cities, 2);
  },
});
