App.Item = DS.Model.extend({
  name: DS.attr('string'),
  category: DS.belongsTo('category')
});

App.Item.reopenClass({
  FIXTURES: [
    { id: 10, name: 'kale', category: 1 },
    { id: 11, name: 'cucumber', category: 1 },
    { id: 12, name: 'flour', category: 2 },
    { id: 13, name: 'yeast', category: 2 },
    { id: 14, name: 'soap', category: 3 },
    { id: 15, name: 'toilet paper', category: 3 },
    { id: 16, name: 'old fashioned', category: 4 },
    { id: 17, name: 'maple', category: 4 }
  ]
});

