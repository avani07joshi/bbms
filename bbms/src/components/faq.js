import React from 'react';

const faq = () => {
  return (
    <main>
      <section>
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <h3>How can I donate blood?</h3>
            <p>To donate blood, visit our nearest blood donation center and follow the guidelines provided by our staff.</p>
          </li>
          <li>
            <h3>Who can donate blood?</h3>
            <p>Most healthy adults are eligible to donate blood. However, there are certain eligibility criteria. Please check our donation guidelines for more information.</p>
          </li>
          {/* Add more FAQ items as needed */}
        </ul>
      </section>
    </main>
  );
}

export default faq;
