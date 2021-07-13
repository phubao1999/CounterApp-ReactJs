import { useEffect } from "react";

export default function Counter(props: any) {
    const formatValue = () => {
        return props.counter.value === 0 ? "Zero" : props.counter.value;
    }

    const getClassesBadge = () => {
        return `badge m-2 ${props.counter.value === 0 ? " badge-warning" : " badge-primary"}`;
    }

    useEffect(() => {
        return () => console.log("Component Destroy");
    })

    return (
        <div>
            <span className={getClassesBadge()}>{formatValue()}</span>
            <button className="btn btn-secondary btn-sm" onClick={props.onIncrement}>Increment</button>
            <button className="btn btn-danger btn-sm ml-2" onClick={props.onDelete}>Delete</button>
        </div>
    )
}