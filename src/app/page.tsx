"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Github } from "lucide-react";

export default function Home() {
  const steps = [
    {
      id: 1,
      title: "Browsing Sessions",
      image: "/sharedsession.png",
      description:
        "Create browsing sessions and browse together with friends using perfectly synced tabs.",
      instructions: [
        "Click 'Create Session' to start a new browsing session",
        "Share the session code with your friends",
        "All participants will see the same tabs and navigation",
        "Navigate together in perfect synchronization",
      ],
    },
    {
      id: 2,
      title: "Split Screen",
      image: "/SplitScreen.png",
      description:
        "View multiple tabs simultaneously to boost your productivity and multitasking.",
      instructions: [
        "Open multiple tabs in your session",
        "Click the 'Split View' button in the tab bar",
        "Resize panels to focus on what matters most",
        "Boost your productivity",
      ],
    },
    {
      id: 3,
      title: "Watch Together",
      image: "/Watchtogether.png",
      description:
        "Enjoy synchronized video watching with friends, featuring real-time synchronization.",
      instructions: [
        "Get a video Link from Youtube",
        "Click on the Watch together button in the tab bar",
        "Share your Video",
        "Playback controls are synchronized for everyone",
      ],
    },
    {
      id: 4,
      title: "Built-in Chat",
      image: "/SessionChat.png",
      description:
        "Communicate seamlessly with smart link highlighting and media sharing capabilities.",
      instructions: [
        "Open the chat panel from the sidebar",
        "Send messages to all session participants",
        "Share links that automatically highlight for everyone",
        "Communicate with all your friends or co workers",
      ],
    },
    {
      id: 5,
      title: "Custom Themes",
      image: "/Themes.png",
      description:
        "Choose from predefined Themes to customize your browsing experience ",
      instructions: [
        "Open the Theme panel from the sidebar",
        "Choose your Theme",
        "Experience your new Browsing experience with your new Theme",
        "Productivity boost",
      ],
    },
    {
      id: 6,
      title: "Bookmarks",
      image: "/Bookmarks.png",
      description:
        "Save tabs as Bookmarks an reopen and start browsing again whenever you want  ",
      instructions: [
        "Save a Tab as a Bookmark ",
        "Open the Bookmark panel from the sidebar",
        "Select a Bookmark an open it",
        "start browsing where you left ",
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev: any) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev: any) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const current = steps[currentStep];
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/25 via-zinc-400/10 to-indigo-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 right-16 w-80 h-80 bg-gradient-to-bl from-zinc-400/12 via-indigo-400/25 to-zinc-500/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-zinc-400/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-indigo-300/15 to-zinc-300/10 rounded-full blur-2xl"></div>
      </div>

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="  items-center">
            <div className="text-white space-y-10 ">
              <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight ">
                The Future of
                <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent block mt-2 pb-5">
                  Web Browsing
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed max-w-2xl">
                Experience the first real-time collaboration browser with
                browsing sessions, to browse with your friends or co-workers.
                Communicate via chat and watch videos together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-400 hover:to-indigo-600 text-white font-semibold py-6 px-10 rounded-2xl border border-indigo-400/50 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105">
                  Join Waitlist
                </Button>
                <Button
                  onClick={() => {
                    window.location.href =
                      "https://github.com/KreakxX/QuickBrowse";
                  }}
                  variant="outline"
                  className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white py-6 px-10 rounded-2xl transition-all duration-300 bg-transparent"
                >
                  View Github
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-zinc-950 relative overflow-hidden w-full">
        <div className="mb-20 pb-20">
          <div className="flex justify-center">
            <div className="p-6 bg-zinc-900 rounded-2xl  w-[65vw]   hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/50 hover:-translate-y-2">
              <img src="AppShowcase.png" className="" alt="" />
            </div>
          </div>
        </div>

        <div className=" px-6 lg:px-8 py-16 relative z-10 w-full">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Follow these simple steps to get the most out of your browsing
              sessions
            </p>
          </div>

          <div className="flex justify-center mb-12 w-full">
            <div className="flex space-x-4">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-semibold ${
                    index === currentStep
                      ? "border-indigo-400 bg-indigo-400 text-white"
                      : "border-zinc-600 text-zinc-400 hover:border-indigo-500 hover:text-indigo-400"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/60 p-8 rounded-3xl border border-zinc-700/30 backdrop-blur-sm relative shadow-md hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-500 ">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl"></div>
                  <img
                    src={current.image || "/placeholder.svg"}
                    alt={current.title}
                    className="w-full h-153 object-cover rounded-xl border border-zinc-600/50 shadow-lg relative z-10"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                    </div>
                    <span className="text-indigo-400 font-medium">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {current.title}
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {current.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-4">
                    Step-by-step guide:
                  </h3>
                  <div className="space-y-3">
                    {current.instructions.map((instruction, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        </div>
                        <p className="text-zinc-300">{instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="lg"
                    className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={nextStep}
                    size="lg"
                    className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-22 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                Why Choose Our Browser
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Built from the ground up with performance, security, and user
              experience in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 border border-zinc-700/50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-zinc-700/60 hover:to-zinc-800/90 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 rounded-2xl mb-8 h-[60%] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                <img src={"bookmarks.svg"} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                Bookmarks
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Save your favorite tabs and open them whenever you want with
                intelligent organization.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 border border-zinc-700/50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-zinc-700/60 hover:to-zinc-800/90 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 rounded-2xl mb-8 h-[60%] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                <img src={"tabs.svg"} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                Smart Tabs
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Easily add and manage all your important tabs with advanced
                grouping features.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 border border-zinc-700/50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-zinc-700/60 hover:to-zinc-800/90 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 rounded-2xl mb-8 h-[60%] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                <img src={"preferences.svg"} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                Custom Themes
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Choose from 30+ beautiful themes to customize your browsing
                experience.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 border border-zinc-700/50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-zinc-700/60 hover:to-zinc-800/90 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 rounded-2xl mb-8 h-[60%] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                <img src={"security.svg"} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                Ultra Secure
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Advanced privacy protection and security features keep your data
                safe and private.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 border border-zinc-700/50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-zinc-700/60 hover:to-zinc-800/90 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 rounded-2xl mb-8 h-[60%] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                <img src={"browsing.svg"} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                Collaborative Browsing
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Browse alone or create sessions with friends for shared web
                experiences.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 border border-zinc-700/50 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-zinc-700/60 hover:to-zinc-800/90 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 rounded-2xl mb-8 h-[60%] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                <img src={"shared.svg"} />
              </div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                Session Chat
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Chat with your team in real-time and share links seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/60 border border-zinc-700/30 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Browsing Experience?
              </span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of
              collaborative web browsing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white py-4 px-8 rounded-2xl transition-all duration-300 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                QuickBrowse
              </h3>
              <p className="text-zinc-400 mb-4 max-w-md">
                The future of collaborative web browsing. Browse together, work
                smarter, and stay connected with your team.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400">
            <p>&copy; 2024 QuickBrowse. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* <section className="py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 relative">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src="BackgroundLaserpurple.png"
            className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.9) 40%, black 60%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.9) 40%, black 60%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-16 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                  What Makes It Special
                </span>
              </h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
                      Browsing Sessions
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                      Create browsing sessions and browse together with friends
                      using perfectly synced tabs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
                      Split Screen
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                      View multiple tabs simultaneously to boost your
                      productivity and multitasking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
                      Watch Together
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                      Enjoy synchronized video watching with friends, featuring
                      real-time synchronization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-indigo-300 mb-3">
                      Built-in Chat
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-lg">
                      Communicate seamlessly with smart link highlighting and
                      media sharing capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/60 grid grid-cols-2 gap-6 p-10 rounded-3xl border border-zinc-700/30 backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl"></div>
              <img
                className="rounded-xl border border-zinc-600/50 shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
                src="splitScreen.png"
                alt="Split Screen Feature"
              />
              <img
                className="rounded-xl border border-zinc-600/50 shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
                src="Watchtogether.png"
                alt="Watch Together Feature"
              />
              <img
                className="rounded-xl border border-zinc-600/50 shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
                src="SessionChat.png"
                alt="Session Chat Feature"
              />
              <img
                className="rounded-xl border border-zinc-600/50 shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
                src="sharedsession.png"
                alt="Shared Session Feature"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
