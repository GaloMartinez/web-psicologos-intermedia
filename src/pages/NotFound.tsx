import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada</title>
      </Helmet>

      <section className="bg-white py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto"
          >
            <p className="font-sans text-8xl font-bold text-primary/15 mb-2 leading-none">
              404
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4 leading-tight">
              Página no encontrada
            </h1>
            <p className="font-sans text-lg text-neutral-600 mb-10 leading-relaxed">
              La página que estás buscando no existe o fue movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/">Volver al inicio</Button>
              <Button variant="outline" href="/contacto">
                Ir a contacto
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};
