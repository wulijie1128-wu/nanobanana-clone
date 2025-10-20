"use client"

import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/image-upload"
import { Sparkles, Zap, ImageIcon } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Banana decorations */}
      <div
        className="absolute left-10 top-20 text-6xl opacity-20 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        🍌
      </div>
      <div
        className="absolute right-10 top-32 text-6xl opacity-20 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      >
        🍌
      </div>
      <div
        className="absolute left-1/4 bottom-20 text-4xl opacity-10 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      >
        🍌
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-foreground border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            The AI model that outperforms competitors
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight text-balance">
            <span className="text-primary">Nano Banana</span>
          </h1>

          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
            editing and scene preservation that surpasses competitors. Experience the future of AI image editing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <Zap className="mr-2 h-5 w-5" />
              Start Editing
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              View Examples
            </Button>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>One-shot editing</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Multi-image support</span>
            </div>
            <div className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-primary" />
              <span>Natural language</span>
            </div>
          </div>

          {/* Image Upload Component */}
          <ImageUpload />
        </div>
      </div>
    </section>
  )
}
