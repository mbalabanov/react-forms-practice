import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    emailAddress: "",
    complaintText: "",
    selectedContact: "",
    termsConsent: false,
  });

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;
    const inputChecked = event.target.checked;

    if (inputName === "name") {
      console.log("name", inputValue);
      setUserData({ ...userData, name: inputValue });
    }
    if (inputName === "address") {
      console.log("address", inputValue);
      setUserData({ ...userData, address: inputValue });
    }
    if (inputName === "phone") {
      if (containsOnlyNumbers(inputValue)) {
        console.log("phone", inputValue);
        setUserData({ ...userData, phoneNumber: inputValue });
      } else {
        console.log("Phonenumber is not numeric");
      }
    }
    if (inputName === "email") {
      console.log("email", inputValue);
      setUserData({ ...userData, emailAddress: inputValue });
    }
    if (inputName === "complaint") {
      console.log("complaint", inputValue);
      setUserData({ ...userData, complaintText: inputValue });
    }
    if (inputName === "selectedContact") {
      console.log("selectedContact", inputValue);
      setUserData({ ...userData, selectedContact: inputValue });
    }
    if (inputName === "termsConsent" && inputType === "checkbox") {
      console.log("termsConsent", inputChecked);
      setUserData({ ...userData, termsConsent: inputChecked });
    }
  }

  function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const complaint = event.target.complaint.value;
    const contact = event.target.selectedContact.value;
    const termsConsent = event.target.termsConsent.checked;

    console.log(name, address, phone, email, complaint, contact, termsConsent);

    if (validateEmail(email)) {
      console.log("email", email);
      setUserData({ ...userData, emailAddress: email });
    } else {
      console.log("The email address is not valid.");
    }

    /*
    if (inputName === "name") {
      console.log("name", inputValue);
      //setUserData({ ...userData, name: inputValue });
    }
    if (inputName === "address") {
      console.log("address", inputValue);
      //setUserData({ ...userData, address: inputValue });
    }
    if (inputName === "phone") {
      if (containsOnlyNumbers(inputValue)) {
        console.log("phone", inputValue);
        //setUserData({ ...userData, phoneNumber: inputValue });
      } else {
        console.log("Phonenumber is not numeric");
      }
    }
    if (inputName === "email") {
      console.log("email", inputValue);
      //setUserData({ ...userData, emailAddress: inputValue });
    }
    if (inputName === "complaint") {
      console.log("complaint", inputValue);
      //setUserData({ ...userData, complaintText: inputValue });
    }
    if (inputName === "selectedContact") {
      console.log("selectedContact", inputValue);
      //setUserData({ ...userData, selectedContact: inputValue });
    }
    if (inputName === "termsConsent" && inputType === "checkbox") {
      console.log("termsConsent", inputChecked);
      //setUserData({ ...userData, termsConsent: inputChecked });
    }
    */
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={userData.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={userData.emailAddress}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={userData.complaintText}
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                value="phone"
                name="selectedContact"
                onChange={handleChange}
                checked={userData.selectedContact === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                value="email"
                name="selectedContact"
                onChange={handleChange}
                checked={userData.selectedContact === "email"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                value="snailMail"
                name="selectedContact"
                onChange={handleChange}
                checked={userData.selectedContact === "snailMail"}
              />
              Snail Mail
            </label>

            <label>
              <input
                type="radio"
                value="none"
                name="selectedContact"
                onChange={handleChange}
                checked={userData.selectedContact === "none"}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="termsConsent"
              id="termsConsent"
              onChange={handleChange}
              checked={userData.termsConsent}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
