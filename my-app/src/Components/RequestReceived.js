export default function RequestReceived() {
  return (
    <div>
      <h1>Thank you, ${`firstName`}!</h1>
      <h1>We appreciate you!</h1>
      <h1>We really appreciate you!</h1>
      <h3>
        Your request is being processed. Please check your email for more
        information.
      </h3>
      <button className="Processing page button">Home</button>
    </div>
  );
}
