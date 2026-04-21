'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const videoThumbnails = [
  {
    id: 1,
    title: 'Brand Strategy 101',
    category: 'Brand Film',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Podcast Deep Dive',
    category: 'Podcast',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231b470?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Social Success',
    category: 'Reel',
    thumbnail: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Content Strategy',
    category: 'Short-form',
    thumbnail: 'https://images.unsplash.com/photo-1577720643272-265f434885d4?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: 'Growth Hacking',
    category: 'Brand Film',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: 'Personal Branding',
    category: 'Reel',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231b470?w=500&h=300&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
]

function VideoCard({
  title,
  category,
  thumbnail,
  videoUrl,
  delay,
  onVideoClick,
}: {
  title: string
  category: string
  thumbnail: string
  videoUrl: string
  delay: number
  onVideoClick: (url: string) => void
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="group relative overflow-hidden cursor-pointer"
      onClick={() => onVideoClick(videoUrl)}
    >
      {/* Video Thumbnail */}
      <motion.div
        className="relative h-64 overflow-hidden bg-gray-200"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Cream Overlay */}
        <motion.div
          className="absolute inset-0 bg-cream"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />

        {/* Play Icon with pulse */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-burgundy text-cream p-4 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Card Info */}
      <div className="p-4 bg-cream border-2 border-t-0 border-burgundy">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-playfair font-bold text-burgundy">
            {title}
          </h3>
        </div>
        <span className="inline-block bg-blush text-burgundy text-xs px-3 py-1 font-semibold">
          {category}
        </span>
      </div>
    </motion.div>
  )
}

export default function OurWork() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="work" ref={ref} className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-burgundy">
              Our Work
            </h2>
            <span className="text-4xl">⭐</span>
          </div>
          <p className="text-xl text-gray-700">
            Videography & Content
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {videoThumbnails.map((video, index) => (
            <VideoCard
              key={video.id}
              {...video}
              delay={index * 0.1}
              onVideoClick={setSelectedVideo}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            className="border-2 border-burgundy text-burgundy px-8 py-4 font-semibold hover:bg-burgundy hover:text-cream transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Work
          </motion.button>
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-cream hover:text-blush"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <iframe
                className="w-full aspect-video"
                src={selectedVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
