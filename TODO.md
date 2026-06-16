# TODO - Fix background/hero/project videos

- [x] Fix hero video path in `components/landingPage/HeroSection.tsx` ("/hero.mp4" -> "/video/hero.mp4").
- [x] Projects section uses MP4 URLs from `Projects.tsx` -> `"/videos/*.mp4"`. This likely should be `"/video/*.mp4"` to match `public/video/*.mp4`.

- [x] Updated Projects video URLs to `"/video/*.mp4"`.


- [ ] If videos still don’t play: check browser DevTools Network for 404s and Console for autoplay errors.

