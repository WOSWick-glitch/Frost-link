import { Link } from "wouter";
import { Snowflake, Shield, Swords, Globe2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.15)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Snowflake className="w-4 h-4" />
          <span>Transfer Season is Open</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          YOUR NEXT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary text-glow">CONQUEST</span><br/>
          STARTS HERE
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-mono animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          The premier recruitment platform for Whiteout Survival. Find the perfect state, join elite alliances, or recruit top-tier talent for your roster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Link href="/players">
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-all">
              <Swords className="mr-2 w-5 h-5" />
              Recruit Players
            </Button>
          </Link>
          <Link href="/alliances">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 bg-card/50 border-white/10 hover:bg-white/10 text-white backdrop-blur-sm">
              <Shield className="mr-2 w-5 h-5" />
              Find an Alliance
            </Button>
          </Link>
        </div>

        {/* Stats / Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10 animate-in fade-in duration-1000 delay-700">
          {[
            { label: "Active Players", value: "12,400+" },
            { label: "Recruiting States", value: "145" },
            { label: "Verified Alliances", value: "850+" },
            { label: "Successful Transfers", value: "3,200+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-4 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <span className="font-display text-2xl md:text-3xl font-bold text-white mb-1 text-glow">{stat.value}</span>
              <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
