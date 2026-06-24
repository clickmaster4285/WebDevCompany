


import { useEffect, useRef } from "react";
import type * as THREE_TYPE from "three";

/**
 * Lightweight Three.js floating browser scene. Built as a tilting glass card
 * with floating orbiting tech-icon nodes and a particle field. SSR safe — all
 * code runs inside useEffect.
 */
export function HeroBrowserScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      const width = el.clientWidth;
      const height = el.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 8);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      el.appendChild(renderer.domElement);

      // Group that holds everything we want to tilt
      const root = new THREE.Group();
      scene.add(root);

      // "Browser" – a flat rounded card. Use shape geometry.
      const browserGroup = new THREE.Group();
      root.add(browserGroup);

      const cardW = 5.6;
      const cardH = 3.6;
      const radius = 0.28;

      const shape = new THREE.Shape();
      const x = -cardW / 2;
      const y = -cardH / 2;
      shape.moveTo(x + radius, y);
      shape.lineTo(x + cardW - radius, y);
      shape.quadraticCurveTo(x + cardW, y, x + cardW, y + radius);
      shape.lineTo(x + cardW, y + cardH - radius);
      shape.quadraticCurveTo(x + cardW, y + cardH, x + cardW - radius, y + cardH);
      shape.lineTo(x + radius, y + cardH);
      shape.quadraticCurveTo(x, y + cardH, x, y + cardH - radius);
      shape.lineTo(x, y + radius);
      shape.quadraticCurveTo(x, y, x + radius, y);

      const cardGeo = new THREE.ShapeGeometry(shape, 32);
      const cardMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.92 });
      const card = new THREE.Mesh(cardGeo, cardMat);
      browserGroup.add(card);

      // Card outline
      const edges = new THREE.EdgesGeometry(cardGeo);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.5 }));
      browserGroup.add(line);

      // Browser top bar dots
      [-1, 0, 1].forEach((i, idx) => {
        const dot = new THREE.Mesh(
          new THREE.CircleGeometry(0.07, 24),
          new THREE.MeshBasicMaterial({ color: idx === 0 ? 0xff5f57 : idx === 1 ? 0xfdbc2c : 0x27c93f })
        );
        dot.position.set(-cardW / 2 + 0.3 + i * 0.22 + 0.22, cardH / 2 - 0.28, 0.01);
        browserGroup.add(dot);
      });

      // URL bar
      const urlBar = new THREE.Mesh(
        new THREE.PlaneGeometry(cardW - 1.4, 0.28),
        new THREE.MeshBasicMaterial({ color: 0x1a1a1a })
      );
      urlBar.position.set(0.35, cardH / 2 - 0.28, 0.01);
      browserGroup.add(urlBar);

      // Inner UI: stacked plates (chart, cards)
      const plate = (w: number, h: number, color: number, opacity = 1) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, h),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity })
        );
        return m;
      };

      // sidebar
      const sidebar = plate(0.9, cardH - 0.9, 0x111111);
      sidebar.position.set(-cardW / 2 + 0.45 + 0.05, -0.25, 0.02);
      browserGroup.add(sidebar);

      // main chart
      const chartBg = plate(cardW - 1.8, 1.4, 0x111111);
      chartBg.position.set(0.4, 0.45, 0.02);
      browserGroup.add(chartBg);

      // animated chart line (a tube curve)
      const points: THREE_TYPE.Vector3[] = [];
      const segments = 40;
      for (let i = 0; i < segments; i++) {
        const t = i / (segments - 1);
        const yy = Math.sin(t * Math.PI * 2) * 0.25 + Math.sin(t * 9) * 0.08;
        points.push(new THREE.Vector3(-1.5 + t * 3.0, yy + 0.25, 0.04));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 80, 0.025, 8, false),
        new THREE.MeshBasicMaterial({ color: 0xa78bfa })
      );
      browserGroup.add(tube);

      // stat cards
      const c1 = plate(1.0, 0.85, 0x161616);
      c1.position.set(-0.7, -1.05, 0.02);
      browserGroup.add(c1);
      const c2 = plate(1.0, 0.85, 0x161616);
      c2.position.set(0.5, -1.05, 0.02);
      browserGroup.add(c2);
      const c3 = plate(1.0, 0.85, 0x1a0f2e);
      c3.position.set(1.7, -1.05, 0.02);
      browserGroup.add(c3);

      // little accent bars
      const accent = plate(1.0, 0.1, 0x8b5cf6);
      accent.position.set(1.7, -0.7, 0.03);
      browserGroup.add(accent);

      // Floating tech-icon nodes (glowing spheres + ring)
      const techGroup = new THREE.Group();
      root.add(techGroup);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xa78bfa });
      const nodeGlowMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.25 });
      const nodePositions: THREE_TYPE.Vector3[] = [
        new THREE.Vector3(-3.5, 1.4, 1.5),
        new THREE.Vector3(3.4, 1.7, 1.0),
        new THREE.Vector3(-3.6, -1.2, 0.6),
        new THREE.Vector3(3.7, -1.0, 1.4),
      ];
      const nodes: THREE_TYPE.Group[] = [];
      nodePositions.forEach((p) => {
        const g = new THREE.Group();
        const core = new THREE.Mesh(new THREE.SphereGeometry(0.12, 24, 24), nodeMat);
        const glow = new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 24), nodeGlowMat);
        g.add(core);
        g.add(glow);
        g.position.copy(p);
        techGroup.add(g);
        nodes.push(g);
      });

      // Particle field
      const particleCount = 220;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 14;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pMat = new THREE.PointsMaterial({ color: 0xa78bfa, size: 0.03, transparent: true, opacity: 0.6 });
      const particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      // mouse parallax
      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMove);

      const onResize = () => {
        if (!el) return;
        const w = el.clientWidth;
        const h = el.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();
      const animate = () => {
        const t = clock.getElapsedTime();
        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;

        root.rotation.y = mouse.x * 0.25 + Math.sin(t * 0.4) * 0.04;
        root.rotation.x = -mouse.y * 0.18 + Math.sin(t * 0.3) * 0.03;
        browserGroup.position.y = Math.sin(t * 0.8) * 0.12;

        nodes.forEach((n, i) => {
          const base = nodePositions[i];
          n.position.y = base.y + Math.sin(t * 1.2 + i) * 0.18;
          n.position.x = base.x + Math.cos(t * 0.6 + i) * 0.1;
          n.rotation.y = t * 0.5;
        });

        particles.rotation.y = t * 0.02;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        cardGeo.dispose();
        pGeo.dispose();
        if (renderer.domElement.parentElement === el) {
          el.removeChild(renderer.domElement);
        }
      };
    })();

    return () => cleanup();
  }, []);

  return (
    <div className="relative h-full w-full">
      <div ref={ref} className="absolute inset-0" />
      {/* Floating tech labels overlay */}
      <div className="pointer-events-none absolute inset-0">
        <TechLabel className="left-[6%] top-[18%]" label="React" />
        <TechLabel className="right-[8%] top-[14%]" label="Next.js" />
        <TechLabel className="left-[4%] bottom-[18%]" label="TypeScript" />
        <TechLabel className="right-[6%] bottom-[14%]" label="Node.js" />
      </div>
    </div>
  );
}

function TechLabel({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="glass rounded-full px-3 py-1.5 text-[11px] tracking-wide text-ink-soft">
        {label}
      </div>
    </div>
  );
}