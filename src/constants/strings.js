export const coachedPeople = (amount) => `Coached ${amount} people`;
export const durationBuilder = (duration) => `DURATION: ${duration} Weeks`;
export const priceBuilder = (price) => `PRICE: ${price} INR`;
export const subscribedSuccessBuilder = (trainerName, sessionCount) => `Successfully subscribed to ${trainerName} for ${sessionCount} sessions`;
export const appointmentSuccessBuilder = () => `Appointment Booked`;
export const appointmentErrorBuilder = () => `Booking error, try again`;
export const couponShareBuilder = (couponCode, discount, validTill) => `Hello, use my coupon ${couponCode} to avail ${discount}% on all my packages! Valid till ${validTill}`;
const strings = {
  SLOTS: 'Slots',
  AVAILABLE_SLOTS: 'Available Slots',
  PACKAGE_NAME: 'Package Name',
  PACKAGE: 'Package',
  MINS: 'Mins',
  DATE: 'Date',
  ALLOTTED_TO: 'Allotted to ',
  CONFIRM_FLAG: 'Report Content?',
  NO_SLOTS_AVAILABLE: 'No slots available',
  RUNNING_DAYS: 'Running WorkoutDays',
  POST: 'Post',
  DONE: 'Done',
  ADD_POST: 'Add Post',
  NO_ACTIVITY: 'No activity found',
  ADD_IMAGE: 'Add Image',
  NEW_POSTS: 'New Posts',
  CHANGE_IMAGE: 'Change Image',
  RUPEE: '₹',
  PACKAGE_CREATED: 'Package Created',
  FOLLOW: 'Follow',
  COMMENTS: 'Comments',
  COMMENT: 'Comment',
  CHANGES_SAVED: 'Changes Saved',
  TIMING: 'Timing',
  PACKAGE_SUMMARY: 'Package Summary',
  BOOK: 'Book',
  RINGING: 'Ringing',
  BOOKED: 'Booked',
  EDIT_COVER: 'Edit Cover',
  ENROLL: 'Enroll',
  NO_OF_SESSIONS: 'Number of Sessions',
  MY_PACKAGES: 'My Packages',
  MY_SLOTS: 'My Slots',
  NEW_APPOINTMENT: 'New Appointment',
  MY_CLIENTS: 'My Clients',
  PACKAGES: 'Packages',
  SESSIONS: 'Sessions',
  FOLLOWERS: 'Followers',
  PLAN_DESCRIPTION: 'Plan description',
  FOLLOWING: 'Following',
  TRANSFORMATIONS: 'Transformations',
  NO_DESC: "No description provided for this user",
  MAKEOVERS: 'Makeovers',
  SCHEDULE: 'Schedule',
  RATING: 'Rating',
  SEE_MORE: 'See more',
  SEE_LESS: 'See less',
  SUBSCRIPTIONS: 'Subscriptions',
  SUBSCRIBE: 'Subscribe',
  SOCIAL: 'Social',
  POSTS: 'Posts',
  DURATION: 'Duration',
  PROGRAMS: 'Programs',
  WEEKS: 'Weeks',
  PRICE: 'PRICE',
  PRICE_TITLE: 'Price',
  DESCRIPTION: 'Description',
  PLAN_PRICE: 'Plan price :',
  PROCEED: 'Proceed',
  CALL: 'Call',
  WAITING_FOR_USERS: 'Waiting for user to join',
  CALL_TIMEOUT: 'Call timeout, ending call.',
  APPOINTMENTS: 'Appointments',
  SIGNUP_FAILED: 'Signup Failed..Try Again',
  LOGIN_FAILED: 'Login Failed,Try Again',
  SLOT_BOOKING_SUCCESS: "Slot booked!",
  SLOT_BOOKING_ERROR: 'Unable to book slot, try again',
  QUESTION: 'Question',
  QUESTIONS: 'Questions',
  ANSWERED_BY: 'Answered by,',
  ANSWER: 'Answer',
  CANCEL: 'Cancel',
  ASK_EXPERT: 'Ask an expert',
  USER_DETAILS: 'User Details',
  NAME: 'Name',
  BOOKING_DATE: 'Booking Date',
  TRAINER_DETAILS: 'Trainer Details',
  PACKAGE_DETAILS: 'Package Details',
  SUBSCRIPTION_DETAILS: 'Subscription Details',
  SESSION_DETAILS: 'Session Details',
  TRAINER: 'Trainer',
  SESSION_TIME: 'Session time',
  START_FROM: 'Start from',
  END_AT: 'End at',
  TOTAL_SESSIONS: 'Total Sessions',
  SESSION_DAYS: 'Session Days',
  CREATE: 'Create',
  NO_DATA: 'No Data',
  DAYS: 'How many days do you work out per week?',
  PREFERENCES: 'Preferences',
  DESCRIBE_DAYS: 'This describe the number of days in your workout plan',
  BMI_CALCULATOR: 'BMI Calculator',
  HISTORY: 'History',
  SET_TARGET: 'Set Target',
  NEW_WEIGHT: 'NEW WEIGHT',
  COUPONS: 'Coupons',
  COUNT: 'Count',
  DISCOUNT: 'Discount',
  VALIDITY: 'Validity',
  GENERATE: 'Generate',
  COUPON_CODE: 'Coupon Code',
  REDEEMED: 'Redeemed',
  COUPONS_CREATED: 'Coupons created',
  ENTER_COUPON_CODE: 'Apply Coupon Code',
  APPLY: 'Apply',
  TOTAL: 'Total',
  WORKOUT: 'Workout Video',
  CHANGE_VIDEO: 'Change Video',
  ADD_VIDEO: 'Add Video',
  PHYSICAL_DATA: 'Physical Data',
  WEIGHT: 'Weight (kg)',
  HEIGHT: 'Height (cms)',
  DELETE: 'Delete',
  REPORT_CONTENT: 'Report Content',
  LAST_DAYS: 'Last few days',
  LAST_MONTHS: 'Last few months',
  ENTER_WEIGHT: 'Enter weight',
  ENTER_TARGET: 'Enter target weight and goal date',
  INVALID_COUPON: 'Invalid coupon code or coupon expired',
  TOTAL_EARNING: 'Total Earning',
  INR: 'INR',
  EXPORT_OVERVIEW: 'Export Overview',
  OVERVIEW: 'Overview',
  STATEMENT: 'Statement',
  CHECK_NOW: 'Check Now',
  PAID_AMOUNT: "Paid Amount",
  CLAIM_NOW: "Claim Now",
  DUE: 'Due',
  SEND_REMINDER: 'Send Reminder',
  GENERATE_INVOICE: 'Generate Invoice',
  COUPON_APPLIED: 'Coupon Applied',
  USER_NAME: 'User Name',
  CITY: 'City',
  TRANSACTION_DETAILS: 'Transaction Details',
  TRANSACTION_STATUS: 'Trasaction Status',
  FINAL_AMOUNT: 'Final Amount',
  PACKAGE_PRICE: 'Package Price',
  CLAIM_AMOUNT_TEXT: 'Click here to claim amount',
  CREDENTIAL: "Please enter credentials",
  SIGN_IN: 'Sign in',
  SIGN_UP: 'Sign up',
  EMAIL: 'Email address',
  PASSWORD: 'Password',
  FORGOT_PASSWORD: 'Forgot Password',
  NO_ACCOUNT: "Don't have an account? Sign up",
  ALREADY_ACCOUNT: "Already have an account?",
  COUPON_COUNT: 'Coupon Count',
  MONTHS: 'Months',
  COUPON_VALIDITY: 'Coupon Validity',
  VALID_UPTO: 'Valid Upto',
  SHARE_COUPON: 'Share coupon with users',
  COMPRESSING_VIDEO: 'Compressing video before upload',
  UPLOADING: 'Uploading video',
  BANK: 'BANK',
  ACCOUNT_LOWER: 'Account',
  ACCOUNT: 'ACCOUNT',
  DETAILS: 'DETAILS',
  ACCOUNT_CREATE_INFO: 'Enter Account Details',
  AGREE: 'I agree to all terms and conditions',
  CLICK_READ: 'Click here to read',
  PLEASE_ENTER_DETAILS: 'Please enter details',
  ACCOUNT_CREATED: 'Account created',
  COULD_NOT_INITIATE_CALL: 'Could not initiate call',
  CALL_REQUESTS: 'Call Requests',
  CALL_REQUEST: 'Call Request',
  CALL_REQUEST_ACCEPTED: 'Call Request Accepted',
  SET_HEIGHT: 'Set Height',
  SUBSCRIBE_SUCCESS: 'Successfully subscribed to package',
  PAYMENT_SUCCESS: "Payment successful",
  COUPON_EXHAUSTED: 'Coupon redeemed',
  CATEGORY: 'Category',
  SELECT_CATEGORY: 'Select Category',
  TERMS_AND_CONDITIONS:'terms and conditions',
  I_ACCEPT:'I accept ',
  MY_ACCOUNTS: 'My Accounts',
  ADD_ACCOUNT: 'Add Account',
  NO_REQUESTS: 'No requests',
  REQUEST_CALL: 'Request Call',
  BROWSE_SLOTS: 'Browse Slots',
  REQUEST_CALLBACK: 'Request Call back',
  NO_POSTS_BY_USER: 'No posts by user',
  REJECT: 'Reject',
  ACCEPT:'Accept',
  ACCEPTED:'Accepted',
  FINISHED: 'Call Finished',
  PASSWORD_RESET_SENT: 'Sent a password reset link to ',
  ERROR:'Error',
  SENT_VERIFICATION_MAIL: "Sent a verfication mail to to ",
  SPEECH:'Speech',
  STREAM:'Stream',
  EXERCISE: 'Exercise',
  START: 'START',
  EXERCISES:'Exercise',
  FULL_BODY_WORKOUT:'Full body workout',
  FEATURED_WORKOUT :'Featured Workouts',
  DISCOVER:'Discover More',
  ABS:'Abs',
  AVG_MINUTES: 'Avg. minutes',
  SETS:'Sets',
  LEVEL:'Level',
  ALL:'ALL',
  SESSION_WITH: 'Session with',
  REST: 'Rest',
  WELL_DONE: "Well done",
  GO_LIVE: 'Go Live',
  STREAM_INFO: 'Schedule your stream, or go live now',
  TITLE: 'Title',
  GO_LIVE_NOW: 'Go live now',
  MINUTES: 'Minutes',
  FAILED_TO_CREATE_STREAM: 'Failed to schedule live stream',
  LIVE_STREAM_SUCCESS: 'Live stream created',
  GOING_LIVE: ', Going Live',
  GOING_LIVE_:'Going Live',
  LIVE: 'Live',
  MY_LIVE_STREAMS: 'My Live Streams',
  RECIPE:"Recipe",
  WATER:'Water',
  CALORIECOUNTER:'Calorie Counter',
  BREAKFAST: 'Breakfast',
  LUNCH: 'Lunch',
  SNACKS:'Snacks',
  DINNER:'Dinner',
  CALORIE_INTAKE_TEXT:'Calorie Intake',
  TARGET_TEXT:'Target',
  PROTEIN:'Protein',
  CARBS:'Carbs',
  FATS:'Fats',
  NO_NOTIFICATIONS: 'No notifications',
  MARK_ALL_READ: 'Mark All Read',
  VIEW_ALL: 'View All',
  CLEAR_ALL: 'Clear All',
  ADD_ITEM:'Add Item',
  CALS:'cal',
  ACHIEVED:'Achieved',
  QUANTITY:"Quantity",
  GROUP_SESSIONS: 'Group Sessions',
  MAX_PARTICIPANTS: 'Max Participants',
  SESSION_COUNT: 'Session Count',
  MAX_ALLOWED_PARTICIPANTS: 'Max Allowed Participants',
  SET_TIMING: 'Set Timing',
  START_DATE: 'Start Date',
  CLIENTS: 'Clients',
  HIDE: 'Hide',
  ACTIVE:'Active',
  DISABLED:'Disabled'
};

export const bmiVerdicts = {
  low: `UNDERWEIGHT`,
  healthy: `YOU'RE HEALTHY`,
  high: `OVERWEIGHT`,
  unhealthy: `OBESE`
}

export default strings;