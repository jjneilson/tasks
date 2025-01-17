/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 0) {
        return [numbers[0], numbers[numbers.length - 1]];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const int_numbers = numbers.map((numbers: string): number =>
        Number.isInteger(parseInt(numbers)) ? parseInt(numbers) : 0
    );
    return int_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nodollarsign = amounts.map((amounts: string): string =>
        amounts.substring(0, 1) === "$" ? amounts.substring(1) : amounts
    );
    const nums = stringsToIntegers(nodollarsign);
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isQuestion = (messages: string): boolean =>
        messages.substring(messages.length - 1) !== "?";
    const noQuestions = messages.filter(isQuestion);
    const messages2 = noQuestions.map((messages: string): string =>
        messages.substring(messages.length - 1) === "!"
            ? messages.toUpperCase()
            : messages
    );
    return messages2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const isShort = (words: string): boolean => words.length < 4;
    const sWords = words.filter(isShort);
    return sWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const isRGB = colors.every(
        (colors: string): boolean =>
            colors === "red" || colors === "blue" || colors === "green"
    );
    return isRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let equation = addends[0] ? addends.join("+") : "0";
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    equation = sum.toString() + "=" + equation;
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const new_values = [...values];
    const first_neg = values.findIndex((values: number): boolean => values < 0);
    const sum = values
        .slice(0, first_neg < 0 ? values.length : first_neg)
        .reduce((currentTotal: number, num: number) => currentTotal + num, 0);
    new_values.splice(first_neg < 0 ? values.length : first_neg + 1, 0, sum);
    return new_values;
}
