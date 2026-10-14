/**
 * Runs before paint (inlined in <head>) so the intro loader never flashes on a
 * visit that should skip it: only the first homepage load of a session plays
 * it, and never under reduced motion.
 */
export const introScript = `try{var r=document.documentElement;if(location.pathname!=='/'||sessionStorage.getItem('kavora-intro')||matchMedia('(prefers-reduced-motion: reduce)').matches){r.dataset.intro='skip'}else{r.dataset.intro='play';sessionStorage.setItem('kavora-intro','1')}}catch(e){document.documentElement.dataset.intro='skip'}`

/**
 * Seconds the homepage hero should hold its entrance while the intro is still
 * covering it. Read at mount — `introScript` has already set the flag.
 */
export function introDelay() {
  if (typeof document === 'undefined') return 0
  return document.documentElement.dataset.intro === 'play' ? 1.7 : 0
}
