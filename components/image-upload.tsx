"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Sparkles, ImageIcon, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ImageUpload() {
  const [image, setImage] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedResult, setGeneratedResult] = useState<string | null>(null)
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
  const { toast } = useToast()

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => setImage(e.target?.result as string)
      reader.readAsDataURL(file)
    }
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImage(e.target?.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!image) {
      toast({
        title: "Error",
        description: "Please upload an image first",
        variant: "destructive",
      })
      return
    }

    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setGeneratedResult(null)
    setGeneratedImages([])

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: image,
          prompt: prompt,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate')
      }

      setGeneratedResult(data.result)
      setGeneratedImages(data.images || [])

      if (data.images && data.images.length > 0) {
        toast({
          title: "Success",
          description: `Generated ${data.images.length} image(s)!`,
        })
      } else {
        toast({
          title: "Success",
          description: "Image analysis completed!",
        })
      }
    } catch (error: any) {
      console.error('Error:', error)
      toast({
        title: "Error",
        description: error.message || "Failed to generate. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left side - Upload */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Upload className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-card-foreground">Upload Image</h3>
              </div>

              <div
                onDrop={handleDrop}
                onDragOver={(e) => {
                  e.preventDefault()
                  setIsDragging(true)
                }}
                onDragLeave={() => setIsDragging(false)}
                className={`relative border-2 border-dashed rounded-lg transition-colors ${
                  isDragging ? "border-primary bg-primary/5" : "border-border"
                } ${image ? "p-2" : "p-12"}`}
              >
                {image ? (
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <img src={image || "/placeholder.svg"} alt="Uploaded" className="w-full h-full object-cover" />
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2"
                      onClick={() => setImage(null)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center cursor-pointer">
                    <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-sm font-medium text-card-foreground mb-1">Drop image here or click to upload</p>
                    <p className="text-xs text-muted-foreground">Max 50MB</p>
                    <input type="file" accept="image/*" className="hidden" onChange={handleFileInput} />
                  </label>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Main Prompt</label>
                <Textarea
                  placeholder="Describe what you want to know about this image..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] resize-none bg-background text-foreground"
                  disabled={isGenerating}
                />
              </div>
            </div>

            {/* Right side - Output */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-card-foreground">Output Gallery</h3>
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col min-h-[400px] bg-muted/30">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center flex-1">
                    <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
                    <p className="text-sm font-medium text-card-foreground mb-2">Generating...</p>
                    <p className="text-xs text-muted-foreground text-center">Please wait while AI generates your image</p>
                  </div>
                ) : generatedImages.length > 0 ? (
                  <div className="flex-1 space-y-4">
                    <h4 className="text-sm font-semibold text-card-foreground">Generated Images:</h4>
                    <div className="grid gap-4">
                      {generatedImages.map((imgUrl, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden border border-border">
                          <img
                            src={imgUrl}
                            alt={`Generated ${index + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    {generatedResult && (
                      <div className="bg-background rounded-lg p-4 border border-border mt-4">
                        <h4 className="text-sm font-semibold text-card-foreground mb-2">Description:</h4>
                        <div className="text-sm text-card-foreground whitespace-pre-wrap leading-relaxed">
                          {generatedResult}
                        </div>
                      </div>
                    )}
                  </div>
                ) : generatedResult ? (
                  <div className="flex-1">
                    <div className="bg-background rounded-lg p-4 border border-border">
                      <h4 className="text-sm font-semibold text-card-foreground mb-3">AI Response:</h4>
                      <div className="text-sm text-card-foreground whitespace-pre-wrap leading-relaxed">
                        {generatedResult}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center flex-1">
                    <ImageIcon className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-sm font-medium text-card-foreground mb-2">Ready for instant generation</p>
                    <p className="text-xs text-muted-foreground text-center">Upload an image and enter your prompt to generate</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12"
              onClick={handleGenerate}
              disabled={isGenerating || !image || !prompt.trim()}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Now
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
