import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrewID description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "tracyy"
          ));
    });

    test('should return name description', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "tracyy"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 51 plus 19?")).toEqual("70");
        expect(QueryProcessor("What is 15 plus 12?")).toEqual("27");
    });

    test('should get numbers', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 1, 89, 92")).toEqual("92");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 1 multiplied by 2?")).toEqual("2");
        expect(QueryProcessor("What is 2 multiplied by 6?")).toEqual("12");
    });

    test('should subtract numbers', () => {
        expect(QueryProcessor("What is 12 minus 10?")).toEqual("2");
        expect(QueryProcessor("What is 2 minus 1?")).toEqual("1");
    });
});