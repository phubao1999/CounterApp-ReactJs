import { cleanup, render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Counter from "../counter";

afterEach(() => {
    cleanup();
})

describe("<Counter />", () => {
    test("Should render Counter Component", async () => {
        const onIncrement = () => null;
        const onDelete = () => null;
        const counter = {
            id: 1,
            value: 3
        }
        render(<Counter onIncrement={onIncrement} onDelete={onDelete} counter={counter} />);
        const counterEl = screen.getByTestId('1');
        expect(counterEl).toBeInTheDocument();
        expect(counterEl).toHaveTextContent('Increment');
        expect(counterEl).not.toContainHTML('<div>');
    });

    test("matches snapshot", () => {
        const onIncrement = () => null;
        const onDelete = () => null;
        const counter = {
            id: 1,
            value: 3
        }
        const tree = renderer.create(<Counter onIncrement={onIncrement} onDelete={onDelete} counter={counter} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});