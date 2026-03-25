import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() =>
  import("@/pages/Home").then((m) => ({ default: m.Home }))
);
const About = lazy(() =>
  import("@/pages/About").then((m) => ({ default: m.About }))
);
const Services = lazy(() =>
  import("@/pages/Services").then((m) => ({ default: m.Services }))
);
const Contact = lazy(() =>
  import("@/pages/Contact").then((m) => ({ default: m.Contact }))
);
const Schedule = lazy(() =>
  import("@/pages/Schedule").then((m) => ({ default: m.Schedule }))
);
const FAQ = lazy(() =>
  import("@/pages/FAQ").then((m) => ({ default: m.FAQ }))
);
const Methodology = lazy(() =>
  import("@/pages/Methodology").then((m) => ({ default: m.Methodology }))
);
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((m) => ({ default: m.NotFound }))
);

export const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/metodologia" element={<Methodology />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/agenda" element={<Schedule />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
