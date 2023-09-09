/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  //EmailJs Send Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_qh4zbnn",
        "template_b4biwqu",
        form.current,
        "FsF1HFg7a40Nlsgj_"
      )
      .then(
        () => {
          // console.log(result.text);
          setIsSending(false);
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          // console.log(error.text);
          setIsSending(false);
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  const contactRef = useRef(null);
  const mouseMoveHandler = (e) => {
    const submitBtn = document.querySelector(".submit-btn");
    var rect = submitBtn.getBoundingClientRect();

    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    contactRef.current.style.setProperty("--x", x + "px");
    contactRef.current.style.setProperty("--y", y + "px");
  };
  return (
    <div id="contact" className="bg-brownAccent dark:bg-[#1a1a1a] py-[7rem]">
      <ToastContainer />
      <div className="max-w-[90%] md:max-w-[80%] mx-auto ">
        <div>
          <h2
            className={` mb-10 md:mb-[5rem] relative text-[3.5vw] font-extrabold text-secondary dark:text-[#fff] text-center uppercase stroke-[1rem] z-20 bg-clip-text
        before:content-['get_in_touch'] before:text-[8vw] before:absolute  before:top-[50%] before:left-[50%] before:-translate-x-[50%] 
        before:-translate-y-[50%] before:text-center before:text-[#000] before:-z-[1] before:w-full before:opacity-30`}
          >
            Get in{" "}
            <span className={`text-primary dark:text-darkPrimary`}>touch</span>
          </h2>
        </div>
        <section className="text-secondary dark:text-gray-200 body-font relative">
          <div className="container px-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Feel free to reach out to me, I'm always open to discussing
                creative ideas, and the opportunity to join your team.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="lg:w-full md:w-full mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        required
                        name="user_name"
                        placeholder="Your Name"
                        className="w-full dark:bg-[#3b3b3b] bg-white dark:bg-opacity-50 rounded  dark:focus:border-[#4bffa5] dark:focus:bg-[#d7d7d9] dark:focus:text-[#333] dark:placeholder:text-gray-200 dark:focus:placeholder:text-secondary focus:ring-2 focus:ring-[#222] text-base outline-none dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        required
                        name="user_email"
                        placeholder="Your Email"
                        className="w-full dark:bg-[#3b3b3b] bg-white dark:bg-opacity-50 rounded  dark:focus:border-[#4bffa5] dark:focus:bg-[#d7d7d9] dark:focus:text-[#333] dark:placeholder:text-gray-200 dark:focus:placeholder:text-secondary focus:ring-2 focus:ring-[#222] text-base outline-none dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="Your Subject"
                        className="w-full dark:bg-[#3b3b3b] bg-white dark:bg-opacity-50 rounded  dark:focus:border-[#4bffa5] dark:focus:bg-[#d7d7d9] dark:focus:text-[#333] dark:placeholder:text-gray-200 dark:focus:placeholder:text-secondary focus:ring-2 focus:ring-[#222] text-base outline-none dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Your Message"
                        className="w-full dark:bg-[#3b3b3b]  bg-white dark:bg-opacity-50 rounded  dark:focus:border-[#4bffa5] dark:focus:bg-[#d7d7d9] dark:focus:text-[#333] dark:placeholder:text-gray-200 dark:focus:placeholder:text-secondary focus:ring-2 focus:ring-[#222] h-32 text-base outline-dark:none dark:text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  {isSending ? (
                    <div className="p-2 w-full text-center">
                      <button
                        disabled
                        className="text-gray-400   px-5 py-2 border-2 border-gray-400  rounded-md"
                      >
                        <svg
                          className="spinner inline-block mr-2 animate-spin"
                          width="13"
                          height="13"
                          viewBox="0 0 13 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
                            stroke="#9ca3af"
                          />
                        </svg>
                        <span>Sending...</span>
                      </button>
                    </div>
                  ) : (
                    <div className="p-2 w-full text-center">
                      <button
                        ref={contactRef}
                        onMouseMoveCapture={(e) => mouseMoveHandler(e)}
                        className="text-secondary hover:text-white dark:hover:text-[#333] dark:text-darkPrimary px-5 py-2 border-2 border-secondary dark:border-darkPrimary rounded-md submit-btn before:bg-secondary dark:before:bg-darkPrimary"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
