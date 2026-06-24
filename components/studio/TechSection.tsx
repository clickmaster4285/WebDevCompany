


import { useEffect, useRef } from "react";
import type * as THREE_TYPE from "three";

const TECH = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Three.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "GSAP", logo: "https://raw.githubusercontent.com/greensock/GSAP/master/src/assets/logo.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Postgres", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "Rust", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Svelte", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
];

export function TechSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let cleanup = () => {};
    (async () => {
      const THREE = await import("three");
      const w = el.clientWidth;
      const h = el.clientHeight;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
      camera.position.z = 12;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.setClearColor(0, 0);
      el.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      // Build nodes on a sphere - adjusted for more items
      const count = TECH.length;
      const radius = 4.5;
      const positions: THREE_TYPE.Vector3[] = [];
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        positions.push(new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ));
      }

      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xa78bfa });
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.2 });
      const nodes: THREE_TYPE.Group[] = [];
      positions.forEach((p) => {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.SphereGeometry(0.11, 24, 24), nodeMat));
        g.add(new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 24), glowMat));
        g.position.copy(p);
        group.add(g);
        nodes.push(g);
      });

      // Lines connecting near-neighbors
      const lineMat = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.2 });
      const linePos: number[] = [];
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          if (positions[i].distanceTo(positions[j]) < 5.5) {
            linePos.push(positions[i].x, positions[i].y, positions[i].z, positions[j].x, positions[j].y, positions[j].z);
          }
        }
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      group.add(lines);

      // particles
      const pcount = 600;
      const ppos = new Float32Array(pcount * 3);
      for (let i = 0; i < pcount; i++) {
        ppos[i * 3] = (Math.random() - 0.5) * 18;
        ppos[i * 3 + 1] = (Math.random() - 0.5) * 12;
        ppos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(ppos, 3));
      const particles = new THREE.Points(
        pGeo,
        new THREE.PointsMaterial({ color: 0xa78bfa, size: 0.02, transparent: true, opacity: 0.4 })
      );
      scene.add(particles);

      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        mouse.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
        mouse.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMove);
      const onResize = () => {
        camera.aspect = el.clientWidth / el.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(el.clientWidth, el.clientHeight);
      };
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();
      const animate = () => {
        const t = clock.getElapsedTime();
        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;
        group.rotation.y = t * 0.12 + mouse.x * 0.6;
        group.rotation.x = mouse.y * 0.4;
        particles.rotation.y = t * 0.02;
        particles.rotation.x = t * 0.01;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        lineGeo.dispose();
        pGeo.dispose();
        if (renderer.domElement.parentElement === el) el.removeChild(renderer.domElement);
      };
    })();
    return () => cleanup();
  }, []);

  return (
    <section id="stack" className="relative overflow-hidden py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-[1fr_1fr] md:px-10">
        <div>
          <div className="text-eyebrow mb-4">/ Technology</div>
          <h2 className="text-display text-[clamp(2rem,5vw,4rem)] text-ink">
            An ecosystem of <span className="text-violet-soft">modern tools.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            We choose technology that compounds — battle-tested frameworks paired with cutting-edge runtimes
            and a deep bench of in-house libraries.
          </p>
          <div className="mt-10 flex max-h-[400px] flex-wrap gap-3 overflow-y-auto pr-2">
            {TECH.map((tech) => (
              <div 
                key={tech.name} 
                className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-ink-soft transition-all hover:scale-105 hover:bg-white/10"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="h-4 w-4 object-contain"
                  onError={(e) => {
                    // Fallback for broken images
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div ref={ref} className="relative aspect-square w-full" />
      </div>
    </section>
  );
}