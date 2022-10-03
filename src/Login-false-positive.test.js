import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';
import Login from './Login'
import checkPassword from './utils/checkPassword';

function fetchMock(input, init) {
  if(input === 'https://api.tokopedia.example.com/login') {
    const requestBody = JSON.parse(init.body);
    const result = checkPassword(requestBody.email, requestBody.password);
    const errorMessage = result ? '' : 'Email and password do not match';
    const responseData = {
      success: result,
      errorMessage,
    }

    const jsonFn = () => {
      return new Promise((resolve) => {
        resolve(responseData);
      })
    }

    return new Promise((resolve) => {
      resolve({json: jsonFn})
    })
  } else {
    return new Promise((resolve,reject) => {
      reject(new Error(`"${input}" is not mocked in this test`))
    })
  }
}

function generateExpectedInit(email, password) {
  return {
    method: "POST",
    body: JSON.stringify({email, password})
  } 
}

describe(`Login`, () => {
  let fetchSpy;

  beforeAll(() => {
    fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(fetchMock)
  })

  afterEach(() => {
    fetchSpy.mockClear();
  })

  afterAll(() => {
    fetchSpy.mockRestore();
  })

  test(`can log in with correct email and password`, async () => {
    render(<Login />)

    const emailField = await screen.findByLabelText('Email');
    await userEvent.type(emailField, 'indra@gmail.com');

    const passwordField = await screen.findByLabelText('Password');
    await userEvent.type(passwordField, 'rahasia');

    const form = document.getElementById('login-form');
    fireEvent.submit(form)

    expect(fetchSpy).toBeCalledTimes(1);
    expect(fetchSpy).toBeCalledWith('https://api.tokopedia.example.com/login', generateExpectedInit('indra@gmail.com', 'rahasia'))

    await screen.findByText('Welcome, indra@gmail.com')
  })
})