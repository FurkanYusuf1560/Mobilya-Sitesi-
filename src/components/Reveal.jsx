import { useEffect, useRef, useState } from "react";

function Reveal({ as = "div", gecikme = 0, className = "", children, ...rest }) {
  const Etiket = as;
  const ref = useRef(null);
  const [gorunur, setGorunur] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGorunur(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Etiket
      ref={ref}
      className={`reveal ${gorunur ? "reveal--gorunur" : ""} ${className}`}
      style={gecikme ? { transitionDelay: `${gecikme}ms` } : undefined}
      {...rest}
    >
      {children}
    </Etiket>
  );
}

export default Reveal;
