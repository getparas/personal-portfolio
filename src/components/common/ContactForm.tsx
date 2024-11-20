import React, { useState, useEffect } from "react";
import { FormData } from "./types/ContactForm.types";
import Button from "../Ui/Button";
import {
  validateEmail,
  validateMessage,
  validateName,
} from "@/utils/formValidation";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  useEffect(() => {
    if (touched.name) {
      setErrors((prev) => ({ ...prev, name: validateName(formData.name) }));
    }
    if (touched.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(formData.email) }));
    }
    if (touched.message) {
      setErrors((prev) => ({
        ...prev,
        message: validateMessage(formData.message),
      }));
    }
  }, [formData, touched]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (!Object.values(newErrors).some((error) => error !== "")) {
      // Add your form submission logic here
      console.log(formData);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="bg-white rounded-xl p-8 w-full flex items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-secondary font-bold text-base">
                Hotline 24/7
              </h2>
              <p className="text-2xl font-bold text-secondaryV2">
                (+23) 5535 68 68
              </p>
            </div>
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-base text-secondary">
                  Address:{" "}
                </span>
                <span className="text-base text-secondaryV2 font-normal">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </span>
              </div>
              <div>
                <span className="font-semibold text-base text-secondary">
                  Email:{" "}
                </span>
                <span className="text-base text-secondaryV2 font-normal">
                  navaeh.simmons@example.com
                </span>
              </div>
              <div>
                <span className="font-semibold text-base text-secondary">
                  Fax:{" "}
                </span>
                <span className="text-base text-secondaryV2 font-normal">
                  (702) 555-0122
                </span>
              </div>
              <div>
                <span className="font-semibold text-base text-secondary">
                  Work Hour:{" "}
                </span>
                <span className="text-base text-secondaryV2 font-normal">
                  Mon - Sat: 9:00 - 18:00
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-white focus:outline-primary"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {touched.name && errors.name && (
                  <p className="text-white text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white focus:outline-primary"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {touched.email && errors.email && (
                  <p className="text-white text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-lg bg-white focus:outline-primary"
              />
              <div>
                <textarea
                  name="message"
                  placeholder="How can we help you"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white resize-none focus:outline-primary"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {touched.message && errors.message && (
                  <p className="text-white text-sm mt-1">{errors.message}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-gray-300"
                checked={formData.terms}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, terms: e.target.checked }))
                }
              />
              <label htmlFor="terms" className="text-sm text-white font-normal">
                By submitting, I'm agreed to the{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button
                variant="primary"
                className="flex items-center bg-[#00489A] justify-center w-54 text-white font-bold text-xl"
              >
                Request Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
