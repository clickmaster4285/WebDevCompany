


// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useEffect, useState, useMemo } from "react";
// import * as THREE from "three";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import process1 from "@/public/assets/process1.png";
// import process2 from "@/public/assets/process2.png";
// import process3 from "@/public/assets/process3.png";
// import process4 from "@/public/assets/process4.png";
// import process5 from "@/public/assets/process5.png";

// const phases = [
//   { num: "01", label: "Discovery", desc: "We map the full terrain — users, market, competitors, and constraints. Assumptions get stress-tested, blind spots get surfaced, and clear hypotheses are formed before anything else moves.", image: process1 },
//   { num: "02", label: "Strategy", desc: "We sequence the work, lock in the metrics, and align every stakeholder on what success actually looks like. No ambiguity, no drift — just a focused plan the whole team can execute against.", image: process2 },
//   { num: "03", label: "Design", desc: "Design systems, motion language, and interface logic come alive. Every decision is grounded in user behavior and brand intent — built for clarity, obsessed with feel.", image: process3 },
//   { num: "04", label: "Development", desc: "Performance-obsessed engineering from infrastructure to interface. We write clean, scalable code and sweat every interaction detail — because slow or broken isn't an option.", image: process4 },
//   { num: "05", label: "Launch", desc: "We ship with precision, measure what actually matters, and iterate fast on real data. The work doesn't stop at go-live — we compound results until the numbers prove it.", image: process5 },
// ];


// function ImagePlane({ texture, phase }: { texture: THREE.Texture | null; phase: number }) {
//   const meshRef = useRef<THREE.Mesh>(null!);
//   const prevPhaseRef = useRef(phase);

//   useEffect(() => {
//     if (!meshRef.current || phase === prevPhaseRef.current) return;

//     const mesh = meshRef.current;

//     // Soft scale animation on image change (no rotation)
//     gsap.to(mesh.scale, {
//       x: 1.06,
//       y: 1.06,
//       duration: 0.35,
//       ease: "power2.out",
//       onComplete: () => {
//         gsap.to(mesh.scale, { 
//           x: 1, 
//           y: 1, 
//           duration: 0.45, 
//           ease: "power2.inOut" 
//         });
//       },
//     });

//     prevPhaseRef.current = phase;
//   }, [phase]);

//   useFrame((state) => {
//     if (!meshRef.current) return;
//     const t = state.clock.elapsedTime;

//     // Very subtle idle breathing (scale only - no rotation)
//     const idleScale = 1 + Math.sin(t * 0.12) * 0.015;
//     meshRef.current.scale.setScalar(idleScale);
//   });

//   return (
//     <mesh ref={meshRef}>
//       <planeGeometry args={[3.6, 3.6]} />
//       <meshStandardMaterial
//         map={texture}
//         color="#ffffff"
//         metalness={0.5}
//         roughness={0.4}
//         transparent
//         opacity={0.98}
//       />
//     </mesh>
//   );
// }

// export function Process() {
//   const pinRef = useRef<HTMLDivElement>(null);
//   const [phase, setPhase] = useState(0);

//   const textures = useMemo(() => {
//     const loader = new THREE.TextureLoader();
//     return phases.map((p) => {
//       const tex = loader.load(p.image as string);
//       tex.anisotropy = 16;
//       return tex;
//     });
//   }, []);

//   useEffect(() => {
//     if (!pinRef.current) return;

//     const totalScroll = window.innerHeight * phases.length;

//     const trigger = ScrollTrigger.create({
//       trigger: pinRef.current,
//       start: "top top",
//       end: `+=${totalScroll}`,
//       pin: true,
//       scrub: 0.5,
//       onUpdate: (self) => {
//         const progress = Math.max(0, Math.min(1, self.progress));
//         const newPhase = Math.floor(progress * phases.length);
//         setPhase(newPhase);
//       },
//     });

//     return () => {
//       trigger.kill();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section id="process" className="relative min-h-screen">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto sm:px-6 pt-24 md:pt-32 pb-16">
//         <div className="text-eyebrow mb-4">/ Process</div>
//         <h2 className="text-display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-ink">
//           A measured journey from <span className="text-violet-soft">idea to impact.</span>
//         </h2>
//       </div>

//       {/* Scroll Pinned Section */}
//       <div ref={pinRef} className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0 radial-bg opacity-50 max-w-7xl mx-auto" />

      
//         <div className="absolute inset-0 grid md:grid-cols-2 max-w-7xl mx-auto left-0 right-0">
//           {/* Left: Straight Image */}
//           <div className="relative flex items-center justify-center">
//             <Canvas
//               camera={{ position: [0, 0, 5], fov: 50 }}
//               dpr={[1, 2]}
//               gl={{ alpha: true, antialias: true }}
//             >
//               <ambientLight intensity={0.8} />
//               <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
//               <pointLight position={[-5, -4, 4]} intensity={0.8} color="#ffffff" />

//               <ImagePlane texture={textures[phase]} phase={phase} />
//             </Canvas>
//           </div>

//           {/* Right: Text */}
//           <div className="relative flex items-center px-6 md:px-12 z-10">
//             <div className="relative w-full min-h-[420px] flex items-center">
//               {phases.map((p, i) => (
//                 <div
//                   key={p.num}
//                   className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out ${
//                     i === phase
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-12 pointer-events-none"
//                   }`}
//                 >
//                   <div className="text-mono text-primary mb-4">PHASE {p.num}</div>
//                   <h3 className="text-display text-white text-[10vw] md:text-[7vw] leading-none mb-6">
//                     {p.label}
//                   </h3>
//                   <p className="text-white/60 text-lg max-w-md">{p.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Progress Rail */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {phases.map((_, i) => (
//             <div
//               key={i}
//               className={`h-1 rounded-full transition-all duration-300 ${
//                 i === phase ? "w-12 bg-[#7C3AED]" : "w-6 bg-white/20"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your assets
import process1 from "@/public/assets/process1.png";
import process2 from "@/public/assets/process2.png";
import process3 from "@/public/assets/process3.png";
import process4 from "@/public/assets/process4.png";
import process5 from "@/public/assets/process5.png";

// Ensure GSAP is registered
gsap.registerPlugin(ScrollTrigger);

const phases = [
  { num: "01", label: "Discovery", desc: "We map the full terrain — users, market, competitors, and constraints. Assumptions get stress-tested, blind spots get surfaced, and clear hypotheses are formed before anything else moves.", image: process1 },
  { num: "02", label: "Strategy", desc: "We sequence the work, lock in the metrics, and align every stakeholder on what success actually looks like. No ambiguity, no drift — just a focused plan the whole team can execute against.", image: process2 },
  { num: "03", label: "Design", desc: "Design systems, motion language, and interface logic come alive. Every decision is grounded in user behavior and brand intent — built for clarity, obsessed with feel.", image: process3 },
  { num: "04", label: "Development", desc: "Performance-obsessed engineering from infrastructure to interface. We write clean, scalable code and sweat every interaction detail — because slow or broken isn't an option.", image: process4 },
  { num: "05", label: "Launch", desc: "We ship with precision, measure what actually matters, and iterate fast on real data. The work doesn't stop at go-live — we compound results until the numbers prove it.", image: process5 },
];

function ImagePlane({ texture, phase }: { texture: THREE.Texture | null; phase: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const prevPhaseRef = useRef(phase);

  useEffect(() => {
    if (!meshRef.current || phase === prevPhaseRef.current) return;
    const mesh = meshRef.current;

    gsap.to(mesh.scale, {
      x: 1.06, y: 1.06, duration: 0.35, ease: "power2.out",
      onComplete: () => {
        gsap.to(mesh.scale, { x: 1, y: 1, duration: 0.45, ease: "power2.inOut" });
      },
    });
    prevPhaseRef.current = phase;
  }, [phase]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const idleScale = 1 + Math.sin(t * 0.12) * 0.015;
    meshRef.current.scale.setScalar(idleScale);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3.6, 3.6]} />
      <meshStandardMaterial map={texture} color="#ffffff" metalness={0.5} roughness={0.4} transparent opacity={0.98} />
    </mesh>
  );
}

export function Process() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);

const textures = useMemo(() => {
  // Guard: don't run Three/DOM code on the server
  if (typeof window === "undefined" || typeof document === "undefined") {
    return phases.map(() => null);
  }

  const loader = new THREE.TextureLoader();
  // Accessing .src for Next.js StaticImageData (safe in browser)
  return phases.map((p) => {
    const tex = loader.load(p.image.src);
    tex.anisotropy = 16;
    return tex;
  });
}, []);

  useEffect(() => {
    if (!pinRef.current) return;
    const totalScroll = window.innerHeight * phases.length;

    const trigger = ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: `+=${totalScroll}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = Math.max(0, Math.min(1, self.progress));
        const newPhase = Math.floor(progress * phases.length);
        if (newPhase < phases.length) setPhase(newPhase);
      },
    });

    return () => { trigger.kill(); };
  }, []);

  return (
    <section id="process" className="relative min-h-screen">
      <div className="max-w-7xl mx-auto sm:px-6 pt-24 md:pt-32 pb-16">
        <div className="text-eyebrow mb-4">/ Process</div>
        <h2 className="text-display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-ink">
          A measured journey from <span className="text-violet-soft">idea to impact.</span>
        </h2>
      </div>

      <div ref={pinRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 grid md:grid-cols-2 max-w-7xl mx-auto">
          <div className="relative flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
              <ambientLight intensity={0.8} />
              <pointLight position={[5, 5, 5]} intensity={1.2} />
              <ImagePlane texture={textures[phase]} phase={phase} />
            </Canvas>
          </div>

          <div className="relative flex items-center px-6 md:px-12 z-10">
            <div className="relative w-full min-h-105">
              {phases.map((p, i) => (
                <div key={p.num} className={`absolute inset-0 transition-all duration-700 ${i === phase ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                  <div className="text-mono mb-4">PHASE {p.num}</div>
                  <h3 className="text-display text-white text-[10vw] md:text-[7vw] leading-none mb-6">{p.label}</h3>
                  <p className="text-white/60 text-lg max-w-md">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {phases.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === phase ? "w-12 bg-[#7C3AED]" : "w-6 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}