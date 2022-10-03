import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';
import Login from './Login-simulated'

describe(`Login`, () => {
  test(`can log in with correct email and password`, async () => {
    render(<Login />)

    const emailField = await screen.findByLabelText('Email');
    await userEvent.type(emailField, 'indra@gmail.com');

    const passwordField = await screen.findByLabelText('Password');
    await userEvent.type(passwordField, 'rahasia');

    const submitButton = await screen.findByText('Log In')
    await userEvent.click(submitButton)

    await screen.findByText('Welcome, indra@gmail.com')
  })

  test(`displays error if the email and password do not match`, async () => {
    render(<Login />)

    const emailField = await screen.findByLabelText('Email');
    await userEvent.type(emailField, 'indra@gmail.com');

    const passwordField = await screen.findByLabelText('Password');
    await userEvent.type(passwordField, 'abcdef');

    const submitButton = await screen.findByText('Log In')
    await userEvent.click(submitButton)

    await screen.findByText('Email and password do not match')
  })

  test(`displays error if the email is empty`, async () => {
    render(<Login />)

    const passwordField = await screen.findByLabelText('Password');
    await userEvent.type(passwordField, 'abcdef');

    const submitButton = await screen.findByText('Log In')
    await userEvent.click(submitButton)

    await screen.findByText('Email is required')
  })

  test(`displays error if the password is empty`, async () => {
    render(<Login />)

    const emailField = await screen.findByLabelText('Email');
    await userEvent.type(emailField, 'indra@gmail.com');

    const submitButton = await screen.findByText('Log In')
    await userEvent.click(submitButton)

    await screen.findByText('Password is required')
  })
})