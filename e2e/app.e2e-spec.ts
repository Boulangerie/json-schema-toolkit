import { JsonSchemaToolkitMigratedPage } from './app.po';

describe('json-schema-toolkit-migrated App', function() {
  let page: JsonSchemaToolkitMigratedPage;

  beforeEach(() => {
    page = new JsonSchemaToolkitMigratedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
