App.Category = DS.Model.extend({
  title: DS.attr('string'),
  items: DS.hasMany('item', {async: true})
});

App.Category.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Produce', items: [ 10, 11 ] },
    { id: 2, title: 'Baking', items: [ 12, 13 ] },
    { id: 3, title: 'Household Items', items: [ 14, 15 ] },
    { id: 4, title: 'Donuts', items: [ 16, 17 ] }
  ]
});

