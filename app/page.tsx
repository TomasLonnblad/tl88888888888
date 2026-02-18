

import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Tomas Lönnblad",
    art: "https://tomaslonnblad.github.io/2.jpg",
  },
  {
    artist: "Tomas Lönnblad 2",
    art: "https://tomaslonnblad.github.io/3.jpg",
  },
  {
    artist: "Tomas Lönnblad 3",
    art: "https://tomaslonnblad.github.io/4.jpg",
  },
]

export default function Page() {
  return (


    
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-00">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect- h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="text-muted-foreground pt-2 text-xs">
              Photo by{" "}
              <span className="text-foreground font-semibold">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
