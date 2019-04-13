'use strict';

import HeaderHome from '../header-home';

describe('HeaderHome View', function() {

  beforeEach(() => {
    this.headerHome = new HeaderHome();
  });

  it('Should run a few assertions', () => {
    expect(this.headerHome).toBeDefined();
  });

});
