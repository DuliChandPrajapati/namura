export const NomuraLables = Object.freeze({
    LOGIN_FORM: {
        EMAIL: {
            LABEL: 'Email',
            REQUIRED : 'Email is required',
            EMAILERROR: ' Please enter a valid email address',
        },
        PASSWORD: {
            LABEL: 'Password',
            REQUIRED : 'Password is required',
        },
        SUBMIT: {
            LABEL: 'Login'
        },
        LOGIN_ERROR: 'Invalid email or password',
        LOGIN_BLOCKED_ERROR: 'Your account have been locked. Click on Forgot Password.',
    },
    FORGOT_PASSWORD: 'Forgot your password?',
    EMAIL_REGX: /^[a-zA-Z0-9\._\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}$/,
    PASSWORD_REGX: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[`!@#$%^&*()-_=+~{}\\|;:'\"<>,/[/].?\/])(?=\\S+$).{8,13}$/,
    NEW_PASS_REGEX: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z]).{6,}$/,
    COMMON_PASS_PATTERN_MSG: 'Password should be of minimum 6 length, with at least one special character and one upper case character',
    PHONE_REGEX: '[0-9+ ]+',
    NAME_REGEX: '^[a-zA-Z]+[a-zA-Z ]*$',
    HEADER_TOOLTIP: 'Usage as per slots availability',
});
