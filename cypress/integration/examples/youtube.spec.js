describe('youtube Search', () => {
    it('loads search page', () => {
      cy.visit('https://www.youtube.com');
    });
  
    it('searches for `The whole working-from-home thing — Apple`', () => {
      cy.get('#search-input').type('The whole working-from-home thing — Apple{enter}');
    });
  
    it('gets first search result', () => {
      cy.get('#title-wrapper a').eq(0).click()
      cy.wait(4000)
        
    });
    it('verify the title', () => {
        cy.get('#title-container a').should('contain','The whole working-from-home thing — Apple' )  
      });
      it('verify the uploader-Apple', () => {
        cy.get('#container h1').should('contain','Apple' )
          
      });

  });