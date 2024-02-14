'use client'

export default function myImageLoader({ src, width, quality }) {
    return `https://adrienhecq.com/${src}?w=${width}&q=${quality || 75}`
}