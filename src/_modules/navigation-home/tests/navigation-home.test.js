'use strict';

import NavigationHome from '../navigation-home';

describe('NavigationHome View', function() {

  beforeEach(() => {
    this.navigationHome = new NavigationHome();
  });

  it('Should run a few assertions', () => {
    expect(this.navigationHome).toBeDefined();
  });

});
