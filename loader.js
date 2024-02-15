'use client'

export default function myImageLoader({ src, width, quality }) {
    return `https://v1-portfolio.adrienhecq.com/${src}?w=${width}&q=${quality || 75}`
}