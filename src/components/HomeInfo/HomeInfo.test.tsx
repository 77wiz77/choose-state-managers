import { render, screen, cleanup } from '@testing-library/react';
import HomeInfo from './HomeInfo';
import { HomeInfoData } from '../../data/HomePage/HomeInfoData';

afterEach(cleanup);

it('HomeInfo component displays data correctly', () => {
  render(<HomeInfo />);

  HomeInfoData.forEach(({ name, text }) => {
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
