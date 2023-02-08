import PerfTest from './PerfTest';
import { RecoilRoot } from 'recoil';
import {
  render,
  cleanup,
  waitFor,
  screen,
  fireEvent,
} from '@testing-library/react';

afterEach(cleanup);

describe('PerfTest', () => {
  it('testing return of result for PerfTest', async () => {
    render(
      <RecoilRoot>
        <PerfTest />
      </RecoilRoot>
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
