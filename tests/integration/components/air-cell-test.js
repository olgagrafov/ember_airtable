import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | air-cell', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('cellData', {
      headline: 'headline!',
      subHeadline: 'subHeadline',
    });

    await render(hbs`<AirCell @cell={{this.cellData}} />`);
    await this.pauseTest();
    assert.dom('[data-test-headLine]').hasText('headline!');
    assert.dom('[data-test-subHeadLine]').hasText('subHeadline');
  });
});
