class LoginPage {

    getLoginText(){
        return cy.xpath("//h2[contains(text(),'Login')]");
    }

    getLoginPageText(){
        return cy.contains('Sign Out').invoke('text');;
    }
    
    getUsernameInput() {
      return cy.get('input[name="username"]');
    }
  
    getPasswordInput() {
      return cy.get('input[name="password"]');
    }
  
    getLoginButton() {
      return cy.get('input[name="signon"]');
    }

    getMyAccountButton(){
      return cy.get('[href="/actions/Account.action?editAccountForm="]');
    }

    getDropdownText(){
      return cy.get('select');
    }
  
    async login(username, password) {
      const original_text= 'Sign Out';

      await this.getUsernameInput().should('be.visible').type(username);
      await this.getPasswordInput().should('be.visible').clear();
      await this.getPasswordInput().should('be.visible').type(password);
      await this.getLoginButton().should('be.visible').click();
      console.log(this.getLoginPageText());
      await this.getLoginPageText().should('eq', original_text);      
    }

    async selectDropdown(dropdownValue){
      await this.getMyAccountButton().click();
      // await cy.get(':nth-child(2) > :nth-child(2) > select').select(dropdownValue).should('have.value', dropdownValue);  
      cy.get('select[name="account.favouriteCategoryId"]').select(dropdownValue);
      cy.get('input[name="editAccount"]').click();
      cy.get('select[name="account.favouriteCategoryId"]').should('have.value', 'REPTILES');
    }
  }
  
  // Export the page object class
  export default new LoginPage();