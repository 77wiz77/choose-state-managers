import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  screen,
  fireEvent,
} from '@testing-library/react';
import PerfTest from './PerfTest';
import { BalanceState } from '../../store/MobXStore/BalanceState';

afterEach(cleanup);

describe('PerfTest', () => {
  let balanceState: BalanceState;

  beforeEach(() => {
    balanceState = new BalanceState();
  });

  it('testing return of result for PerfTest', async () => {
    render(<PerfTest balanceState={balanceState} />);

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
