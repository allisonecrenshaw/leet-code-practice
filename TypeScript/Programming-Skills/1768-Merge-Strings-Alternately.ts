function mergeAlternately1(word1: string, word2: string): string {
    let word1Array: string[] = word1.split("");
    let word2Array: string[] = word2.split("");

    let mergedWord = "";

    let i = 0;
    while (i !== word1Array.length && i !== word2Array.length) {
        mergedWord += word1Array[i];
        mergedWord += word2Array[i];
        i++;

        if (
            (i === word1Array.length && i !== word2Array.length) ||
            (i === word2Array.length && i !== word1Array.length)
        ) {
            let remainingWordArray: string[] = [];
            if (i === word1Array.length) {
                remainingWordArray = word2Array;
            } else {
                remainingWordArray = word1Array;
            }
            while (i !== remainingWordArray.length) {
                mergedWord += remainingWordArray[i];
                i++;
            }
        }
    }

    return mergedWord;
}

function mergeAlternately(word1: string, word2: string): string {
    let word1Array: string[] = word1.split("");
    let word2Array: string[] = word2.split("");

    let mergedWord = "";

    let i = 0;
    while (i !== word1Array.length && i !== word2Array.length) {
        mergedWord += word1Array[i];
        mergedWord += word2Array[i];
        i++;

        if (
            (i === word1Array.length && i !== word2Array.length) ||
            (i === word2Array.length && i !== word1Array.length)
        ) {
            let wordWithExtra: String;
            if (i === word1Array.length) {
                wordWithExtra = word2;
            } else {
                wordWithExtra = word1;
            }
            mergedWord += wordWithExtra.substring(i);
        }
    }

    return mergedWord;
}

function mergeAlternatelyRepeat1(word1: string, word2: string): string {
    let word1Array: string[] = word1.split("");
    let word2Array: string[] = word2.split("");

    let mergedWord: string = "";
    let i = 0;
    while (i !== word1Array.length && i !== word2Array.length) {
        mergedWord += word1Array[i];
        mergedWord += word2Array[i];
        i++;

        if (
            (i === word1Array.length && i !== word2Array.length) ||
            (i === word2Array.length && i !== word1Array.length)
        ) {
            let remainingWordArray: string[] =
                i === word1Array.length ? word2Array : word1Array;
            while (i !== remainingWordArray.length) {
                mergedWord += remainingWordArray[i];
                i++;
            }
        }
    }

    return mergedWord;
}

function main() {
    // Test1
    let word1 = "cat";
    let word2 = "hotdog";

    // Test2
    let word3 = "ac";
    let word4 = "bdef";
    let mergedWord = mergeAlternatelyRepeat1(word3, word4);
    console.log("Merged word: " + mergedWord);
}

main();

/*
Notes
------
First solution was actually faster in terms of efficiency. 
    Looks a little bit messier because of the extra loop, but I'm guessing 
    the substring function does something similar to what I've already done with the split, 
    so the efficiency of working with the already-split string (the arrays) is better.
*/
