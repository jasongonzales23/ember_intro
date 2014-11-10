App = Em.Application.create({
  rootElement: $('#app')
});

App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
  this.resource('category', {path: ':id'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('category');
  }
});

App.CategoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.id)
  }
});
