import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div>
        <h1 id="title" className="section-heading">
          Get the highlights
        </h1>
      </div>
    </section>
  );
};

export default Highlights;
