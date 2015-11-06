// MODULE PATTERN

(function ( $, Investment, Stock ) {             // explicit dependency declaration
   function NewInvestmentView ( params ) {       // IIFE
       this.$el = $( params.selector );
   };

    this.NewInvestmentView = NewInvestmentView;  // explicitly attached NewInvestmentView to the GLOBAL object
})( jQuery, Investment, Stock );                 // immediate invocation