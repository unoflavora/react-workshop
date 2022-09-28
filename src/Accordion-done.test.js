import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import failOnConsole from 'jest-fail-on-console';

import Accordion from './Accordion';

describe(`Accordion`, () => {
  const items = [
    {title: "About Me", content: "My name is Indra"},
    {title: "Profile", content: "This is my complete profile"},
    {title: "Jobs", content: "I work as Engineer"},
  ]

  failOnConsole({
    silenceMessage: (errorMessage) => {
      if (/Accordion must have items/.test(errorMessage) || /The above error occurred in the <Accordion> component/.test(errorMessage)) {
        return true
      }
      return false
    },
  })

  test(`displays first item of Accordion by default`, async () => {
    render(<Accordion items={items} />);
    
    // We expect the title and content is displayed because, by default, the Accordion select the first item.
    expect(await screen.findByText("About Me")).toBeInTheDocument()
    expect(await screen.findByText("My name is Indra")).toBeInTheDocument()
    
    // We expect the content is not displayed because for other Accordion items, we expect to only display its title
    expect(await screen.findByText("Profile")).toBeInTheDocument()
    expect(screen.queryByText("This is my complete profile")).not.toBeInTheDocument();

    // We expect the content is not displayed because for other Accordion items, we expect to only display its title
    expect(await screen.findByText("Jobs")).toBeInTheDocument()
    expect(screen.queryByText("I work as Engineer")).not.toBeInTheDocument();
  });

  test(`displays selected item if we click the item`, async () => {
    render(<Accordion items={items} />);

    expect(await screen.findByText("About Me")).toBeInTheDocument()
    expect(await screen.findByText("My name is Indra")).toBeInTheDocument()

    userEvent.click(screen.getByText('Profile'));

    expect(await screen.findByText("Profile")).toBeInTheDocument()
    expect(await screen.findByText("This is my complete profile")).toBeInTheDocument();

    expect(await screen.findByText("About Me")).toBeInTheDocument()
    expect(screen.queryByText("My name is Indra")).not.toBeInTheDocument()
  });

  test(`throws error if no items are passed`, () => {
    expect(() => {
      render(<Accordion />);
    }).toThrowError('Accordion must have items')
  })
});
