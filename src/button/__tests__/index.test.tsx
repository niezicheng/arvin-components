import { Button } from '@arvin/react-ui';
import { render } from '@testing-library/react';
import React from 'react';
import { TSize, TStatus, TType } from '../../config';
import { ButtonShape, ButtonSize, ButtonStatus, ButtonType } from '../demo';

describe('<Button />', () => {
  test('should render default', () => {
    const { container } = render(<Button>default</Button>);
    expect(container).toMatchSnapshot();
  });

  test('should render button with type', () => {
    const types: Array<TType> = [
      'primary',
      'default',
      'dashed',
      'text',
      'link',
    ];
    const { container } = render(<ButtonType />);
    container.querySelectorAll('.ar-button').forEach((ele, index) => {
      expect(ele).toHaveClass(`ar-button--${types[index]}`);
    });
  });

  test('should render button with shape', () => {
    const shapes = ['circle', 'round'];
    const { container } = render(<ButtonShape />);
    container.querySelectorAll('.ar-button').forEach((ele, index) => {
      expect(ele).toHaveClass(`ar-button--${shapes[index]}`);
    });
  });

  test('should render button with size', () => {
    const sizes: Array<TSize> = ['small', 'middle', 'large'];
    const { container } = render(<ButtonSize />);
    container.querySelectorAll('.ar-button').forEach((ele, index) => {
      expect(ele).toHaveClass(`ar-button--${sizes[index]}`);
    });
  });

  test('should render button with status', () => {
    const statuses: Array<TStatus> = ['info', 'success', 'warning', 'error'];
    const { container } = render(<ButtonStatus />);
    container.querySelectorAll('.ar-button').forEach((ele, index) => {
      expect(ele).toHaveClass(`ar-button--${statuses[index]}`);
    });
  });

  test('should render button with loading', () => {
    const { getByText } = render(
      <>
        <Button loading={true}>loading</Button>
        <Button loading={false}>not loading</Button>
      </>,
    );
    expect(getByText('loading')).toMatchSnapshot();
    expect(getByText('not loading')).toMatchSnapshot();
  });

  test('should render button with disabled', () => {
    const { getByText } = render(
      <>
        <Button disabled={true}>disabled</Button>
        <Button disabled={false}>not disabled</Button>
      </>,
    );
    expect(getByText('disabled')).toMatchSnapshot();
    expect(getByText('not disabled')).toMatchSnapshot();
  });

  test('should render button with children', () => {
    const { getByText } = render(
      <>
        <Button>children</Button>
      </>,
    );
    expect(getByText('children')).toMatchSnapshot();
  });

  test('should render button with className', () => {
    const { getByText } = render(
      <>
        <Button className="test">className</Button>
      </>,
    );
    expect(getByText('className')).toMatchSnapshot();
  });

  test('should render button with style', () => {
    const { getByText } = render(
      <>
        <Button style={{ color: 'red' }}>style</Button>
      </>,
    );
    expect(getByText('style')).toMatchSnapshot();
  });

  test('should render button with onClick', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <>
        <Button onClick={onClick}>onClick</Button>
      </>,
    );
    expect(getByText('onClick')).toMatchSnapshot();
    getByText('onClick').click();
    expect(onClick).toBeCalled();
  });
});
