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
  beforeModel: function(transition) {
    this.store.find('category');
    this.store.find('item');
    this._super(transition);
  },
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
    },

    deleteItem: function(item) {
      this.get('items').removeObject(item);
      item.destroyRecord();
    }
  }
});

App.ItemsController = Ember.ArrayController.extend({
  actions: {
    deleteItem: function(item) {
      this.removeObject(item);
      item.destroyRecord();
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
    },
    deleteItem: function(user_cat) {
     this.store.find('category', user_cat.id).then(function(category) {
       items = category.get('items');
       items.toArray().forEach(function(item, index, enumerable) {
         item.destroyRecord();
       });
       category.destroyRecord();
     });
    }
  }
});
