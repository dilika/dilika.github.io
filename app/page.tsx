"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Globe, Server, Database, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with Next.js, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat app with user authentication and file sharing",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      title: "AI Task Manager",
      description: "Smart task management system with AI-powered prioritization",
      image: "https://images.unsplash.com/photo-1661961110671-77b71b929d52?q=80&w=1000",
      tags: ["TypeScript", "OpenAI", "Redis", "Docker"],
      link: "#",
    },
  ];

  const skills = [
    { name: "Frontend Development", icon: <Globe className="w-6 h-6" /> },
    { name: "Backend Development", icon: <Server className="w-6 h-6" /> },
    { name: "Database Management", icon: <Database className="w-6 h-6" /> },
    { name: "API Development", icon: <Code2 className="w-6 h-6" /> },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Terminal className="w-6 h-6" />
              <span className="font-bold text-xl">DevPortfolio</span>
            </motion.div>
            <div className="flex space-x-4">
              {["about", "skills", "projects", "contact"].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? "default" : "ghost"}
                  onClick={() => setActiveSection(section)}
                  className="capitalize"
                >
                  {section}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Building robust and scalable applications with modern technologies.
            Passionate about creating exceptional user experiences and efficient
            backend solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <TooltipProvider>
              {[
                { icon: <Github className="w-6 h-6" />, label: "GitHub" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
                { icon: <Mail className="w-6 h-6" />, label: "Email" },
              ].map((social) => (
                <Tooltip key={social.label}>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      {social.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="mb-4 flex justify-center">{skill.icon}</div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I'm currently available for freelance projects and full-time
            opportunities. Let's build something amazing together!
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            Get in Touch
          </Button>
        </div>
      </section>
    </main>
  );
}