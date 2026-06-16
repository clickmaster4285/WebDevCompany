"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import process1 from "@/assets/process1.png";
import process2 from "@/assets/process2.png";
import process3 from "@/assets/process3.png";
import process4 from "@/assets/process4.png";
import process5 from "@/assets/process5.png";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  { num: "01", label: "Discovery", desc: "We map the terrain...", image: process1 },
  { num: "02", label: "Strategy", desc: "We sequence the work...", image: process2 },
  { num: "03", label: "Design", desc: "Design systems come alive...", image: process3 },
  { num: "04", label: "Development", desc: "Performance-obsessed engineering...", image: process4 },
  { num: "05", label: "Launch", desc: "We ship with precision...", image: process5 },
];

function ImagePlane({
  texture,
  phase,
}: {
  texture: THREE.Texture | null;
  phase: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const prevPhase = useRef(phase);

  useEffect(() => {
    if (!meshRef.current || phase === prevPhase.current) return;

    gsap.to(meshRef.current.scale, {
      x: 1.06,
      y: 1.06,
      duration: 0.35,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(meshRef.current.scale, {
          x: 1,
          y: 1,
          duration: 0.45,
          ease: "power2.inOut",
        });
      },
    });

    prevPhase.current = phase;
  }, [phase]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const idle = 1 + Math.sin(t * 0.12) * 0.015;
    meshRef.current.scale.setScalar(idle);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3.6, 3.6]} />
      <meshStandardMaterial
        map={texture ?? undefined}
        metalness={0.4}
        roughness={0.5}
        transparent
        opacity={0.98}
      />
    </mesh>
  );
}

export function Process() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [textures, setTextures] = useState<THREE.Texture[]>([]);

  // ✅ LOAD TEXTURES ONLY CLIENT SIDE
  useEffect(() => {
    const loader = new THREE.TextureLoader();

    const loaded = phases.map((p) => {
      const tex = loader.load(p.image.src); // IMPORTANT FIX for Next.js imports
      tex.anisotropy = 16;
      return tex;
    });

    setTextures(loaded);
  }, []);

  // ✅ SCROLL CONTROL
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
        const progress = self.progress;

        let newPhase = Math.floor(progress * phases.length);

        // ✅ FIX OUT OF RANGE BUG
        if (newPhase >= phases.length) newPhase = phases.length - 1;

        setPhase(newPhase);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section id="process" className="relative min-h-screen">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto sm:px-6 pt-24 md:pt-32 pb-16">
        <div className="text-eyebrow mb-4">/ Process</div>
        <h2 className="text-display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-ink">
          A measured journey from{" "}
          <span className="text-violet-soft">idea to impact.</span>
        </h2>
      </div>

      {/* PINNED SECTION */}
      <div ref={pinRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 grid md:grid-cols-2 max-w-7xl mx-auto">

          {/* LEFT: 3D */}
          <div className="flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <pointLight position={[5, 5, 5]} intensity={1.2} />

              <ImagePlane
                texture={textures[phase] ?? null}
                phase={phase}
              />
            </Canvas>
          </div>

          {/* RIGHT: TEXT */}
          <div className="flex items-center px-6 md:px-12">
            <div className="relative w-full min-h-[420px] flex items-center">
              {phases.map((p, i) => (
                <div
                  key={p.num}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ${
                    i === phase
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12 pointer-events-none"
                  }`}
                >
                  <div className="text-mono text-primary mb-4">
                    PHASE {p.num}
                  </div>

                  <h3 className="text-display text-white text-[10vw] md:text-[7vw] leading-none mb-6">
                    {p.label}
                  </h3>

                  <p className="text-white/60 text-lg max-w-md">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {phases.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === phase ? "w-12 bg-primary-600" : "w-6 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}