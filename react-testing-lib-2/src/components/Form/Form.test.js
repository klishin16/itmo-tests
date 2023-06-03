import {fireEvent, render, screen} from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

describe('form tests', function () {
    test('hello world test', () => {
        render(<Form/>);
        const helloWorldElement = screen.getByText(/Hello world/i);
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('button test', () => {
        render(<Form/>);
        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeInTheDocument();
    })

    test('input test', () => {
        render(<Form/>);
        const inputElement = screen.getByPlaceholderText(/input value/i);
        expect(inputElement).toBeInTheDocument();
        // eslint-disable-next-line testing-library/no-debugging-utils
        // screen.debug();
        // expect(inputElement).toMatchSnapshot();
    })

    test('missing element test', () => {
        render(<Form/>);
        const btnElement = screen.queryByRole(/hello2/i);
        expect(btnElement).toBeNull();
    })

    test('delayed appearance test', async () => {
        render(<Form/>);
        const dataElement = await screen.findByText(/data/i);
        expect(dataElement).toBeInTheDocument();
        expect(dataElement).toHaveStyle({color: 'red'})
    })

    test('toggle test', () => {
        render(<Form/>);
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-item')).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-item')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-item')).toBeNull();
    })

    test('input event test', () => {
        render(<Form />);
        const input = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('');

        userEvent.type(input, 'info');
        expect(screen.queryByTestId('value-elem')).toContainHTML('info');
    })
});
