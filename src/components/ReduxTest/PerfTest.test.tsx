import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PerfTest from './PerfTest';
import { balanceReducer } from '../../store/ReduxStore/reducers';
import { configureStore } from '@reduxjs/toolkit';
import {
  render,
  cleanup,
  waitFor,
  screen,
  fireEvent,
} from '@testing-library/react';

afterEach(cleanup);

describe('PerfTest component', () => {
  it('testing return of result for PerfTest', async () => {
    const store = configureStore({ reducer: balanceReducer });
    render(
      <Provider store={store}>
        <PerfTest />
      </Provider>
    );

    // Simulate user input
    const input = screen.getByTestId('input-perf-test');
    fireEvent.change(input, { target: { value: '1000' } });

    // Simulate button click
    const button = screen.getByText('Запуск теста производительности');
    fireEvent.click(button);

    // Wait for the result to be displayed
    await waitFor(() => {
      expect(screen.getByTestId('result')).not.toHaveTextContent(
        'Результат: -'
      );
    });
  });
});
