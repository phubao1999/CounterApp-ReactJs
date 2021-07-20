import { render, screen } from "@testing-library/react";
import Counters from "../components/counters";
import renderer from 'react-test-renderer';

describe("<Counters />", () => {
    test("Should render Counters", () => {
        const onRevert = () => null;
        const onReset = () => null;
        const onDelete = () => null;
        const onIncrement = () => null
        const counters = [{}];
        render(
            <Counters
                onRevert={onRevert}
                onReset={onReset}
                onDelete={onDelete}
                onIncrement={onIncrement}
                counters={counters}
            />
        );
        const countersEl = screen.getByTestId("1");
        expect(countersEl).toBeInTheDocument();
        expect(countersEl).not.toBeEmptyDOMElement();
    });

    test("Matches Snapshot", () => {
        const onRevert = () => null;
        const onReset = () => null;
        const onDelete = () => null;
        const onIncrement = () => null
        const counters = [{}];
        const tree = renderer.create(
            <Counters
                onRevert={onRevert}
                onReset={onReset}
                onDelete={onDelete}
                onIncrement={onIncrement}
                counters={counters}
            />
        );
        expect(tree).toMatchSnapshot();
    });
});