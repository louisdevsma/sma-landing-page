"use client";

import { Button } from "@heroui/button";
import { motion } from "framer-motion";

interface FormField {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  autoComplete?: string;
  options?: string[];
  rows?: number;
}

interface ContactFormProps {
  fields: FormField[];
  submitButtonText: string;
  onSubmit?: (data: FormData) => void;
}

export const ContactForm = ({
  fields,
  submitButtonText,
  onSubmit,
}: ContactFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit?.(formData);
  };

  const renderField = (field: FormField) => {
    const baseClassName =
      "block w-full rounded-lg border-0 bg-white/5 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary transition-all sm:text-sm sm:leading-6 placeholder:text-gray-500";

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            className={baseClassName}
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            rows={field.rows || 6}
          />
        );
      case "select":
        return (
          <select
            className={`${baseClassName} [&>option]:bg-background-dark`}
            id={field.id}
            name={field.name}
          >
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            className={baseClassName}
            id={field.id}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
          />
        );
    }
  };

  // Group fields by layout: firstRow (2 cols), secondRow (2 cols), fullWidth fields
  const firstRowFields = fields.slice(0, 2);
  const secondRowFields = fields.slice(2, 4);
  const fullWidthFields = fields.slice(4);

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="lg:col-span-3">
      <motion.form
        action="#"
        className="flex flex-col gap-6"
        method="POST"
        onSubmit={handleSubmit}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {firstRowFields.map((field) => (
            <motion.div key={field.id} variants={fieldVariants}>
              <label
                className="block text-sm font-medium leading-6 text-white/80 mb-2"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              {renderField(field)}
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {secondRowFields.map((field) => (
            <motion.div key={field.id} variants={fieldVariants}>
              <label
                className="block text-sm font-medium leading-6 text-white/80 mb-2"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              {renderField(field)}
            </motion.div>
          ))}
        </motion.div>
        {fullWidthFields.map((field) => (
          <motion.div key={field.id} variants={fieldVariants}>
            <label
              className="block text-sm font-medium leading-6 text-white/80 mb-2"
              htmlFor={field.id}
            >
              {field.label}
            </label>
            {renderField(field)}
          </motion.div>
        ))}
        <motion.div variants={buttonVariants}>
          <Button
            color="primary"
            size="lg"
            className="w-full font-semibold transition-transform duration-300 hover:scale-105"
            type="submit"
          >
            {submitButtonText}
          </Button>
        </motion.div>
      </motion.form>
    </div>
  );
};
