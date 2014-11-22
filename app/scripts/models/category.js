App.Category = DS.Model.extend({
  title: DS.attr('string'),
  items: DS.hasMany('item'),
  itemCount: function() {
    return this.get('items.length');
  }.property('items.@each')
});

