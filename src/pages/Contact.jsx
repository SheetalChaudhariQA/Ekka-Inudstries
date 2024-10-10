import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import { motion, useAnimation } from "framer-motion";
import { toast } from 'sonner';
import { useAddAdminMutation } from '../redux/adminApi';
import { IoCall, IoLocationSharp, IoMailSharp } from "react-icons/io5";
import images from "../image/contact.png";

const Contact = () => {
    const [adminData, { isSuccess, isError, error }] = useAddAdminMutation();
    const controlsForm = useAnimation();
    const controlsButtons = useAnimation();
    const formRef = useRef(null);
    const buttonsRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            name: "",
            message: "",
            email: "",
            subject: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            subject: yup.string().required("Enter Subject"),
            email: yup.string().email("Invalid Email").required("Enter Email"),
            message: yup.string().required("Enter Message"),
        }),
        onSubmit: (values, { resetForm }) => {
            adminData(values);
            resetForm();
        }
    });

    useEffect(() => {
        if (isSuccess) toast.success("Email Sent Successfully");
        if (isError) toast.error(error?.data?.message || 'Something went wrong');
    }, [isSuccess, isError]);

    const handleCallClick = (arg) => {
        if (arg === "E") {
            window.location.href = `mailto:bodkhesamadhan188@gmail.com`;
        } else if (arg === "M") {
            window.location.href = 'tel:8208543875';
        } else if (arg === "L") {
            const googleMapUrl = 'https://www.google.com/maps/place/SKILLHUB...';
            window.open(googleMapUrl, '_blank');
        }
    };

    // Intersection Observer for triggering animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25 
        };

        const formObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                controlsForm.start({ opacity: 1, translateY: 0 });
            } else {
                controlsForm.start({ opacity: 0, translateY: 50 });
            }
        }, observerOptions);

        const buttonsObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                controlsButtons.start({ opacity: 1, translateY: 0 });
            } else {
                controlsButtons.start({ opacity: 0, translateY: 50 });
            }
        }, observerOptions);

        if (formRef.current) formObserver.observe(formRef.current);
        if (buttonsRef.current) buttonsObserver.observe(buttonsRef.current);

        return () => {
            if (formRef.current) formObserver.unobserve(formRef.current);
            if (buttonsRef.current) buttonsObserver.unobserve(buttonsRef.current);
        };
    }, [controlsForm, controlsButtons]);

    return <>

        <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes hoverZoom {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.1);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }

          .animate-zoom-in {
            animation: zoomIn 1s ease-out;
          }

          .hover-zoom:hover {
            animation: hoverZoom 0.3s ease-in-out;
          }
           .hero-image { position: relative; height: 40vh; width: 100%; overflow: hidden; margin-top: 100px; }

         .hero-image img { width: 100%; height: 100%; object-fit: cover; }


         
        `}
      </style>

        <div className="">
            {/* <div className="relative w-full">
                <img 
                    src={images}
                    alt="Contact Background"
                    className="w-full h-[70vh] md:h-[60vh] lg:h-[40vh] xl:h-[40vh] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-serif font-bold mt-10">
                     
                    </h1>
                    <p className="text-white text-lg md:text-xl mt-4">
              
                    </p>
                </div>
            </div> */}
             <div className="hero-image">
        <img src={images} alt='about-img' className="object-cover" />
      </div>

            <motion.div
                animate={{ opacity: 1, translateY: 0 }}
                initial={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-5xl mx-auto px-5 mt-16"
            >
                <div className="border-dashed border-t border-gray-500 my-3"></div>

                <motion.div
                    ref={formRef}
                    id="form-section"
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={controlsForm}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-6"
                >
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <motion.div
                            className="text-center text-2xl font-bold font-serif"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Let's Talk
                        </motion.div>
                        <motion.div 
                            className="flex flex-col md:flex-row gap-5 justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.input
                                {...formik.getFieldProps("name")}
                                type="text"
                                placeholder="Enter Your Name"
                                whileFocus={{ scale: 1.05, boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}
                                className="p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-1/2"
                            />
                            <motion.input
                                {...formik.getFieldProps("email")}
                                type="email"
                                placeholder="Enter Your Email"
                                whileFocus={{ scale: 1.05, boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}
                                className="p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-1/2"
                            />
                        </motion.div>
                        <motion.input
                            {...formik.getFieldProps("subject")}
                            type="text"
                            placeholder="Enter Your Subject"
                            whileFocus={{ scale: 1.05, boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}
                            className="p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                        />
                        <motion.textarea
                            {...formik.getFieldProps("message")}
                            placeholder="Type Your Message"
                            rows={4}
                            whileFocus={{ scale: 1.05, boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}
                            className="p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                        ></motion.textarea>
                        <div className="flex justify-center">
                            <motion.button 
                                type="submit" 
                                whileHover={{ scale: 1.1 }}
                                className="bg-[#5c483f] text-white font-serif px-6 py-2 rounded hover:bg-[#4a3a31] transition"
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

                <motion.div 
                    ref={buttonsRef}
                    id="buttons-section"
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={controlsButtons}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 py-10"
                >
                    {[{ icon: <IoLocationSharp />, label: 'Location', action: 'L' },
                      { icon: <IoCall />, label: 'Call Me', action: 'M' },
                      { icon: <IoMailSharp />, label: 'Email Me', action: 'E' }].map(({ icon, label, action }) => (
                        <motion.button 
                            key={label}
                            onClick={() => handleCallClick(action)} 
                            className="flex flex-col text-black items-center"
                            whileHover={{ scale: 1.1 }}
                        >
                            <span className='text-3xl'>{icon}</span>
                            <span className="font-serif text-black font-bold">{label}</span>
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        </>
};

export default Contact;
