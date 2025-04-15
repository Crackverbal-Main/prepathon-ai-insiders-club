
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle, Rocket, Shield, Zap } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500/5 to-purple-500/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Join the Future of AI Learning with Prepathon
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get early access to our revolutionary AI-powered learning platform that adapts to your unique learning style.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Input
              type="email"
              placeholder="Enter your email"
              className="md:w-96"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-violet-600 hover:bg-violet-700">
              Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Prepathon.ai?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-violet-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-violet-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
              <p className="text-gray-600">AI-powered pathways that adapt to your learning style and pace</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-violet-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-violet-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Feedback</h3>
              <p className="text-gray-600">Instant insights and improvements suggestions as you learn</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-violet-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-violet-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert-Crafted Content</h3>
              <p className="text-gray-600">Premium learning materials designed by industry experts</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>When will Prepathon.ai launch?</AccordionTrigger>
              <AccordionContent>
                We're planning to launch in Q2 2024. Waitlist members will get exclusive early access before the public launch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What topics will be covered?</AccordionTrigger>
              <AccordionContent>
                We'll cover a wide range of topics including AI, machine learning, data science, and programming fundamentals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How does the waitlist work?</AccordionTrigger>
              <AccordionContent>
                Sign up with your email, and you'll be among the first to know when we launch. Early access members will receive special benefits and founding member pricing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2024 Prepathon.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
