import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-400/20 via-gray-400/15 to-purple-600/10 rounded-full blur-3xl"></div>

        <div className="absolute -top-20 right-20 w-64 h-64 bg-gradient-to-bl from-gray-400/15 via-purple-300/20 to-gray-500/10 rounded-full blur-2xl"></div>

        <div className="absolute top-1/3 -left-20 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-gray-400/20 rounded-full blur-xl"></div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/LandingPageBackground.png"
            alt="Tech background"
            fill
            className="object-contain opacity-20 scale-152"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                The Future of
                <span className="bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">
                  {""} Web Browsing{" "}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed">
                Experience lightning-fast performance, enhanced privacy, and
                cutting-edge features in our revolutionary browser designed for
                the modern web.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-indigo-400 to-indigo-600  p-6 w-[50%] rounded-3xl border border-indigo-500">
                  Join Waitlist
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-700 to-zinc-900 p-4 rounded-2xl shadow-2xl border border-zinc-600">
                <Image
                  src="/BrowserInterface2.png"
                  alt="Browser Interface"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">
                Why choose our Browser
              </span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Built from the ground up with performance, security, and user
              experience in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-xl text-center hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-xl mb-10 h-[70%] flex justify-center items-center">
                <img src={"bookmarks.svg"} className="mb-10" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-500 mb-4 text-left">
                Bookmarks
              </h3>
              <p className="text-zinc-300 text-left">
                Save your favourite Tabs, and open them whenever you want
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-xl text-center hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-xl mb-10 h-[70%] flex justify-center items-center">
                <img src={"tabs.svg"} className="mb-10" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-500 mb-4 text-left">
                Tabs
              </h3>
              <p className="text-zinc-300 text-left">
                Easily add and manage all your important tabs
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-xl text-center hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-xl mb-10 h-[70%] flex justify-center items-center">
                <img src={"preferences.svg"} className="mb-10" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-500 mb-4 text-left">
                Theme
              </h3>
              <p className="text-zinc-300 text-left">
                You select a theme out of 30 provided themes, to customize your
                browsing history
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-xl text-center hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-xl mb-10 h-[70%] flex justify-center items-center">
                <img src={"security.svg"} className="mb-10" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-500 mb-4 text-left">
                Ultra Secure
              </h3>
              <p className="text-zinc-300 text-left">
                Advanced privacy protection and security features keep your data
                safe and private all in one place your Computer.
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-xl text-center hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-xl mb-10 h-[70%] flex justify-center items-center">
                <img src={"browsing.svg"} className="mb-10" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-500 mb-4 text-left">
                Browsing
              </h3>
              <p className="text-zinc-300 text-left">
                Feel free to browse how long you want alone, or in a browsing
                session with your friends
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-xl text-center hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 rounded-xl mb-10 h-[70%] flex justify-center items-center">
                <img src={"shared.svg"} className="mb-10" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-500 mb-4 text-left">
                Session Chat
              </h3>
              <p className="text-zinc-300 text-left">
                Chat with your fellows in a browser, and share links
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-800 relative">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src="BackgroundLaserpurple.png"
            className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.8) 30%, black 50%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.8) 30%, black 50%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
                <span className="bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">
                  What makes it special
                </span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-500 mb-2">
                      Browsing Sessions
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      You can create Browsing sessions, and browse together with
                      your friends with synced tabs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-500 mb-2">
                      Split Screen
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      You can view multiple Tabs at once to boost your
                      productivity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-500 mb-2">
                      Watch together
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      You might be familiar with it from discord, but here you
                      can watch youtube videos together with real time
                      synchronization
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-500 mb-2">
                      Built in Chat
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      You can easily communicate in the browsing session via the
                      built in Chat, with highlighting for Links and youtube
                      videos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-700/50 grid grid-cols-2 gap-5 to-zinc-900/80 p-8 rounded-2xl border border-zinc-600/50 backdrop-blur-sm">
              <img
                className="rounded-lg border border-zinc-500"
                src="splitScreen.png"
                alt=""
              />
              <img
                className="rounded-lg border border-zinc-500"
                src="Watchtogether.png"
                alt=""
              />
              <img
                className="rounded-lg border border-zinc-500"
                src="SessionChat.png"
                alt=""
              />
              <img
                className="rounded-lg border border-zinc-500"
                src="sharedsession.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
