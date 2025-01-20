"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ArrowRight, Megaphone, Layout, Grid, Smartphone, Cpu, Brain, ChevronLeft, ChevronRight, Phone, MessageSquare, X, Linkedin, Instagram, Github, Youtube, Play, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const testimonials = [
  {
    text: "Sanganak's expertise in AI solutions has revolutionized our business processes. Their team's dedication and innovative approach exceeded our expectations.",
    author: "Rajesh Kumar",
    role: "CEO, TechInnovate India",
    videoUrl: "https://example.com/video1.mp4"
  },
  {
    text: "Working with Sanganak transformed our digital presence. Their UI/UX design expertise helped us achieve a 40% increase in user engagement.",
    author: "Sarah Chen",
    role: "Product Manager, FutureScale",
    videoUrl: "https://example.com/video2.mp4"
  },
  {
    text: "The blockchain solution developed by Sanganak has greatly improved our supply chain transparency and efficiency.",
    author: "John Smith",
    role: "COO, LogiChain Solutions",
    videoUrl: "https://example.com/video3.mp4"
  },
  {
    text: "Their mobile app development team delivered a fantastic product that our users love. The attention to detail was impressive.",
    author: "Emily Rodriguez",
    role: "Head of Product, MobileFirst",
    videoUrl: "https://example.com/video4.mp4"
  },
  {
    text: "Sanganak's web development expertise helped us create a scalable platform that handles millions of users seamlessly.",
    author: "Michael Chang",
    role: "CTO, ScaleUp Technologies",
    videoUrl: "https://example.com/video5.mp4"
  },
  {
    text: "The digital marketing strategy implemented by Sanganak resulted in a 200% increase in our qualified leads.",
    author: "Lisa Anderson",
    role: "Marketing Director, GrowthFirst",
    videoUrl: "https://example.com/video6.mp4"
  }
]

export default function Page() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      testimonialRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Space-themed Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(76, 29, 149, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.1) 0%, transparent 40%)
            `
          }}
        ></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.01) 0%, transparent 70%)' }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-gray-900/90 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-8">
          <Link href="https://sanganak.org" className="text-2xl font-bold text-white hover:text-purple-400">
            Sanganak
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link href="#services" className="text-sm text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm text-gray-300 hover:text-white">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm text-gray-300 hover:text-white">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="hidden border-purple-400 text-purple-400 hover:bg-purple-400/20 md:inline-flex">
            <Link href="#contact">
              Free Strategy Call
            </Link>
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="container pt-32 text-white">
          <div className="mx-auto mb-8 flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 overflow-hidden rounded-full border-2 border-gray-900">
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt={`Startup Founder ${i}`}
                    width={32}
                    height={32}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-300">10+ Startup Founders Love</span>
              <Link href="https://sanganak.org" className="font-semibold text-purple-400 hover:underline">
                Sanganak
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Transform Your Ideas Into Reality with <Link href="https://sanganak.org" className="text-purple-400 hover:underline">Sanganak</Link>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Expert solutions in Graphics/UI/UX Design, Web & App Development, Blockchain, AI, and SaaS.
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/20 backdrop-blur-sm">
                <Link href="#contact">Free Strategy Call</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mt-32 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl text-purple-400">About Sanganak</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
            <p>
              Sanganak is a Bihar-based bootstrap startup established in July 2021. We are a passionate team of IT professionals dedicated to providing cutting-edge technology solutions to businesses of all sizes.
            </p>
            <p>
              Our mission is to help businesses thrive in the digital age by delivering innovative, scalable, and efficient IT solutions. Since our inception, we've been consistently delivering high-quality services across various domains including web and mobile app development, UI/UX design, blockchain technology, and AI solutions.
            </p>
            <p>
              At Sanganak, we believe in the power of technology to transform businesses and improve lives. Our team of skilled professionals is committed to staying at the forefront of technological advancements, ensuring that our clients always receive the most up-to-date and effective solutions for their needs.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-purple-400/20 flex items-center justify-center ring-4 ring-purple-400">
                    <User className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Aryabhatta</h3>
                <p className="text-purple-400 mb-4">Dev Lead & Founder</p>
                <p className="text-gray-300 mb-6">
                  mrbuddhu is a passionate developer and tech enthusiast with years of experience in creating innovative solutions. As the Dev Lead of Sanganak, he drives the technical vision and ensures the delivery of high-quality products.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://twitter.com/mrbuddhu" className="text-gray-300 hover:text-purple-400">
                    <X className="w-5 h-5" />
                  </Link>
                  <Link href="https://linkedin.com/in/mrbuddhu" className="text-gray-300 hover:text-purple-400">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-purple-400/20 flex items-center justify-center ring-4 ring-purple-400">
                    <User className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Shabi K</h3>
                <p className="text-purple-400 mb-4">Design Lead & Co-founder</p>
                <p className="text-gray-300 mb-6">
                  msbuddhu is a creative powerhouse with a keen eye for design and user experience. As the Design Lead of Sanganak, she ensures that all our products are not only functional but also aesthetically pleasing and user-friendly.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://twitter.com/msbuddhu" className="text-gray-300 hover:text-purple-400">
                    <X className="w-5 h-5" />
                  </Link>
                  <Link href="https://linkedin.com/in/msbuddhu" className="text-gray-300 hover:text-purple-400">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mt-32 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-300">Comprehensive IT solutions for your business needs</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Megaphone,
                title: "Digital Marketing",
                description: "Strategic digital marketing solutions to grow your brand"
              },
              {
                icon: Layout,
                title: "Graphic/UI-UX Design",
                description: "Beautiful, intuitive designs that convert"
              },
              {
                icon: Grid,
                title: "Web App Development",
                description: "Scalable web applications built with modern tech"
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile solutions"
              },
              {
                icon: Cpu,
                title: "Blockchain",
                description: "Secure blockchain solutions for your business"
              },
              {
                icon: Brain,
                title: "AI Solutions",
                description: "Cutting-edge AI integration for automation"
              }
            ].map((service, i) => (
              <Card key={i} className="border-white/10 bg-gray-800/50 backdrop-blur-sm p-6">
                <service.icon className="mb-4 h-8 w-8 text-purple-400" />
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="container mt-32 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Portfolio</h2>
            <p className="mt-4 text-lg text-gray-300">Explore our latest projects across various domains</p>
          </div>
          <Tabs defaultValue="saas" className="mt-16">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
              {["saas", "design", "web", "mobile", "blockchain", "ai"].map((category) => (
                <TabsTrigger key={category} value={category} className="capitalize data-[state=active]:bg-purple-400 data-[state=active]:text-gray-900">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {["saas", "design", "web", "mobile", "blockchain", "ai"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden border-white/10 bg-gray-800/50 backdrop-blur-sm">
                      <Image
                        src={`/placeholder.svg?height=300&width=400`}
                        alt={`${category.charAt(0).toUpperCase() + category.slice(1)} Project ${i}`}
                        width={400}
                        height={300}
                        className="w-full"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white">{`${category.charAt(0).toUpperCase() + category.slice(1)} Project ${i}`}</h3>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container mt-32 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Testimonials</h2>
            <p className="mt-4 text-lg text-gray-300">
              Hear from our satisfied clients about their experiences working with us
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 p-2 rounded-full backdrop-blur-sm hover:bg-gray-700/50"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <div 
              ref={testimonialRef}
              className="grid grid-flow-col auto-cols-[minmax(350px,1fr)] gap-6 overflow-x-auto snap-x snap-mandatory pb-4 max-w-[calc(350px*3+2rem)] mx-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="border-white/10 bg-gray-800/50 backdrop-blur-sm flex-shrink-0 w-[350px] snap-center overflow-hidden group relative"
                >
                  <div className="relative aspect-[9/16] w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
                    <video
                      src={testimonial.videoUrl}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                    />
                    <button 
                      className="absolute inset-0 z-20 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity bg-black/30"
                      onClick={(e) => {
                        const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                        if (video.paused) {
                          video.play();
                          e.currentTarget.style.opacity = '0';
                        } else {
                          video.pause();
                          e.currentTarget.style.opacity = '1';
                        }
                      }}
                    >
                      <Play className="w-16 h-16 text-white" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <p className="text-white mb-4 line-clamp-3">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-purple-400/20 flex items-center justify-center ring-2 ring-purple-400">
                          <Image
                            src={`/placeholder.svg?height=48&width=48`}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{testimonial.author}</p>
                          <p className="text-sm text-gray-300">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <button
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 p-2 rounded-full backdrop-blur-sm hover:bg-gray-700/50"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="container mt-32 text-white">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-purple-400 mb-2">Tools</p>
            <h2 className="text-3xl font-bold">Built with the best tools</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            <Image src="/placeholder.svg?height=40&width=120" alt="Webflow" width={120} height={40} className="h-10 object-contain" />
            <Image src="/placeholder.svg?height=40&width=120" alt="Figma" width={120} height={40} className="h-10 object-contain" />
            <Image src="/placeholder.svg?height=40&width=120" alt="Framer" width={120} height={40} className="h-10 object-contain" />
            <Image src="/placeholder.svg?height=40&width=120" alt="React" width={120} height={40} className="h-10 object-contain" />
            <Image src="/placeholder.svg?height=40&width=120" alt="Next.js" width={120} height={40} className="h-10 object-contain" />
            <Image src="/placeholder.svg?height=40&width=120" alt="Tailwind" width={120} height={40} className="h-10 object-contain" />
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Copywriting",
              "Branding",
              "Logos & Icons",
              "Landing pages",
              "Creative strategy",
              "Websites",
              "Custom Illustrations/Graphics",
              "Web Apps",
              "Site Migration",
              "Pitch decks",
              "Social media assets",
              "CMS",
              "Framer/Webflow Development"
            ].map((service) => (
              <div
                key={service}
                className="rounded-full border border-white/10 bg-gray-800/50 backdrop-blur-sm px-4 py-2 text-sm text-center text-white"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mb-32 mt-32 text-white">
          <div className="rounded-2xl border border-white/10 bg-gray-800/50 backdrop-blur-sm p-8 text-center sm:p-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Contact Us</h2>
            <p className="mb-8 text-lg text-gray-300">
              Get in touch with us for your IT needs
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-purple-400 hover:bg-purple-500 text-gray-900">
                <Link href="https://cal.com/sanganak/strategy">
                  Book Your Free Strategy Call
                </Link>
              </Button>
            </div>
            <div className="mt-8">
              <p className="mb-4 text-gray-300">Connect with us on social media:</p>
              <div className="flex justify-center space-x-4">
                <Link href="https://www.instagram.com/sanganakorg/" className="text-gray-300 hover:text-purple-400">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/SanganakOrg" className="text-gray-300 hover:text-purple-400">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.youtube.com/@sanganakorg" className="text-gray-300 hover:text-purple-400">
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/company/sanganakorg/" className="text-gray-300 hover:text-purple-400">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://x.com/sanganakorg" className="text-gray-300 hover:text-purple-400">
                  <X className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-300">Email: <Link href="mailto:contact@sanganak.org" className="text-purple-400 hover:underline">contact@sanganak.org</Link></p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-sm text-gray-400">
        <div className="container">
          <p>Built with love by @mrbuddhu & @msbuddhu</p>
          <p>Est. 2021</p>
        </div>
      </footer>
    </div>
  )
}
