'use strict';

import FooterHome from '../footer-home';

describe('FooterHome View', function() {

  beforeEach(() => {
    this.footerHome = new FooterHome();
  });

  it('Should run a few assertions', () => {
    expect(this.footerHome).toBeDefined();
  });

});
