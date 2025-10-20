import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const examples = [
  {
    title: "Portrait Enhancement",
    description: "Transform portraits with professional lighting and style adjustments",
    image: "/professional-portrait-with-golden-hour-lighting.jpg",
    tags: ["Portrait", "Lighting", "Professional"],
  },
  {
    title: "Scene Transformation",
    description: "Change environments while preserving subject details and composition",
    image: "/person-in-futuristic-city-scene.jpg",
    tags: ["Scene", "Environment", "Creative"],
  },
  {
    title: "Style Transfer",
    description: "Apply artistic styles while maintaining character consistency",
    image: "/artistic-style-transfer-portrait.jpg",
    tags: ["Style", "Artistic", "Creative"],
  },
  {
    title: "Product Photography",
    description: "Enhance product images with perfect lighting and backgrounds",
    image: "/professional-product-photography.png",
    tags: ["Product", "Commercial", "Professional"],
  },
  {
    title: "Character Consistency",
    description: "Maintain character features across different scenes and poses",
    image: "/character-in-multiple-poses-consistent-style.jpg",
    tags: ["Character", "Consistency", "Multi-shot"],
  },
  {
    title: "Creative Edits",
    description: "Unleash creativity with imaginative transformations and effects",
    image: "/creative-fantasy-transformation.jpg",
    tags: ["Creative", "Fantasy", "Imaginative"],
  },
]

export function Examples() {
  return (
    <section id="examples" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-foreground">See It In Action</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Explore real examples of AI-powered image transformations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-card border-border"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt={example.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{example.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{example.description}</p>
                <div className="flex flex-wrap gap-2">
                  {example.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-foreground border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
