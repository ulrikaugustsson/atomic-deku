import assert from 'assert-element';
import componentMock from 'component-mock';

import Button from '.';

describe('Standard Button', () => {
  const rendered = componentMock(Button).render({props: {children: 'text', type: 'button', name: 'button'}});

  it('is a button', () => {
    assert.isNode(rendered, 'button');
  });

  it('has the class \'Button\'', () => {
    assert.hasClass(rendered, 'Button');
  });

  it('renders its child', () => {
    assert.hasChildren(rendered, 1);
  });

  it('uses the name and type props', () => {
    assert.hasAttribute(rendered, 'type', 'button');
    assert.hasAttribute(rendered, 'name', 'button');
  });

  it('is not disabled by default', () => {
    assert.notHasAttribute(rendered, 'disabled');
  });
});
