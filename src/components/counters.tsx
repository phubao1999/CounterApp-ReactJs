import Counter from "./counter";

export default function Counters(props: any) {
    const { onRevert, onReset, onDelete, onIncrement, counters } = props;

    return (
        <>
            <button onClick={onRevert} className="btn btn-success btn-sm m2">Revert Data</button>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map((counter: any) =>
                <Counter
                    key={counter.id}
                    counter={counter}
                    onDelete={() => onDelete(counter.id)}
                    onIncrement={() => onIncrement(counter)}
                />
            )}
        </>
    )
}