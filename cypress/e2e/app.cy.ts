import '@cypress/code-coverage/support';

describe('App e2e', () => {
  it('should have search form on Home page', () => {
    cy.visit('/');
    cy.get('input').should('have.value', '');
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Enter at least 3 symbols...');
    cy.get('button').should('have.text', 'Search');
  });

  it('loads Main page and have 24 cards', () => {
    cy.visit('/');
    cy.contains('Home');
    cy.get('[data-testid="unsplash-card"]').should('have.length', 24);
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains(/About Us/i);
  });

  it('search new photos and resotre search value after change page', () => {
    cy.visit('/');
    cy.get('[data-testid="search-input"]').type('cats and dogs');
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="unsplash-card"]').should('have.length', 24);
    cy.contains('About').click();
    cy.contains('Home').click();
    cy.get('[data-testid="search-input"]').should('have.value', 'cats and dogs');
  });

  it('open and close modal', () => {
    cy.visit('/');
    cy.get('[data-testid="unsplash-card"]').first().click();
    cy.get('[data-testid="card-detail"]').should('exist');
    cy.get('[data-testid="close-modal"]').first().click();
    cy.contains('[data-testid="card-detail"]').should('not.exist');
  });

  it('should navigate to form page', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });

  it('should have form on Form page', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.get('[data-testid="title"]').invoke('attr', 'name').should('contain', 'title');
    cy.get('[data-testid="text"]').invoke('attr', 'name').should('contain', 'text');
    cy.get('[data-testid="created"]').invoke('attr', 'name').should('contain', 'created');
    cy.get('[data-testid="type"]').invoke('attr', 'name').should('contain', 'type');
    cy.get('[data-testid="file"]').invoke('attr', 'name').should('contain', 'file');
    cy.get('[data-testid="price"]').invoke('attr', 'name').should('contain', 'price');
    cy.get('[data-testid="isAvailable"]').invoke('attr', 'name').should('contain', 'isAvailable');
    cy.get('[data-testid="isSale"]').invoke('attr', 'id').should('contain', 'isSale');
  });

  it('should navigate to about page', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains(/About Us/i);
    cy.contains(/Lorem, ipsum dolor sit amet consectetur adipisicing elit./i);
  });

  it('create form card', () => {
    cy.visit('/form');

    cy.get('[data-testid="title"]').type('Some test title');
    cy.get('[data-testid="text"]').type('Some test description');
    cy.get('[data-testid="created"]').type('2023-04-26');
    cy.get('[data-testid="type"]').select('Watercolor');
    cy.get('[data-testid="file"]').selectFile('public/product01.jpg');
    cy.get('[data-testid="price"]').type('123');
    cy.get('[data-testid="isAvailable"]').first().check();
    cy.get('[data-testid="isSale"]').first().check();
    cy.get('[data-testid="form-submit"]').click();
    cy.contains('Form submitted!').should('be.visible');
    cy.get('[data-testid="unsplash-card"]').should('have.length', 1);

    cy.get('[data-testid="title"]').type('Some second test title');
    cy.get('[data-testid="text"]').type('Some second test description');
    cy.get('[data-testid="created"]').type('2023-02-21');
    cy.get('[data-testid="type"]').select('Watercolor');
    cy.get('[data-testid="file"]').selectFile('public/product01.jpg');
    cy.get('[data-testid="price"]').type('321');
    cy.get('[data-testid="isAvailable"]').first().check();
    cy.get('[data-testid="form-submit"]').click();
    cy.contains('Form submitted!').should('be.visible');
    cy.get('[data-testid="unsplash-card"]').should('have.length', 2);
  });
});
