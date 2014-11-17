App = Em.Application.create({
  rootElement: $('#app')
});

App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'grocery-shoppr-emberjs'
});

App.Router.map(function() {
  this.resource('category', {path: ':id'});
  this.resource('items', {path: 'items'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('category');
  }
});

App.CategoryRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.id);
  }
});

App.ItemsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('item');
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

App.IndexController = Ember.ArrayController.extend({
  actions: {
    createNewCategory: function() {
      var newCategory = this.get('newCategory');
      var category = this.store.createRecord('category', {
        title: newCategory
      });
      category.save();
      this.set('newCategory', '');
    }
  }
});
