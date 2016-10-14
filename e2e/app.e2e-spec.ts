import { JsonSchemaToolkitPage } from './app.po';

describe('json-schema-toolkit-migrated App', function() {
  let page: JsonSchemaToolkitPage;

  beforeEach(() => {
    page = new JsonSchemaToolkitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
