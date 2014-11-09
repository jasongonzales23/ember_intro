Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <li class=\"list-group-item\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          ");
  return buffer;
  }

  data.buffer.push("<header class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"/\" class=\"navbar-brand\">Grocery Shoppr</a>\n    </div>\n  </div>\n</header>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"md-col-12\">\n\n      <h1>Categories</h1>\n\n      <form class=\"add-new\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\">&plus;</button>\n          </span>\n        </div><!-- /input-group -->\n      </form>\n\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">All</li>\n          ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});