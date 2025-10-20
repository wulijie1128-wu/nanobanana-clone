import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Professional Photographer",
    content:
      "Nano Banana has completely transformed my workflow. The consistency and quality are unmatched. I can now deliver edited photos to clients in a fraction of the time.",
    rating: 5,
    avatar: "/professional-woman-photographer.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    content:
      "The scene preservation feature is incredible. I can make dramatic changes while keeping the essence of the original image intact. This tool is a game-changer.",
    rating: 5,
    avatar: "/creative-director-man.png",
  },
  {
    name: "Emily Watson",
    role: "Content Creator",
    content:
      "As a content creator, speed matters. Nano Banana delivers professional results instantly. The natural language prompts make it so easy to use.",
    rating: 5,
    avatar: "/content-creator-woman.png",
  },
  {
    name: "David Kim",
    role: "E-commerce Manager",
    content:
      "We use Nano Banana for all our product photography edits. The batch processing saves us hours every week, and the results are consistently excellent.",
    rating: 5,
    avatar: "/business-manager-man.jpg",
  },
  {
    name: "Lisa Anderson",
    role: "Digital Artist",
    content:
      "The character consistency across multiple images is phenomenal. I can finally create cohesive series without spending hours on manual editing.",
    rating: 5,
    avatar: "/digital-artist-woman.jpg",
  },
  {
    name: "James Taylor",
    role: "Marketing Specialist",
    content:
      "Nano Banana has become an essential tool in our marketing stack. The quality and speed allow us to iterate quickly and deliver stunning visuals.",
    rating: 5,
    avatar: "/marketing-specialist-man.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Banana decorations */}
      <div
        className="absolute right-10 top-20 text-5xl opacity-10 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "4s" }}
      >
        🍌
      </div>
      <div
        className="absolute left-10 bottom-20 text-5xl opacity-10 animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "4s" }}
      >
        🍌
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-foreground">Loved by Creators</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            See what professionals are saying about Nano Banana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
