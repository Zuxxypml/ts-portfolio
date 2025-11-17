"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

type info = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const infoData: info[] = [
  {
    icon: <FaPhoneAlt className="text-accent" />,
    title: "Phone",
    description: "+234 907 534 1378",
  },
  {
    icon: <FaEnvelope className="text-accent" />,
    title: "Email",
    description: "adebisiakinade.123@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-accent" />,
    title: "Address",
    description: "Scarborough, ON",
  },
];

import emailjs from "emailjs-com";
import React, { useState } from "react";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

type FormErrors = {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export default function Contact() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "firstname":
        return value.trim().length < 2 ? "First name is required" : undefined;
      case "lastname":
        return value.trim().length < 2 ? "Last name is required" : undefined;
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Valid email is required"
          : undefined;
      case "phone":
        return value && !/^\d{10,}/.test(value.replace(/\D/g, ""))
          ? "Valid phone number required"
          : undefined;
      case "service":
        return !value ? "Please select a service" : undefined;
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters" : undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
    setErrors({ ...errors, service: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await Promise.race([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            phone: form.phone,
            service: form.service,
            message: form.message,
          },
          EMAILJS_USER_ID
        ),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timeout")), 10000)
        ),
      ]);
      setStatus("success");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      setStatus("error");
      console.error("Email error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.18, delay: 0.12, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form  */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Work with Me</h3>
              <p className="text-gray-300">
                Fill out the form below to get in touch.
              </p>
              {/* Input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only" htmlFor="firstname">
                    Firstname
                  </label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Firstname"
                    value={form.firstname}
                    onChange={handleChange}
                    required
                    aria-label="Firstname"
                    aria-invalid={!!errors.firstname}
                    aria-describedby={errors.firstname ? "firstname-error" : undefined}
                    className={`focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      errors.firstname ? "border-red-500" : ""
                    }`}
                  />
                  {errors.firstname && (
                    <p id="firstname-error" className="text-red-400 text-sm mt-1">
                      {errors.firstname}
                    </p>
                  )}
                </div>
                <div>
                  <label className="sr-only" htmlFor="lastname">
                    Lastname
                  </label>
                  <Input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Lastname"
                    value={form.lastname}
                    onChange={handleChange}
                    required
                    aria-label="Lastname"
                    aria-invalid={!!errors.lastname}
                    aria-describedby={errors.lastname ? "lastname-error" : undefined}
                    className={`focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      errors.lastname ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lastname && (
                    <p id="lastname-error" className="text-red-400 text-sm mt-1">
                      {errors.lastname}
                    </p>
                  )}
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-label="Email address"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={handleChange}
                    aria-label="Phone number"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-400 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              {/* Select  */}
              <div>
                <label className="sr-only" htmlFor="service">
                  Service
                </label>
                <Select value={form.service} onValueChange={handleServiceChange}>
                  <SelectTrigger
                    className={`w-full focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      errors.service ? "border-red-500" : ""
                    }`}
                    id="service"
                    aria-label="Service"
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="webDevelopment">
                        Web Development
                      </SelectItem>
                      <SelectItem value="appDevelopment">
                        App Development
                      </SelectItem>
                      <SelectItem value="seoOptimization">
                        SEO Optimization
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p id="service-error" className="text-red-400 text-sm mt-1">
                    {errors.service}
                  </p>
                )}
              </div>
              {/* Text  */}
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className={`h-[200px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  aria-label="Message"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              {/* Button  */}
              <Button
                size={`md`}
                className="max-w-40 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                type="submit"
                disabled={loading}
                aria-label="Send message"
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
              {status === "success" && (
                <p className="text-green-400" role="status">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400" role="alert">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
          {/* Info  */}
          <div className="min-h-auto flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 text-wrap">
            <ul className="flex flex-col gap-10">
              {infoData.map((info, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[82px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent flex items-center justify-center rounded-md">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="flex-1 flex flex-col flex-wrap text-wrap">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-base sm:text-xl break-all break-words">
                        {info.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
