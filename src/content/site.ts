/**
 * Single source of truth for site copy.
 *
 * PLACEHOLDER CONTENT: project details and Instagram posts are stand-ins with
 * the right shape. Swap the values as Kavora delivers the real assets — no
 * component changes required. Testimonials below are real.
 */

/**
 * Real Instagram reels, played inside the phone frames. Only the shortcode is
 * stored — the public link and the local cover are derived from it.
 */
export type Reel = {
  shortcode: string
  /** TODO: ask Kavora for a one-line label per reel. */
  label?: string
  /**
   * Local file (e.g. '/reels/shri-radha.mp4'). When present the frame plays it
   * muted on loop — the only way to get a reel actually moving in the device,
   * since Instagram's embed shows a cover and sends clicks to instagram.com.
   * Ask Kavora for the exported mp4s and drop them in `public/reels/`.
   */
  video?: string
}

export const reelUrl = (shortcode: string) => `https://www.instagram.com/reel/${shortcode}/`
/** 9:16 cover pulled from the reel's embed and saved locally — Instagram's own
 *  CDN links are signed and expire, so they can't be hotlinked. */
export const reelCover = (shortcode: string) => `/reels/${shortcode}.jpg`

/** The feed strip on the homepage. Published from client accounts:
 *  DWoR0eazR09 → acid.sisters · DMscLEMvhB5 → shriradhakrishnajewels
 *  DSXoglYiGLi → shrisethiajewellers */
export const reels: Reel[] = [
  { shortcode: 'DWoR0eazR09' },
  { shortcode: 'DMscLEMvhB5' },
  { shortcode: 'DSXoglYiGLi' },
]

export type Project = {
  slug: string
  title: string
  client: string
  category: string
  year: string
  /** Grid thumbnail — the reel's own cover. */
  thumbnail: string
  /** Instagram shortcode. The frame plays/links to this reel. */
  reel?: string
  /** Embed URL (YouTube/Vimeo). Leave empty to show the still only. */
  videoUrl: string
  /** The problem the client came in with. */
  challenge: string
  /** What Kavora actually made. */
  approach: string
  /** Outcome — keep it concrete. */
  result: string
  deliverables: string[]
}

export const projects: Project[] = [
  {
    slug: 'brand-identity',
    title: 'A identity that survives the scroll',
    client: 'Kavora Studio',
    category: 'Brand Identity',
    year: '2025',
    thumbnail: reelCover('DN3L_5HwmGK'),
    reel: 'DN3L_5HwmGK',
    videoUrl: '',
    challenge:
      'The brand looked different in every place it appeared — decks, reels, packaging. Nothing compounded.',
    approach:
      'We rebuilt the identity around one red, one typeface, and a strict grid, then wrote rules loose enough for a social team to move fast inside.',
    result: 'One recognisable system across every surface, applied in-house without us.',
    deliverables: ['Logo system', 'Type & colour', 'Social templates', 'Brand guide'],
  },
  {
    slug: 'founder-brand',
    title: 'Turning a founder into the channel',
    client: 'Confidential — D2C',
    category: 'Personal Branding',
    year: '2025',
    thumbnail: reelCover('DVA5UIBiOej'),
    reel: 'DVA5UIBiOej',
    videoUrl: '',
    challenge:
      'The founder had the sharpest opinions in the category and no consistent place to put them.',
    approach:
      'A monthly studio day producing four weeks of talking-head and B-roll content, cut into a fixed weekly rhythm.',
    result: 'A publishing cadence the founder can sustain, from a single shoot day a month.',
    deliverables: ['Content strategy', 'Studio production', 'Editing', 'Distribution'],
  },
  {
    slug: 'podcast-repurposing',
    title: 'One recording, thirty assets',
    client: 'Confidential — Media',
    category: 'Podcast Production',
    year: '2025',
    thumbnail: reelCover('DUyEBCakxUC'),
    reel: 'DUyEBCakxUC',
    videoUrl: '',
    challenge:
      'Long-form episodes were performing, but nothing was being pulled out of them for social.',
    approach:
      'We took over post-production and built a repurposing pipeline: hooks pulled at the edit stage, not hunted for afterwards.',
    result: 'Every episode now ships as a full cut plus a month of shorts.',
    deliverables: ['Post-production', 'Clip strategy', 'Captions & graphics', 'Scheduling'],
  },
  {
    slug: 'social-system',
    title: 'A feed with a point of view',
    client: 'Confidential — Hospitality',
    category: 'Social Media',
    year: '2024',
    thumbnail: reelCover('DbTI10ItlD7'),
    reel: 'DbTI10ItlD7',
    videoUrl: '',
    challenge:
      'The feed was a photo dump. Good product, no narrative, no reason to follow.',
    approach:
      'Three recurring content pillars, a shot list per pillar, and a monthly shoot that fills the calendar in one pass.',
    result: 'A feed that reads as one voice instead of one-off posts.',
    deliverables: ['Content pillars', 'Monthly shoot', 'Reels editing', 'Calendar'],
  },
  {
    slug: 'campaign-film',
    title: 'The launch film',
    client: 'Confidential — Retail',
    category: 'Content Production',
    year: '2024',
    thumbnail: reelCover('DV1JcJ6kcSC'),
    reel: 'DV1JcJ6kcSC',
    videoUrl: '',
    challenge:
      'A launch date, no film, and a budget that did not stretch to a full production house.',
    approach:
      'A two-day shoot designed backwards from the cutdowns — hero film, six verticals, and stills, all from the same setups.',
    result: 'One shoot covered the entire launch across every channel.',
    deliverables: ['Concept', 'Direction', 'Two-day shoot', 'Hero film + cutdowns'],
  },
  {
    slug: 'visual-direction',
    title: 'Art direction that holds up close',
    client: 'Kavora Studio',
    category: 'Art Direction',
    year: '2024',
    thumbnail: reelCover('Dap-52kvDoa'),
    reel: 'Dap-52kvDoa',
    videoUrl: '',
    challenge:
      'Content looked fine in the feed and fell apart the moment anyone looked closely.',
    approach:
      'We reset the lighting, palette, and framing rules, then made them repeatable for whoever is holding the camera.',
    result: 'Work that survives a full-screen view, shot by shot.',
    deliverables: ['Art direction', 'Lighting setup', 'Shot rules', 'Reference kit'],
  },
]

export type Service = {
  number: string
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Social Media Management',
    description:
      'Strategy, calendar, and publishing — owned end to end, so the feed stops depending on whoever has time this week.',
    points: ['Content pillars', 'Monthly calendar', 'Publishing & community'],
  },
  {
    number: '02',
    title: 'Content Production',
    description:
      'Films, reels, and stills shot to a plan. We travel to you, or hand you a shot list precise enough to shoot it yourself.',
    points: ['Direction', 'On-location shoots', 'Editing & post'],
  },
  {
    number: '03',
    title: 'Podcast Production & Repurposing',
    description:
      'Full post-production plus a repurposing pipeline that turns one recording into a month of short-form.',
    points: ['Post-production', 'Clip extraction', 'Captions & graphics'],
  },
  {
    number: '04',
    title: 'Personal Branding',
    description:
      'For founders who are the most persuasive asset the company has, and the least consistently used one.',
    points: ['Positioning', 'Studio days', 'Weekly cadence'],
  },
]

export type Testimonial = {
  quote: string
  name: string
  /** Company or location. Omitted when the client gave neither. */
  role?: string
}

/**
 * Real client testimonials, supplied by Kavora. Wording is the client's own —
 * some are trimmed at the end, and Shubham's numbered list was condensed to fit
 * the card, but nothing has been paraphrased. Do not rewrite these.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Kavlin has truly understood our vision, requirements and brand personality. From our logo, brand themes and creative banners to complete social media management, Kavora has transformed our presentation. For me, Kavora is not just an agency but a true branding partner.',
    name: 'Shubham Agrawal',
    role: 'Vardan Rice Industries',
  },
  {
    quote:
      'Working with Kavlin and her team has been a delight. Their proactive approach with ideas and their execution has been my favourite part. Not only do they share new ideas with me but they also ensure that I am always working on bringing them new ideas and content to work on. My social media game has improved a lot thanks to them.',
    name: 'Arjun Kanwar',
    role: 'Goa, India',
  },
  {
    quote:
      'Amazing experience working with Kavora. They helped me improve the way I present my singing and vlogs, making the content look more polished and engaging. From creative ideas to editing and understanding what works better on social media, their team has been supportive throughout the process.',
    name: 'Tansheet S. Chhabra',
    role: 'Barrie, Ontario',
  },
  {
    quote:
      'Working with Kavora has been an amazing experience. The entire process was smooth, the team was incredibly friendly and supportive, and communication was effortless throughout. Kavlin is approachable, understands the vision well, and genuinely cares about delivering quality work.',
    name: 'Jaya Agrawal',
    // TODO: confirm with Kavora whether "St John's, Newfoundland" is Jaya's.
  },
  {
    quote:
      'Working with Kavora has been a truly soulful experience. She beautifully understood the words and expressed them through thoughtful visuals, making every message feel clear, meaningful, and beautifully connected. We appreciate the depth, sincerity, and spiritual warmth she brought to our work.',
    name: 'Manish Baradiya',
  },
]

export type InstagramPost = {
  image: string
  caption: string
  href: string
}

export const instagramPosts: InstagramPost[] = [
  { image: '/KAV.JPG', caption: 'Behind the frame', href: 'https://instagram.com/kavora.in' },
  { image: '/brand identity kavora.png', caption: 'Identity system', href: 'https://instagram.com/kavora.in' },
  { image: '/new logo-1.png', caption: 'Studio day', href: 'https://instagram.com/kavora.in' },
  { image: '/new logo-3.png', caption: 'On location', href: 'https://instagram.com/kavora.in' },
  { image: '/new logo-4.png', caption: 'Cut and colour', href: 'https://instagram.com/kavora.in' },
  { image: '/new logo-5.png', caption: 'Set notes', href: 'https://instagram.com/kavora.in' },
  { image: '/Hero.png', caption: 'The team', href: 'https://instagram.com/kavora.in' },
]

export const differentiators = [
  {
    number: '01',
    title: 'Strategy before cameras',
    description:
      'Most agencies sell you a shoot. We work out what the content is supposed to do first, then shoot the least amount needed to do it.',
  },
  {
    number: '02',
    title: 'One team, whole pipeline',
    description:
      'Strategy, direction, production, and edit sit in the same room. Nothing gets lost in a handoff because there is no handoff.',
  },
  {
    number: '03',
    title: 'Built to run without us',
    description:
      'We leave behind systems, not dependencies. Shot lists, templates, and rules your team can actually use.',
  },
]

/** Confirmed against Kavora's "Social Links + Contact" sheet (Brand drive folder). */
export const contact = {
  email: 'kavora.in@gmail.com',
  instagram: 'https://www.instagram.com/kavora.in/',
  instagramHandle: '@kavora.in',
  facebook: 'https://www.facebook.com/profile.php?id=61579921170668',
  linkedin: 'https://www.linkedin.com/company/kavora-in/',
  /** The sheet has a "Number" row but it is empty — ask Kavora before using. */
  phone: '',
  /**
   * Cal.com — Kavora's own account. `calLink` is what the embed takes
   * (username/event-slug) and `calNamespace` must match the event slug; the
   * full URL is for plain links and new-tab buttons. All point at the
   * 30-minute event, which is what the contact page copy promises.
   */
  calLink: 'kavora.in/30min',
  calNamespace: '30min',
  calendarUrl: 'https://cal.com/kavora.in/30min',
  /**
   * TODO: the drive folder has no address. This is a country-level placeholder
   * and the map embed matches it — both must be set before launch.
   */
  address: 'India',
  mapEmbedUrl: 'https://www.google.com/maps?q=India&output=embed',
}
