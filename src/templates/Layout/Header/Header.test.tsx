import { Header } from './Header';
import { render, fireEvent } from '@/utils/test-utils';

describe('<Header />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});
