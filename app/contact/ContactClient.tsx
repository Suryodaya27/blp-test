import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, Flame, Box, UserCircle, Building2 } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

function Contact() {

  return (
    <div className="min-h-screen pt-24 relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section
        className="py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h1
            className="font-outfit font-bold text-5xl md:text-6xl mb-6 text-foreground"
          >
            Let&apos;s Build Something Amazing
          </h1>
          <p
            className="font-outfit text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to transform your business? We&apos;d love to hear about your vision
            and show you how we can bring it to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-10"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-8 text-foreground">
                Get In Touch
              </h2>
              <p className="font-outfit text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you&apos;re a startup looking to make your mark or an enterprise
                ready to scale, we&apos;re here to help you build the foundation for lasting success.
              </p>
              {/* Quick Actions */}
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Now
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:contact@blueprynt.io">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/brand-enquiry">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Start Project Brief
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 order-1 lg:order-2 flex flex-col justify-center min-h-[400px]">
              <div className="text-center mb-8">
                <User className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-foreground">Choose Your Path</h3>
                <p className="text-muted-foreground text-sm mt-1">Select the option that best describes you</p>
              </div>

              <div className="space-y-3">
                <Link href="/contact/influencer" className="block group">
                  <div className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 border border-border-bright rounded-lg p-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-purple-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                        <UserCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Influencer</h4>
                        <p className="text-gray-600 text-sm">Join our creator network</p>
                      </div>
                      <div className="text-purple-400 group-hover:text-purple-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/contact/brand" className="block group">
                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 border border-border-bright rounded-lg p-4 transition-all duration-300 group-hover:shadow-lg group-hover:border-gradient-priamry group-hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Brand</h4>
                        <p className="text-gray-600 text-sm">Partner with creators</p>
                      </div>
                      <div className="text-blue-400 group-hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <h2
            className="font-outfit font-bold text-3xl md:text-4xl mb-8 text-center text-foreground"
          >
            Visit Our Offices
          </h2>
          <div
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-xl p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-outfit font-semibold text-xl text-foreground mb-4">
                We&apos;re Located Across India
              </h3>
              <p className="font-outfit text-muted-foreground mb-6">
                With offices in Mumbai, Delhi, and Bangalore, we&apos;re always close to our clients.
                Schedule a visit to see our team in action.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {['Mumbai', 'Delhi', 'Bangalore'].map((city) => (
                  <div key={city} className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-outfit font-semibold text-foreground mb-2">{city}</h4>
                    <p className="font-outfit text-sm text-muted-foreground">
                      Schedule a visit to our {city} office
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
