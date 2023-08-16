
class HomePage {
    
    getHomeSignup() {
      return cy.contains('SIGN UP / LOGIN');
    }
  

    loginSignup() {
      this.getHomeSignup().click();
    }

  }
  
  // Export the page object class
  export default new HomePage();