import EmberRouter from '@ember/routing/router';
import config from 'airtable/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('scientists');
  this.route('programmers');
  this.route('airtable', { path: 'airtable/:page_number' });
  this.route('page_not_found', { path: '/*path' });
});
