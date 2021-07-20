import { cleanup, render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Counter from "../components/counter";

afterEach(() => {
    cleanup();
})

describe("<Counter />", () => {
    test("Should render Counter Component", () => {
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