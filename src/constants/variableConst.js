export const browserRouterPath = {
    LANDING_PAGE: "/",
    THANKYOU_PAGE:"/thankyou",
    TRY_FOLDER:"/tryfolder"
}
export const routePath = {
    GET_CUSTOMER_DETAILS: "/getdata",
    ADD_LOG: "/add-events",
    SR_GENERATE: "/sr-generate",
    GET_ERROR_LOG: "/get-error-log",
    KALERYA_CONNECT: "/kalera-connect",
    KALERYA_CONNECT_STATUS: "/callstatusupdate"
}

export const sessionVariable = {
    APPROVE_DATA: "approveData",
    CALLER_ID: "caller_id",
    RMCALL_FLAG: "param_6",
    URL_HASH: "hash",
    SESSION_ID: "param_id"
}
export const logStepMessage = {
    NINTYNINE: {
        STEPID: "0",
        STEPTEXT1: "LINK_EXPIRED",
        STEPTEXT2: "DATA_PERGUED",
        STEPTEXT3: "Offer Not Available",
        STEPTEXT4: "Error from thankyou page",
        STEPTEXT5: "Error in GCA data decryption"
    },
    ONE: {
        STEPID: "1",
        STEPTEXT: "Customer visited Kisan Credit Card page link"
    },
    TWO: {
        STEPID: "2",
        STEPTEXT: "Customer selected language"
    },
    THREE: {
        STEPID: "3",
        STEPTEXT: "Customer Clicked on iMobile"
    },
    FOUR: {
        STEPID: "4",
        STEPTEXT: "Customer Clicked on Download iMobile"
    },
    FIVE: {
        STEPID: "5",
        STEPTEXT: "Clicked on Connect with Relationship Manager"
    },
    SIX: {
        STEPID: "6",
        STEPTEXT: "Error in Call Cnnection API"
    },
    SEVEN: {
        STEPID: "7",
        STEPTEXT: "Call not connected to caller side"
    },
    EIGHT: {
        STEPID: "8",
        STEPTEXT: "Call not connected to RM side"
    },
    NINE: {
        STEPID: "9",
        STEPTEXT: "Call duration is less than 20 sec"
    },
    TEN: {
        STEPID: "10",
        STEPTEXT: "Customer try to call after work hour"
    },
    ELEVEN: {
        STEPID: "11",
        STEPTEXT: "SR No. generated"
    }, TWELVE: {
        STEPID: "12",
        STEPTEXT: "Call duration is more than 20 sec"
    }, THIRTEEN: {
        STEPID: "13",
        STEPTEXT: "Customer Clicked on Visit Branch"
    }, FOURTEEN: {
        STEPID: "14",
        STEPTEXT: "Customer Clicked on Video play"
    }, FIFTEEN: {
        STEPID: "15",
        STEPTEXT: "Customer Clicked on Pay Button"
    }, SIXTEEN: {
        STEPID: "16",
        STEPTEXT: "Customer Clicked on Gpay option"
    }, SEVENTEEN: {
        STEPID: "17",
        STEPTEXT: "Customer Clicked on phonePe option"
    }, EIGHTEEN: {
        STEPID: "18",
        STEPTEXT: "Customer Clicked on paytm option"
    }, NINETEEN: {
        STEPID: "19",
        STEPTEXT: "Customer Clicked on IMPS Payment option"
    }, TWENTY: {
        STEPID: "20",
        STEPTEXT: "Customer Clicked on NEFT Payment option"
    }
}

export const KaleryaFlag = {
    RMCALL_SUCCESS_FLAG: "RMCallSuccess",
    RMTIME_OUT: "RMTimeOut",
    RM_AVAILABLE_LESS_THAN_TEN: "RMAvailableWithLessThankten",
    CALLER_NOT_AVAILABLE: "CallerNotAvailable",
    RM_NOT_AVAILABLE: "RMNotAvailable",
    ANSWER: "ANSWER"
}

export const clientUrl = {
    IMOBILE_DEEP_LINK: 'https://ind01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.csam.icici.bank.imobile%26hl%3Den_IN&data=05%7C01%7Cpranali.kulkarni%40icicibank.com%7Cc1b516b364004ed5bec108db32743976%7Cce6f94301d644a97a32de92a05a11971%7C1%7C0%7C638159246987122231%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=KMolkRQQ1fY4%2FQltS0b1kcMxxFX1HuUqeHTMiLwCcCE%3D&reserved=0',
    MERA_MOBILE: "https://ind01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.csam.icici.bank.imobile%26hl%3Den_IN&data=05%7C01%7Cpranali.kulkarni%40icicibank.com%7Cc1b516b364004ed5bec108db32743976%7Cce6f94301d644a97a32de92a05a11971%7C1%7C0%7C638159246987122231%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=KMolkRQQ1fY4%2FQltS0b1kcMxxFX1HuUqeHTMiLwCcCE%3D&reserved=0"
}

export const imagePath = {
    GOLD_LOAN_MERA_IMOBILE_VIDEO: `${process.env.PUBLIC_URL}/assets/video/goldloan_vedio.mp4`,
    GOLD_LOAN_IMOBILE_VIDEO: `${process.env.PUBLIC_URL}/assets/video/goldloan_vedio2.mp4`,
    KISAN_CREDIT_CARD_BANNER: `${process.env.PUBLIC_URL}/assets/img/banner.jpg`
}

export const kisancreditcardVideoFlag = {
    MERA_IMOBILE_FLAG: "MERA_IMOBILE",
    IMOBILE: "IMOBILE"
}

export const customerStatus = {
    CUSTOMER_ACC_STATUS_BRANCH: "Branch",
    CUSTOMER_HAVE_IPAY: "I Mobile Active",
    CUSTOMER_NOT_HAVE_IPAY: "I Mobile InActive"
}

export const KALERYA_METGHOD_DIAL_TO_STATUS = "dial.c2cstatus";
export const KALERYA_METGHOD_DIAL = "dial.click2call";
export const TRUE_BOOL_STR = "true";
export const INTERNAL_ERROR_MESSAGE = "some Internal error";
export const OK_STR = "200";
export const RM_AVAILABLE_START_TIME = 9;
export const RM_AVAILABLE_END_TIME = 18;
export const BRANCH_LINK = "https://maps.google.com/?q="
export const BRANCH_LINK2 = "https://maps.apple.com/maps?q="

export const languageWithCode = {
    "en-IN": "English",
    "hi-IN": "हिंदी",
    "ta-IN": "தமிழ்",
    "te-IN": "తెలుగు",
    "kn-IN": "ಕನ್ನಡ",
    "bn-IN": "বাংলা",
    "gu-IN": "ગુજરાતી",
    "pa-IN": "ਪੰਜਾਬੀ",
    "ml-IN": "മലയാളം",
    "mr-IN": "मराठी",
    "od-IN": "ওরিয়া"
}