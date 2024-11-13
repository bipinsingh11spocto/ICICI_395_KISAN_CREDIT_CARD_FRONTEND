import { languageWithCode } from "../constants/variableConst";
/*
 * This function return boolean value, wether page loading is true or false
 * @param {*} data=boolean
 */
export function pageLoading(data) {
    document.getElementById("preloader").style.display = data === true ? "block" : "none";
}

/*
 * This function return superscript for month
 * @param {*} dataA 
 * @returns 
 */
export function numberSub(dataA) {
    const data = Number(dataA)
    if (data === 1 || data === 21 || data === 31) {
        return "st";
    }
    else if (data === 2 || data === 22) {
        return "nd"
    }
    else if (data === 3 || data === 23) {
        return "rd"
    }
    else {
        return "th"
    }
}

/*
 * This function mask account no or mobile no.
 * Number of digit remains same in output with only last four digit visibale
 * @param {*} accountId 
 * @returns 
 */
export function maskAccountId(accountId) {
    if (accountId) { /** Condition will only executes if accountId is *not* undefined, null, empty, false or 0*/
        const accountIdlength = accountId.length;
        const maskedLength = accountIdlength - 5; /** Modify the length as per your wish */
        let newString = accountId;
        for (let i = 0; i < accountIdlength; i++) {
            if (i < maskedLength) {
                newString = newString.replace(accountId[i], 'X');
            }
        }
        return newString;
    } else return /**Will handle if no string is passed */
}

export function dateSeperated(resData) {
    let expDateArr;
    expDateArr = expDateArr = resData.split("-");
    return `${expDateArr[1].charAt(0).toUpperCase() + expDateArr[1].substring(1)} ${expDateArr[0]}, ${expDateArr[2].length < 4 ? "20" : ""}${expDateArr[2]}`
}

export function getLanguageFromCode(lanCode = 'en-IN') {
    if (lanCode) {
        return languageWithCode[lanCode];
    } else return languageWithCode['en-IN']
}