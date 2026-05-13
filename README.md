# Cinematic React Movie Site

React + Vite cinematic landing page για ταινία.

## Πώς το τρέχεις σε Windows 11 / VS Code

1. Κάνε unzip τον φάκελο.
2. Άνοιξέ τον στο Visual Studio Code.
3. Άνοιξε terminal μέσα στο VS Code.
4. Τρέξε:

```bash
npm install
npm run dev
```

5. Άνοιξε το local link που θα σου δώσει το Vite, συνήθως `http://localhost:5173`.

## Δομή

```text
public/
  images/   εικόνες, poster, stills
  videos/   trailer ή background videos
  audio/    μουσική / sound effects
src/
  components/
    Hero.jsx
    FilmGrain.jsx
    Sparks.jsx
    StorySection.jsx
    TrailerSection.jsx
  styles/
    global.css
  App.jsx
  main.jsx
```

## Τι αλλάζεις πρώτο

- Τίτλος ταινίας: `src/App.jsx`
- Χρώματα / VFX: `src/styles/global.css`
- Trailer section: `src/components/TrailerSection.jsx`
- Background video: βάλε αρχείο στο `public/videos/`
