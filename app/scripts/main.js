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

App.CategoryController = Ember.ObjectController.extend({
  actions: {
    createNewItem: function() {
      var newItem = this.get('newItem');
      var category_id = this.model.id

      var item = this.store.createRecord('item', {
        name: newItem
      });

      this.store.find('category', category_id).then(function(category){
        item.set('category', category);
        category.get('items').pushObject(item);
        item.save();
        category.save();
      });

      this.set('newItem', '');
    }
  }
});
