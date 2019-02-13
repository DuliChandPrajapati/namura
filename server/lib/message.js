let SUCCESS_MESSAGE =  Object.freeze({
    STATUS:1,
    SUCCESS:"Success.",
    SIGNUP_SUCCESS:"Registration Success.",
    LOGIN_SUCCESS:"Login Success.",
    OTP_SENT:'Your OTP has been sent to your email.',
    RESET_PWD_LINK_SUCCESS:'Your reset password link has been sent to your email.'
});

let ERROR_MESSAGE =  Object.freeze({
    STATUS:0,
    ERROR:"Error.",
    INVALID_EMAIL:"Email is not registered with us.",
    EMAIL_EXIST:"Account already exist with this email.",
    INVALID_OLD_PWD:"You have entered wrong old password.",
    INVALID_AUTH:"Session expired.Please login again.",
    INVALID_PWD:"Wrong Password.",
    INVALID_OTP:"You have entered wrong or expired OTP.",
    RESET_PWD_LINK_EXPIRE:"Your reset password link has been expired.",
    VERIFICATION_LINK_EXPIRE:"Your verification link has been expired.Try resend verification.",
    VENDOR_NOT_FOUND:'Vendor not found.',
    BLOCKED_USER:'Your account has been blocked.',
    EMAIL_UNVERIFIED:'Your email is not yet verified.Please verify.',
    REDEEMED_AMOUNT_INVALID:'You wallet need to have $50 to redeem wallet amount.',
    PAYPAL_ACCOUNT_EXIST:'Your have already added your paypal account with email '
});

module.exports = {
    SUCCESS_MESSAGE,
    ERROR_MESSAGE
}