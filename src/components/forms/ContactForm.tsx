import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";

export const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleSubmit,
    handleChange,
  } = useContactForm();

  const inputBase =
    "font-sans w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors";

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
        <p className="font-sans text-neutral-600 leading-relaxed">
          {siteConfig.contact.successMessage}
        </p>
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
          placeholder="Tu nombre completo"
          className={`${inputBase} ${errors.name ? "border-red-500" : "border-neutral-200"}`}
        />
        {errors.name && (
          <p className="font-sans mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="font-sans block text-sm font-medium text-neutral-900 mb-2">
          Prefiero que me contacten por <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {(["whatsapp", "email"] as const).map((method) => (
            <label key={method} className="font-sans flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={formData.contactMethod === method}
                onChange={handleChange}
                className="mr-2 accent-accent"
              />
              <span className="text-neutral-700 capitalize">{method === "whatsapp" ? "WhatsApp" : "Email"}</span>
            </label>
          ))}
        </div>
      </div>

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
          className={`${inputBase} ${errors.reason ? "border-red-500" : "border-neutral-200"}`}
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
          placeholder="Cuéntame brevemente qué te trae a consultar..."
          className={`${inputBase} resize-none ${errors.message ? "border-red-500" : "border-neutral-200"}`}
        />
        {errors.message && (
          <p className="font-sans mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </motion.form>
  );
};
