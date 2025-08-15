import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/25 via-zinc-400/10 to-indigo-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-32 right-16 w-80 h-80 bg-gradient-to-bl from-zinc-400/12 via-indigo-400/25 to-zinc-500/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-zinc-400/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-indigo-300/15 to-zinc-300/10 rounded-full blur-2xl"></div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/LandingPageBackground.png"
            alt="Tech background"
            fill
            className="object-contain opacity-15 scale-150"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-10">
              <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                The Future of
                <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent block mt-2">
                  Web Browsing
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed max-w-2xl">
                Experience the first real-time collaboration browser with
                browsing sessions, to browse with your friends or co-workers.
                Communicate via chat and watch videos together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-400 hover:to-indigo-600 text-white font-semibold py-4 px-8 rounded-2xl border border-indigo-400/50 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105">
                  Join Waitlist
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white py-4 px-8 rounded-2xl transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 p-6 rounded-3xl shadow-2xl border border-zinc-700/50 backdrop-blur-sm relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl"></div>
                <Image
                  src="/BrowserInterface2.png"
                  alt="Browser Interface"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-zinc-950 to-zinc-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-950/10 to-transparent"></div>

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

      <section className="py-32 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/15 to-indigo-600/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-zinc-400/20 to-indigo-400/15 rounded-full blur-lg animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-indigo-300/25 to-zinc-300/15 rounded-full blur-md animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/3 w-20 h-20 bg-gradient-to-br from-zinc-400/18 to-indigo-500/12 rounded-full blur-lg animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 left-16 w-28 h-28 bg-gradient-to-br from-indigo-400/12 to-zinc-400/18 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-zinc-300/15 to-indigo-300/20 rounded-full blur-2xl animate-bounce"
            style={{ animationDuration: "5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-6xl lg:text-7xl font-bold text-white mb-24 tracking-tight hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                Browser Showcase
              </span>
            </h2>

            <div className="space-y-32 max-w-6xl">
              {/* Session Chat Feature */}
              <div className="group">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-12 tracking-tight group-hover:scale-105 transition-all duration-300">
                  <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    Session Chat
                  </span>
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-zinc-500/10 rounded-3xl blur-xl"></div>
                  <img
                    src="SessionChat.png"
                    alt="Session Chat Feature"
                    className="w-full rounded-3xl shadow-2xl border border-zinc-700/50 hover:scale-[1.02] transition-all duration-500 relative z-10"
                  />
                </div>
              </div>

              {/* Split Screen Feature */}
              <div className="group">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-12 tracking-tight group-hover:scale-105 transition-all duration-300">
                  <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    Split Screen
                  </span>
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-500/10 to-indigo-500/10 rounded-3xl blur-xl"></div>
                  <img
                    src="SplitScreen.png"
                    alt="Split Screen Feature"
                    className="w-full rounded-3xl shadow-2xl border border-zinc-700/50 hover:scale-[1.02] transition-all duration-500 relative z-10"
                  />
                </div>
              </div>

              {/* Shared Session Feature */}
              <div className="group">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-12 tracking-tight group-hover:scale-105 transition-all duration-300">
                  <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    Shared Session
                  </span>
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-zinc-500/10 rounded-3xl blur-xl"></div>
                  <img
                    src="sharedsession.png"
                    alt="Shared Session Feature"
                    className="w-full rounded-3xl shadow-2xl border border-zinc-700/50 hover:scale-[1.02] transition-all duration-500 relative z-10"
                  />
                </div>
              </div>

              {/* Watch Together Feature */}
              <div className="group">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-12 tracking-tight group-hover:scale-105 transition-all duration-300">
                  <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    Watch Together
                  </span>
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-500/10 to-indigo-500/10 rounded-3xl blur-xl"></div>
                  <img
                    src="Watchtogether.png"
                    alt="Watch Together Feature"
                    className="w-full rounded-3xl shadow-2xl border border-zinc-700/50 hover:scale-[1.02] transition-all duration-500 relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 relative">
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
      </section>
    </div>
  );
}
