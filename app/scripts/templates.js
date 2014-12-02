Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Categories</h1>\n\n<form class=\"add-new\">\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n      <button class=\"btn btn-default\" type=\"button\">&plus;</button>\n    </span>\n  </div><!-- /input-group -->\n</form>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\">All</li>\n  <li class=\"list-group-item\">Produce</li>\n  <li class=\"list-group-item\">Baking</li>\n  <li class=\"list-group-item\">Household Items</li>\n</ul>\n");
  
});