import { multiply } from "./calculate";

test('To be zero as multiplier', () => {
    expect(multiply(10, 0)).toBe(0);
})