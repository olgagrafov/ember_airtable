import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | air-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('myList', [
      {
        headline: 'headline1',
        subHeadline: 'subHeadline1',
      },
      {
        headline: 'headline2',
        subHeadline: 'subHeadline2',
      },
      {
        headline: 'headline3',
        subHeadline: 'subHeadline3',
      },
    ]);

    await render(
      hbs`<AirContainer @title='Airtable Container' @airList={{this.myList}} />`
    );
    assert.dom('[data-test-title]').hasText('Airtable Container');
  });
});
