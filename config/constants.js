const environment = process.env.NODE_ENV || 'development';
const PublicURL = "http://localhost" //(environment === "development") ? "http://localhost" : "https://csc398dev.utm.utoronto.ca";

module.exports.PublicURL = PublicURL;
