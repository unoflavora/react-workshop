import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Accordion from './Accordion-class';

Enzyme.configure({ adapter: new Adapter() });

describe(`Accordion`, () => {
  const items = [
    {title: "About Me", content: "My name is Indra"},
    {title: "Profile", content: "This is my complete profile"},
    {title: "Jobs", content: "I work as Engineer"},
  ]

  test(`displays selected item if we click the item`, async () => {
    const wrapper = mount(<Accordion items={items} />);

    expect(wrapper.html()).toMatch(/About Me/)
    expect(wrapper.html()).toMatch(/My name is Indra/)
    expect(wrapper.html()).toMatch(/Profile/)
    expect(wrapper.html()).not.toMatch(/This is my complete profile/)

    wrapper.instance().selectItem(1);

    wrapper.update();

    expect(wrapper.html()).toMatch(/About Me/)
    expect(wrapper.html()).not.toMatch(/My name is Indra/)
    expect(wrapper.html()).toMatch(/Profile/)
    expect(wrapper.html()).toMatch(/This is my complete profile/)
  });
});
