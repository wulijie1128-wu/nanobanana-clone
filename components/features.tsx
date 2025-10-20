import { Card } from "@/components/ui/card"
import { Sparkles, Zap, ImageIcon, Palette, Wand2, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "One-Shot Editing",
    description: "Transform images instantly with a single prompt. No multiple iterations needed.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-fast AI processing delivers results in seconds, not minutes.",
  },
  {
    icon: ImageIcon,
    title: "Multi-Image Support",
    description: "Process multiple images at once with batch mode for efficient workflows.",
  },
  {
    icon: Palette,
    title: "Scene Preservation",
    description: "Maintains original composition and lighting while applying your edits.",
  },
  {
    icon: Wand2,
    title: "Natural Language",
    description: "Use simple, everyday language to describe the changes you want.",
  },
  {
    icon: Shield,
    title: "Consistent Results",
    description: "Character and style consistency across all your edited images.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-foreground">Powerful Features</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Everything you need to transform your images with AI-powered editing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
