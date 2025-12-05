import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Using React Router hook
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Users, 
  Lightbulb, 
  Rocket, 
  FileInput, 
  CheckCircle, 
  UserPlus, 
  Zap, 
  Users2, 
  DollarSign, 
  Award
} from 'lucide-react';

const MissionWorkflow = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  // Handle auto-scrolling based on URL hash (e.g., /mission#workflow)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const missionData = [
    {
      title: "Connect",
      icon: Users,
      desc: "We aim to build a strong network of mentors, peers, and industry leaders. Our club will be the central hub to find collaborators and expert advice.",
      color: "from-blue-400 to-cyan-300"
    },
    {
      title: "Innovate",
      icon: Lightbulb,
      desc: "Fostering a culture of creativity. Through Ideation Sprints and Pitch Marathons, we encourage thinking differently to solve real-world problems.",
      color: "from-purple-400 to-pink-300"
    },
    {
      title: "Empower",
      icon: Rocket,
      desc: "Kickstarting entrepreneurial journeys with guidance, resources, and insightful talks on business planning and product development.",
      color: "from-amber-400 to-orange-300"
    }
  ];

  const workflowSteps = [
    { title: "Idea Intake", icon: FileInput, desc: "Submit your raw startup concepts." },
    { title: "Peer Validation", icon: CheckCircle, desc: "Get feedback from the community." },
    { title: "Mentorship", icon: UserPlus, desc: "Guidance from industry experts." },
    { title: "Prototype Sprint", icon: Zap, desc: "Rapid MVP development phase." },
    { title: "Buddy Assignment", icon: Users, desc: "Pairing with experienced seniors." },
    { title: "Idea Refinement", icon: Lightbulb, desc: "Polishing the business model." },
    { title: "Team Formation", icon: Users2, desc: "Building the core founding team." },
    { title: "Revenue", icon: DollarSign, desc: "Establishing monetization channels." },
    { title: "AMM", icon: Award, desc: "Annual Members Meeting & Showcase." },
  ];

  return (
    <div className="bg-[#050B14] min-h-screen text-white pt-20 pb-20 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-10">
        
        {/* --- MISSION SECTION --- */}
        <div className="mb-32 scroll-mt-32" id="mission">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-300">
              Our Mission
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              PCCOER E-Cell is dedicated to cultivating the next generation of innovators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {missionData.map((item, index) => (
  <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
    
    {/* Icon (Uses the gradient color from data) */}
    <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
      <item.icon className="text-white h-6 w-6" />
    </div>

    {/* Title (Forced to White) */}
    <h3 className="text-2xl font-bold text-white mb-3">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-gray-400 leading-relaxed">
      {item.desc}
    </p>
  </div>
))}
          </div>
        </div>

        {/* --- WORKFLOW SECTION --- */}
        <div ref={containerRef} className="relative scroll-mt-32" id="workflow">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white to-purple-300">
              Startup Workflow
            </h2>
            <p className="text-gray-400">The roadmap from concept to company</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2 h-full rounded-full"></div>
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 md:-translate-x-1/2 origin-top rounded-full z-10"
            />

            <div className="space-y-12 md:space-y-24 pb-20">
              {workflowSteps.map((step, index) => (
                <WorkflowNode key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const WorkflowNode = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`relative flex items-center md:justify-between ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#050B14] border-2 border-blue-400 rounded-full z-20 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
        <div className="w-full h-full bg-blue-400 rounded-full animate-ping opacity-20" />
      </div>
      <div className="hidden md:block w-5/12" />
      <div className="pl-20 md:pl-0 w-full md:w-5/12">
        <motion.div 
          whileHover={{ x: isEven ? 10 : -10 }}
          className={`p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:border-blue-400/30 transition-all group relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <step.icon className="w-16 h-16 text-blue-400" />
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300">
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">{step.title}</h3>
          </div>
          <p className="text-gray-400 text-sm relative z-10">
            {step.desc}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionWorkflow;