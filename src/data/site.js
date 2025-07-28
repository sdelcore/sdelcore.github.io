module.exports = {
  analytics: {
    gaId: process.env.GA_MEASUREMENT_ID || 'G-WB51TN0SG9',
    enableTracking: process.env.NODE_ENV === 'production'
  }
};