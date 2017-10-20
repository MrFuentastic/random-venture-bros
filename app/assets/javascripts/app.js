document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      ventureBros: [],
      newVbChar: "",
      newVbVehicle: "",
      newVbOrg: "",
      newVbQuote: "",
      errors: []
    },
    mounted: function() {
      $.get('/api/v2/venture_bros.json', function(data) {
        this.ventureBros = data;
      }.bind(this));
    },
    methods: {
      toggleBio: function(currentDiv) {
        console.log(currentDiv.document.querySelectorAll("hidden"));
      },
      addChar: function() {
        var params = {
          character: this.newVbChar,
          vehicle: this.newVbVehicle,
          organization: this.newVbOrg,
          quote: this.newVbQuote
        };

        $.post('/api/v2/venture_bros.json', params, function(newChar) {
          this.ventureBros.push(newChar);
          this.newVbChar = "";
          this.newVbVehicle = "";
          this.newVbOrg = "";
          this.newVbQuote = "";
          this.errors = [];
        }.bind(this)).fail(function(response) {
          this.errors = response.responseJSON.errors;
        }.bind(this));
      }
    },
    computed: {

    }
  });
});