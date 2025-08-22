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
    description: "Ibadan, Nigeria",
  },
];

import emailjs from "emailjs-com";
import React, { useState } from "react";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.send(
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
      );
      setStatus("success");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("error");
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
                  className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                />
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
                  className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                />
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
                  className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                />
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
                  className="focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                />
              </div>
              {/* Select  */}
              <label className="sr-only" htmlFor="service">
                Service
              </label>
              <Select value={form.service} onValueChange={handleServiceChange}>
                <SelectTrigger
                  className="w-full focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  id="service"
                  aria-label="Service"
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
              {/* Text  */}
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                className="h-[200px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                placeholder="Message..."
                value={form.message}
                onChange={handleChange}
                required
                aria-label="Message"
              />
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
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {infoData.map((info, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent flex items-center justify-center rounded-md">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-xl">{info.description}</h3>
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
