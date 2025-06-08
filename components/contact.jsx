import { useState } from "react";
import React from "react";
import socials from "../data/socials.json";

const Contact = ({ text, language }) => {
  const [info, changeInfo] = useState({});
  const [active, setActive] = useState(true);
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const { name, email, message } = info;
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "List-Unsubscribe": "<mailto:unsubscribe@example.com>",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Email sent:", data);
      } else {
        const errorData = await res.json();
        console.error("Failed to send email:", errorData.message);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
    setActive(false);
  };
  return (
    <div>
      <div id="contact">
        <div className="container relative">
          <div className="">
          <div className="col-md-8">
              <div className="section-title text-justify">
                <h2>{text?.title[language]}</h2>
              </div>
              <div className="section-content text-[1rem]">
                  <p>
                    {text?.p1[language]}
                    <br />
                    <br />
                    {text?.p2[language]}
                    <br />
                    <br />
                    {text?.p3[language]}
                  </p>
                </div>
              <form name="sentMessage">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={(e) => {
                          changeInfo({ ...info, name: e.target.value });
                          setActive(true);
                        }}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={(e) => {
                          changeInfo({ ...info, email: e.target.value });
                          setActive(true);
                        }}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={(e) => {
                      changeInfo({ ...info, message: e.target.value });
                      setActive(true);
                    }}
                  ></textarea>

                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                {active ? (
                  <button
                    type="submit"
                    onClick={(e) => sendEmail(e)}
                    className="btn btn-custom btn-lg"
                  >
                    {text?.send[language]}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(true);
                    }}
                    className="btn btn-custom btn-lg bg-slate-600"
                  >
                    Email Sent
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info section-content my-auto h-full pt-32">
            {/* <div className="contact-item">
              <h3>{text?.contact[language]}</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {text?.address[language]}
                </span>
                {text?.addressInfo[language]}
              </p>
            </div> */}
            {/* <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {text?.phone[language]}
                </span>
                {text?.phoneInfo[language]}
              </p>
            </div> */}
            <div className="contact-item my-auto h-full">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {text?.email[language]}
                </span>
                {text?.emailInfo}
              </p>
              <div className="flex flex-col gap-16 ">
                {socials?.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-[24px] h-[24px] hover:text-black text-white text-[3rem] object-contain"
                  >
                    <i className={`${social.icon} p-4`}></i>
                    <span className="text-xs pl-3">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
