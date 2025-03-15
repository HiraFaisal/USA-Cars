import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-3 flex flex-col md:flex-row rounded-lg md:pl-[70px]">
            {/* Left Section: Contact Details */}
            <div className="md:w-2/5 p-4 flex flex-col justify-between">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <p className="text-gray-700"><strong>Phone:</strong> 12345678976</p>
                    <p className="text-gray-700"><strong>Fax:</strong> 1234567897544</p>
                    <p className="text-gray-700"><strong>Toll Free:</strong> 123458754</p>
                    <p className="text-gray-700"><strong>Email:</strong>
                        <a href="mailto:Krayees830@gmail.com" className="text-blue-600"> Krayees830@gmail.com</a>
                    </p>

                    {/* Location */}
                    <h3 className="text-lg font-semibold pt-4">Location</h3>
                    <p className="text-gray-700">USA Car, London City</p>

                    {/* Social Media Icons */}
                    <h3 className="text-lg font-semibold pt-4">Social Media</h3>
                    <div className="flex space-x-4">
                        {[
                            { icon: <FaFacebookF />, href: "#" },
                            { icon: <FaLinkedinIn />, href: "#" },
                            { icon: <FaTwitter />, href: "#" },
                            { icon: <FaInstagram />, href: "#" }
                        ].map((item, index) => (
                            <a key={index} href={item.href} className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white hover:bg-yellow-600 text-xl">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Button */}
                <button className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 w-fit self-start mt-4 md:mt-0">
    Contact us
</button>

            </div>

            {/* Right Section: Map */}
            <div className="md:w-3/5 mt-6 md:mt-0">
                <iframe
                    className="w-full h-64 md:h-[500px] shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.5937978471296!2d-123.00136182392256!3d49.26631947129102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867730b4a61829%3A0xdaceec0384a861e5!2sBurnaby%2C%20BC%2C%20Canada!5e0!3m2!1sen!2s!4v1710712345678!5m2!1sen!2s"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactSection;
