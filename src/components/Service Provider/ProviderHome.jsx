import React from "react";

const ProviderHome = () => {
  return (
    <div className="login-wrap">
      <div className="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          className="sign-in"
          defaultChecked
        />
        <label htmlFor="tab-1" className="tab">
          Step 1
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label htmlFor="tab-2" className="tab">
          Step 2
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group">
              <label htmlFor="user" className="label">
                Owner name
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Email
              </label>
              <input type="email" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Phone Number
              </label>
              <input type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                age
              </label>
              <input type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Gouvernorat
              </label>
              {/* <input type="text" className="input" /> */}
              <select className="input">
                <option className="input" value="Ariana" id="selectOptions">
                  Ariana
                </option>
                <option className="input" value="beja" id="selectOptions">
                  Beja
                </option>
                <option className="input" value="Ben Arous" id="selectOptions">
                  Ben Arous
                </option>
                <option className="input" value="Bizerte" id="selectOptions">
                  Bizerte
                </option>
                <option className="input" value="Gabes" id="selectOptions">
                  Gabes
                </option>
                <option className="input" value="Gafsa" id="selectOptions">
                  Gafsa
                </option>
                <option className="input" value="Jendouba" id="selectOptions">
                  Jendouba
                </option>
                <option className="input" value="Kairouan" id="selectOptions">
                  Kairouan
                </option>
                <option className="input" value="Kasserine" id="selectOptions">
                  Kasserine
                </option>
                <option className="input" value="Kebili" id="selectOptions">
                  Kebili
                </option>
                <option className="input" value="Kef" id="selectOptions">
                  Kef
                </option>
                <option className="input" value="Mahdia" id="selectOptions">
                  Mahdia
                </option>
                <option className="input" value="Manouba" id="selectOptions">
                  Manouba
                </option>
                <option className="input" value="Medenine" id="selectOptions">
                  Medenine
                </option>
                <option className="input" value="Monastir" id="selectOptions">
                  Monastir
                </option>
                <option className="input" value="Nabeul" id="selectOptions">
                  Nabeul
                </option>
                <option className="input" value="Sfax" id="selectOptions">
                  Sfax
                </option>
                <option
                  className="input"
                  value="Sidi Bouzid"
                  id="selectOptions"
                >
                  Sidi Bouzid
                </option>
                <option className="input" value="Siliana" id="selectOptions">
                  Siliana
                </option>
                <option className="input" value="Sousse" id="selectOptions">
                  Sousse
                </option>{" "}
                <option className="input" value="Tataouine" id="selectOptions">
                  Tataouine
                </option>{" "}
                <option className="input" value="Tozeur" id="selectOptions">
                  Tozeur
                </option>{" "}
                <option className="input" value="Tunis" id="selectOptions">
                  Tunis
                </option>
                <option className="input" value="Zaghouan" id="selectOptions">
                  Zaghouan
                </option>
              </select>
            </div>
            <div className="group">
              <div className="parentCity">
                <div id="gridButton">
                  <label htmlFor="pass" className="label">
                    City
                  </label>
                  <input type="text" className="input" />
                </div>
                <div id="gridButton">
                  <label htmlFor="pass" className="label">
                    Street
                  </label>
                  <input type="text" className="input" />
                </div>
              </div>
            </div>

            <div className="group" id="centreButton">
              {/* <input type="submit" className="button" value="Next" /> */}
              <label htmlFor="tab-2" className="button">
                Next
              </label>
            </div>
          </div>
          {/* ----------- */}
          <div className="sign-up-htm">
            <div className="group">
              <label htmlFor="pass" className="label">
                Service type
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="user" className="label">
                Project name
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Description
              </label>
              {/* <input /> */}
              <textarea id="pass" type="text" className="input"></textarea>
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Repeat Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group">
              <label htmlFor="pass" className="label">
                Service price
              </label>
              {/* <input /> */}
              <textarea id="pass" type="text" className="input"></textarea>
            </div>
            <div className="group">
              <label id="girdButton" htmlFor="tab-1" className="button">
                Previous
              </label>
              <label id="girdButton" className="button">
                Submit
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderHome;
