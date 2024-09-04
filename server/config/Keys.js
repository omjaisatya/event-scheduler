const { CONNECTION_URL, PORT, SENDER_EMAIL, EMAIL_PASSWORD, JWT_SECTRET } =
  process.env;

module.exports = {
  port: PORT,
  connectionUrl: CONNECTION_URL,
  senderEmail: SENDER_EMAIL,
  emailPassword: EMAIL_PASSWORD,
  jwtSecret: JWT_SECTRET,
};
