App.Item = DS.Model.extend({
  name: DS.attr('string'),
  category: DS.belongsTo('category')
});

