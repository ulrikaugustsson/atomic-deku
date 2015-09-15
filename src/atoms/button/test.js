import assert from 'assert-element';
import componentMock from 'component-mock';

import Button from '.';

describe('Standard Button', () => {
  const rendered = componentMock(Button).render({props: {children: 'text'}});

  it('is a button', () => {
    assert.isNode(rendered, 'button');
  });

  it('has the class \'Button\'', () => {
    assert.hasClass(rendered, 'Button');
  });

  it('renders its child', () => {
    assert.hasChildren(rendered, 1);
  });
});
