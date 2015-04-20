  var SongView = Backbone.View.extend({
    tagName: "div",
    className: "column",
    template: _.template("<h1><%= song %></h1>"),
    initialize: function() {
      this.render();
    },
    render: function(datas) {
      var data = datas || {
        song: "My page doesn't know that diddy..."
      };
      var renderedTemplate = this.template(data);
      this.$el.html(renderedTemplate);
    }
  });

  var logo = new SongView({
    el: $('body')
  });
