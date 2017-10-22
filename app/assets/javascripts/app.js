document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      ventureBros: [],
      newVbChar: "",
      newVbVehicle: "",
      newVbOrg: "",
      newVbQuote: "",
      errors: [],
      searchFilter: "",
      sortAttribute: "character",
      sortAscending: true
    },
    mounted: function() {
      $.get('/api/v2/venture_bros.json', function(data) {
        this.ventureBros = data;
      }.bind(this));
    },
    methods: {
      // toggleQuote: function(currentDiv) {
      //   console.log(currentDiv.document.querySelectorAll("hidden"));
      // },
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
      },
      validChar: function(inputChar) {
        var nameFilter = inputChar.character.toLowerCase().indexOf(this.searchFilter.toLowerCase()) !== -1;
        var quoteFilter = inputChar.quote.toLowerCase().indexOf(this.searchFilter.toLowerCase()) !== -1;

        return nameFilter || quoteFilter;
      },
      setSort: function(inputAttr) {
        if (inputAttr !== this.sortAttribute) {
          this.sortAscending = true;
        } else {
          this.sortAscending = !this.sortAscending;
        }
        this.sortAttribute = inputAttr;
        
        //fix this!!!!!!
        if (this.sortAscending) {
          document.getElementById(inputAttr).innerHTML += ' ^';
        } else {
          document.getElementById(inputAttr).innerHTML += ' v';          
        }
      }
    },
    computed: {
      sortedCharacters: function() {
        return this.ventureBros.sort(function(char1, char2) {
          if (this.sortAscending) {
            return char1[this.sortAttribute].localeCompare(char2[this.sortAttribute]);
          } else {
            return char2[this.sortAttribute].localeCompare(char1[this.sortAttribute]);
          }
        }.bind(this));
      }
    }
  });
});