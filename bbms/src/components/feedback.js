import React from 'react';

const feedback = () => {
  return (
    <main>
      <section>
        <h2>Feedback Form</h2>
        <form id="feedbackForm" action="#" method="post">
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4" required></textarea>

          <button type="submit">Submit Feedback</button>
        </form>
      </section>
    </main>
  );
}

export default feedback;
