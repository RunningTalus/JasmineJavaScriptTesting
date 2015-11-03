Built-in Matchers

toEqual - check equality between two values. Works on primitive values (Boolean, Number, String) and Objects (including Arrays).

toBe - Similar to toEqual, and provides the same result when comparing primitive values. 
    Uses strict equals operator (===). 
    NOTE: The strict equals operator always considers false any comparison between values of distinct types. 
    Advised to use the toEqual operator in most cases, and use toBe matcher only when you want to check if two variables reference the same object type.

toBeFalsy - "", 0, false, NaN, null, undefined.
 
toBeTruthy - 1, true, non-empty string, {} or [].   