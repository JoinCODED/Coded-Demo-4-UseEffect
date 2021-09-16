import React from 'react';

export default function Form() {
  return (
    <form
      id="subscribe-form"
      name="subscribe-form"
      class="subscribe-form subscribe-form-1 validate wow fadeInDown"
      data-wow-delay=".6s"
      novalidate=""
    >
      <input
        type="email"
        name="EMAIL"
        id="EMAIL"
        class="required email"
        placeholder="Enter Mail Address"
      />

      <div id="mce-responses" class="clear">
        <div
          class="response"
          id="mce-error-response"
          style={{ display: 'none' }}
        ></div>
        <div
          class="response"
          id="mce-success-response"
          style={{ display: 'none' }}
        ></div>
      </div>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_4dbefd9d3a1d6a570020b1e85_e16d098ae8"
          tabindex="-1"
          value=""
        />
      </div>

      <button id="subscribe" class="sub_btn common-btn">
        Add Waiting List
      </button>
    </form>
  );
}
