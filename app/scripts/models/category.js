App.Category = DS.Model.extend({
  title: DS.attr('string'),
  items: DS.hasMany('item', {async: true}),
  itemCount: function() {
    return this.get('items').get('length');
  }.property('items')
});

