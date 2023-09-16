import { render } from '@testing-library/react';
import React from 'react';
import { TType } from '../../config';
import Button from '../index';

describe('<Button />', () => {
  test('should render default', () => {
    const { container } = render(<Button>default</Button>);
    expect(container).toMatchSnapshot();
  });

  test('should render button with type', () => {
    const types: Array<TType> = [
      'link',
      'text',
      'default',
      'primary',
      'dashed',
    ];
    const { getByText } = render(
      <>
        {types.map((type, key) => (
          <Button key={key} type={type}>
            {type}
          </Button>
        ))}
      </>,
    );
    types.forEach((t) => {
      expect(getByText(t)).toMatchSnapshot();
    });
  });

  test('should render button with shape', () => {
    const { getByText } = render(
      <>
        <Button shape="circle">circle</Button>
        <Button shape="round">round</Button>
      </>,
    );
    expect(getByText('circle')).toMatchSnapshot();
    expect(getByText('round')).toMatchSnapshot();
  });

  test('should render button with size', () => {
    const { getByText } = render(
      <>
        <Button size="large">large</Button>
        <Button size="middle">middle</Button>
        <Button size="small">small</Button>
      </>,
    );
    expect(getByText('large')).toMatchSnapshot();
    expect(getByText('middle')).toMatchSnapshot();
    expect(getByText('small')).toMatchSnapshot();
  });

  test('should render button with status', () => {
    const { getByText } = render(
      <>
        <Button status="success">success</Button>
        <Button status="warning">warning</Button>
        <Button status="error">error</Button>
        <Button status="info">info</Button>
      </>,
    );
    expect(getByText('success')).toMatchSnapshot();
    expect(getByText('warning')).toMatchSnapshot();
    expect(getByText('error')).toMatchSnapshot();
    expect(getByText('info')).toMatchSnapshot();
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
