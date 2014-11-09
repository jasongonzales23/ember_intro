App = Em.Application.create({
  rootElement: $('#app')
});

App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
  this.resource('categories', function() {
    this.resource('category', {path: ':_id'});
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('category');
  }
});

App.CategoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params._id)
  }
});
