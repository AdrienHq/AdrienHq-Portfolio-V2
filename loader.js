'use client'

export default function myImageLoader({ src, width, quality }) {
    return `http://v1-portfolio.adrienhecq.com/${src}?w=${width}&q=${quality || 75}`
}