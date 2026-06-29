import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useTheme } from '../contexts/ThemeContext';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

const ParticleSwarm = ({ count = 180 }) => {
  const { theme } = useTheme();
  
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Swarm distribution in spherical shell
      const r = 2.8 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={theme === 'dark' ? '#00f2fe' : '#4f46e5'}
        sizeAttenuation
        transparent
        opacity={0.3}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const nodes = [
  { name: "TypeScript", pos: [1.5, 0.8, 0.4] as [number, number, number], color: "#3178c6" },
  { name: "React", pos: [-0.2, 1.4, 0.8] as [number, number, number], color: "#00f2fe" },
  { name: "Node.js", pos: [-1.4, -0.4, 0.8] as [number, number, number], color: "#22c55e" },
  { name: "NestJS", pos: [1.1, -0.8, 0.6] as [number, number, number], color: "#e0234e" },
  { name: "MongoDB", pos: [-1.6, 0.7, -0.6] as [number, number, number], color: "#10b981" },
  { name: "MySQL", pos: [1.6, -1.0, -0.6] as [number, number, number], color: "#00758f" },
  { name: "Git", pos: [-0.4, -1.4, -0.4] as [number, number, number], color: "#f05032" },
  { name: "Docker", pos: [-0.9, 0.6, -1.2] as [number, number, number], color: "#2496ed" },
  { name: "Next.js", pos: [0.7, 0.1, -1.0] as [number, number, number], color: "#777777" },
  { name: "Java", pos: [0.4, -1.2, -1.2] as [number, number, number], color: "#f89820" },
];

const connections = [
  [0, 1], // TypeScript - React
  [0, 3], // TypeScript - NestJS
  [1, 2], // React - Node.js
  [2, 3], // Node.js - NestJS
  [2, 4], // Node.js - MongoDB
  [3, 5], // NestJS - MySQL
  [2, 6], // Node.js - Git
  [6, 7], // Git - Docker
  [1, 8], // React - Next.js
  [5, 9], // MySQL - Java
  [0, 8], // TypeScript - Next.js
];

const TechGraph = () => {
  const { theme } = useTheme();
  const nodeRefs = useRef<(THREE.Group | null)[]>([]);
  const lineRefs = useRef<(THREE.Line | null)[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Initialize runtime physics properties for each node
  const physicsNodes = useMemo(() => {
    return nodes.map((node) => ({
      name: node.name,
      color: node.color,
      pos: new THREE.Vector3(...node.pos),
      vel: new THREE.Vector3(0, 0, 0),
      radius: 0.35, // collision radius
    }));
  }, []);

  useFrame((state) => {
    // 1. Get mouse 3D position projected at depth z = 0
    const mx = (state.pointer.x * state.viewport.width) / 2;
    const my = (state.pointer.y * state.viewport.height) / 2;
    const mouse3D = new THREE.Vector3(mx, my, 0);

    // 2. Mouse-to-Node Repulsion Physics (Only when very close: < 0.7 units)
    physicsNodes.forEach((node) => {
      const dx = node.pos.x - mouse3D.x;
      const dy = node.pos.y - mouse3D.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Repel only when cursor gets very close
      if (dist < 0.7) {
        const force = (0.7 - dist) / 0.7;
        const dirX = dx / (dist || 0.001);
        const dirY = dy / (dist || 0.001);
        
        // Gentle smooth impulse velocity
        node.vel.x += dirX * force * 0.022;
        node.vel.y += dirY * force * 0.022;
      }
    });

    // 3. Node-to-Node Soft Elastic Collisions (Gentle nudges)
    for (let i = 0; i < physicsNodes.length; i++) {
      for (let j = i + 1; j < physicsNodes.length; j++) {
        const nodeA = physicsNodes[i];
        const nodeB = physicsNodes[j];
        
        const dx = nodeB.pos.x - nodeA.pos.x;
        const dy = nodeB.pos.y - nodeA.pos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = nodeA.radius + nodeB.radius; // 0.70 units
        
        if (dist < minDist) {
          const nx = dx / (dist || 0.001);
          const ny = dy / (dist || 0.001);
          
          // Overlap resolution (gentle slide apart)
          const overlap = minDist - dist;
          nodeA.pos.x -= nx * overlap * 0.35;
          nodeA.pos.y -= ny * overlap * 0.35;
          nodeB.pos.x += nx * overlap * 0.35;
          nodeB.pos.y += ny * overlap * 0.35;
          
          const rvx = nodeB.vel.x - nodeA.vel.x;
          const rvy = nodeB.vel.y - nodeA.vel.y;
          const velAlongNormal = rvx * nx + rvy * ny;
          
          if (velAlongNormal < 0) {
            const restitution = 0.2; // Soft plastic collision, very low bounciness
            const impulseStrength = -(1 + restitution) * velAlongNormal / 2;
            
            nodeA.vel.x -= nx * impulseStrength;
            nodeA.vel.y -= ny * impulseStrength;
            nodeB.vel.x += nx * impulseStrength;
            nodeB.vel.y += ny * impulseStrength;
          }
        }
      }
    }

    // 4. Update Node Positions, Damping, and Spring-back to Home Coordinates
    const boundX = state.viewport.width / 2 - 0.35;
    const boundY = state.viewport.height / 2 - 0.35;

    physicsNodes.forEach((node, i) => {
      // 1. Gentle continuous organic drift using offset sine/cosine waves
      const time = state.clock.getElapsedTime();
      node.vel.x += Math.sin(time + i * 17) * 0.0003;
      node.vel.y += Math.cos(time + i * 23) * 0.0003;

      // Integrate velocity to update position
      node.pos.add(node.vel);

      // Boundary safety clamp
      if (node.pos.x < -boundX) { node.pos.x = -boundX; node.vel.x *= -0.4; }
      if (node.pos.x > boundX) { node.pos.x = boundX; node.vel.x *= -0.4; }
      if (node.pos.y < -boundY) { node.pos.y = -boundY; node.vel.y *= -0.4; }
      if (node.pos.y > boundY) { node.pos.y = boundY; node.vel.y *= -0.4; }

      // Heavy damping (0.84 friction coefficient) makes it feel like moving through fluid and stop quickly
      node.vel.multiplyScalar(0.84);

      // Update ref position
      if (nodeRefs.current[i]) {
        nodeRefs.current[i]!.position.copy(node.pos);
      }
    });

    // 5. Update Connection Lines
    connections.forEach(([start, end], idx) => {
      if (lineRefs.current[idx]) {
        const line = lineRefs.current[idx]!;
        const startPos = physicsNodes[start].pos;
        const endPos = physicsNodes[end].pos;

        const positions = line.geometry.attributes.position.array as Float32Array;
        positions[0] = startPos.x;
        positions[1] = startPos.y;
        positions[2] = startPos.z;
        positions[3] = endPos.x;
        positions[4] = endPos.y;
        positions[5] = endPos.z;
        
        line.geometry.attributes.position.needsUpdate = true;
      }
    });
  });

  useEffect(() => {
    document.body.style.cursor = hoveredIdx !== null ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hoveredIdx]);

  return (
    <group>
      {/* Connections (Three.js lines for dynamic buffer updates) */}
      {connections.map(([start, end], idx) => (
        <line key={idx} {...({ ref: (el: any) => { lineRefs.current[idx] = el; } } as any)}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([...nodes[start].pos, ...nodes[end].pos]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={theme === 'dark' ? '#00f2fe' : '#6366f1'}
            transparent
            opacity={0.25}
            linewidth={1}
          />
        </line>
      ))}

      {/* Nodes */}
      {nodes.map((node, idx) => {
        const isHovered = hoveredIdx === idx;
        const scale = isHovered ? 1.4 : 1.0;
        const shadowGlow = isHovered ? `0 0 10px ${node.color}` : 'none';
        const borderCol = isHovered ? node.color : (theme === 'dark' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(99, 102, 241, 0.15)');

        return (
          <group
            key={idx}
            ref={(el) => (nodeRefs.current[idx] = el)}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredIdx(idx);
            }}
            onPointerOut={() => {
              setHoveredIdx(null);
            }}
          >
            <mesh>
              <sphereGeometry args={[0.08 * scale, 16, 16]} />
              <meshBasicMaterial color={node.color} />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.07 * scale * 1.8, 16, 16]} />
              <meshBasicMaterial color={node.color} transparent opacity={isHovered ? 0.45 : 0.2} />
            </mesh>

            <Html distanceFactor={6} center>
              <div 
                className="px-2 py-0.5 text-[9px] font-bold font-mono border rounded shadow-md select-none transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(7, 7, 20, 0.9)' : 'rgba(255, 255, 255, 0.95)',
                  borderColor: borderCol,
                  color: isHovered ? node.color : 'var(--text-primary)',
                  boxShadow: shadowGlow,
                  transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {node.name}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.6} />
        <TechGraph />
        <ParticleSwarm count={150} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
