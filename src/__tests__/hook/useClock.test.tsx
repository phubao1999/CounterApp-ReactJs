import { renderHook } from "@testing-library/react-hooks";
import useClock from "../../hook/useClock";

describe("Testing use clock hook", () => {
    it("Should have value of date time now", () => {
        const time = renderHook(() => useClock()).result.current;
        expect(time).not.toBeNull();
        expect(time).not.toBeUndefined();
    });
});