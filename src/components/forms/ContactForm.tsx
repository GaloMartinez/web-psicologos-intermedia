import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { siteConfig } from "../../config/siteConfig";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "whatsapp",
    reason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.reason) {
      newErrors.reason = "Por favor selecciona un motivo";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío (en producción, aquí iría la integración real)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form
    setFormData({
      name: "",
      contactMethod: "whatsapp",
      reason: "",
      message: "",
    });

    // Scroll to success message
    setTimeout(() => {
      const successElement = document.getElementById("success-message");
      successElement?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        id="success-message"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[color:var(--color-accent-90)]/10 border-2 border-accent/30 rounded-lg p-8 text-center"
      >
        <div className="mb-4">
          <svg
            className="w-16 h-16 text-accent mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-medium text-primary mb-2 leading-snug">
          Mensaje enviado correctamente
        </h3>
        <p className="font-sans text-neutral-600 leading-relaxed">{siteConfig.contact.successMessage}</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Nombre */}
      <div>
        <label
          htmlFor="name"
          className="font-sans block text-sm font-medium text-neutral-900 mb-2"
        >
          Nombre <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`font-sans w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
            errors.name ? "border-red-500" : "border-neutral-200"
          }`}
          placeholder="Tu nombre completo"
        />
        {errors.name && (
          <p className="font-sans mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Método de contacto preferido */}
      <div>
        <label className="font-sans block text-sm font-medium text-neutral-900 mb-2">
          Prefiero que me contacten por <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          <label className="font-sans flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="whatsapp"
              checked={formData.contactMethod === "whatsapp"}
              onChange={handleChange}
              className="mr-2 accent-accent"
            />
            <span className="text-neutral-700">WhatsApp</span>
          </label>
          <label className="font-sans flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={formData.contactMethod === "email"}
              onChange={handleChange}
              className="mr-2 accent-accent"
            />
            <span className="text-neutral-700">Email</span>
          </label>
        </div>
      </div>

      {/* Motivo */}
      <div>
        <label
          htmlFor="reason"
          className="font-sans block text-sm font-medium text-neutral-900 mb-2"
        >
          Motivo de consulta <span className="text-red-500">*</span>
        </label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className={`font-sans w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors ${
            errors.reason ? "border-red-500" : "border-neutral-200"
          }`}
        >
          <option value="">Selecciona un motivo</option>
          {siteConfig.contact.formReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.reason && (
          <p className="font-sans mt-1 text-sm text-red-600">{errors.reason}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="message"
          className="font-sans block text-sm font-medium text-neutral-900 mb-2"
        >
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`font-sans w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none ${
            errors.message ? "border-red-500" : "border-neutral-200"
          }`}
          placeholder="Cuéntame brevemente qué te trae a consultar..."
        />
        {errors.message && (
          <p className="font-sans mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </motion.form>
  );
};
