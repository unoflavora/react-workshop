import { render } from '@testing-library/react';

import Accordion from './Accordion';

describe(`Accordion`, () => {
  const items = [
    { title: 'About Me', content: 'My name is Indra' },
    { title: 'Profile', content: 'This is my complete profile' },
    { title: 'Jobs', content: 'I work as Engineer' },
  ];

  test(`displays first item of Accordion by default`, async () => {
    const { container } = render(<Accordion items={items} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <div>
            <button>
              About Me
            </button>
          </div>
          <div>
            My name is Indra
          </div>
          <div>
            <button>
              Profile
            </button>
          </div>
          <div>
            <button>
              Jobs
            </button>
          </div>
        </div>
      </div>
    `);
  });
});
