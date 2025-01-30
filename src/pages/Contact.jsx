import Breadcrumb from "../components/Breadcrumb"

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13902.002030481413!2d74.01318931870546!3d18.490552934800213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e803adce13c7%3A0x9129dc2a56fa36!2sMIT%20ADT%20UNIVERSITY%20SCHOOL%20OF%20ENGINEERING!5e1!3m2!1sen!2sin!4v1723469199043!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-us">
          <div className="row">
            <div className="contact-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>MIT Art, Design and Technology University, Rajbaugh Loni Kalbhor, Solapur Highway, Near Bharat Petrol Pump Loni Kalbhor Railway Station</h5>
                  <p>Pune - 412201, Maharashtra India</p>
                </span>
              </div>

              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <h5>020- 26912901 / 02 / 03 , 9595124234</h5>
                  <p>Office hours: 9:00 am to 4.30pm</p>
                </span>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <span>
                  <h5>For General Enquiry: info@mituniversity.edu.in</h5>
                  <p>For Admissions: admissions@mituniversity.edu.in</p>
                </span>
              </div>
            </div>

            <div className="contact-col">
              <form action="#">
                <input type="text" placeholder="Enter your name" required />
                <input type="email" placeholder="Enter your email address" required />
                <input type="text" placeholder="Enter your subject" required />
                <textarea rows="8" placeholder="Message" required></textarea>
                <button type="submit" className="hero-btn blue-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;