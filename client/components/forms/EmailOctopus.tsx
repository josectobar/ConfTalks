import React from "react";
import styled from "styled-components";

const NewsLetterFormStyles = styled.div({
  ".email-octopus-form-wrapper": {
    h2: {
      fontSize: "20px",
      margin: "0 0 1rem"
    }
  },
  ".email-octopus-heading": {
    fontSize: "20px",
    margin: "0 0 1rem"
  },
  ".email-octopus-success-message": {},
  ".email-octopus-error-message": {
    color: "#e74c3c"
  },
  ".email-octopus-form": {},
  ".email-octopus-form-row": {
    marginBottom: "15px",
    label: {
      display: "block"
    },
    input: {
      width: "100%",
      maxWidth: "400px",
      padding: "8px",
      height: "32px",
      border: "1px solid #ccc"
    }
  },
  ".email-octopus-form-row-consent": {
    marginTop: "20px",
    label: {
      verticalAlign: "top"
    }
  },
  ".email-octopus-form-row-subscribe": {
    marginTop: "20px",
    button: {
      backgroundColor: "#e0e0e0",
      padding: "6px 12px",
      border: "0",
      fontWeight: 700
    }
  },
  // this should get rid of some bots
  ".email-octopus-form-row-hp": {
    position: "absolute",
    left: "-5000px"
  }
});

const EmailOctopus = props => {
  return (
    <NewsLetterFormStyles>
      <div {...props}>
        <div className="email-octopus-form-wrapper">
          <h2 className="email-octopus-heading">
            Subscribe to the ConfTalks newsletter 💌
          </h2>
          <p className="email-octopus-success-message"></p>
          <p className="email-octopus-error-message"></p>
          <form
            method="post"
            action="https://emailoctopus.com/lists/b6cc50a1-f282-11e9-be00-06b4694bee2a/members/embedded/1.3/add"
            className="email-octopus-form"
            data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
          >
            <div className="email-octopus-form-row">
              <label htmlFor="field_0">Email address</label>
              <input id="field_0" name="field_0" type="email" placeholder="" />
            </div>
            <div className="email-octopus-form-row-consent">
              <input type="checkbox" id="consent" name="consent" />
              <label htmlFor="consent">
                I consent to receiving your weekly newsletters. Newsletters
                include news about ConfTalks and also occasionally exclusive
                conference related offers. You will only receive newsletters
                when we have something to say.
                <br />
                No spam 🚫
              </label>
            </div>
            <div className="email-octopus-form-row-hp" aria-hidden="true">
              {/* Do not remove this field, otherwise you risk bot sign-ups */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <input type="text" name="hpb6cc50a1-f282-11e9-be00-06b4694bee2a"
                       tabindex="-1"
                       autocomplete="nope" />                    
                    `
                }}
              />
            </div>
            <div className="email-octopus-form-row-subscribe">
              <input type="hidden" name="successRedirectUrl" value="" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
        <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.3/formEmbed.js"></script>
      </div>
    </NewsLetterFormStyles>
  );
};

export { EmailOctopus };
