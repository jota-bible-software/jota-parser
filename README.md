Jota Parser finds references to Bible passages in the given text. 

For example it will understand that "Read J 3 16" refers to the Gospel of John chapter 3 verse 16. Lots of examples of what it can parse are presented [here](https://jota-bible-software.github.io/jota-parser/index.html?common=true).

The output of parsing is an array of references, where reference can be a:
1. Single chapter: `[bookIndex, chapter]` 
1. Single verse: `[bookIndex, chapter, verse]` 
1. Range of verses in a single chapter: `[bookIndex, chapter, startVerse, endVerse]` 
1. Chapter crossing range of verses: `[[bookIndex1, chapter1, verse1?], [bookIndex2, chapter2, verse2?]]`

Currently supported locales: `en-US`, `pl-PT`, `pt-BR`. Locale bundles provide support for parsing names of books in the given language.

## Usage

ES6:
``` javascript
import { Parser, enUS } from 'jota-parser'
const parser = new Parser({ locales: [enUS] })
console.log(parser.parse('J 3 16'))
```

Browser:
``` html
<script type="module">
  import { Parser, enUS } from "https://unpkg.com/jota-parser?module"
  const parser = new Parser({locales: [enUS]})
  console.log(parser.parse('Read J 3:16'))
</script>
```

## Development

### Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run dev
```

### Build for production
It builds both library using `vite.config.lib.js` config and the github pages site using `vite-config.gh-pages.js` config
```bash
npm run build
```

### Unit test
```bash
npm run test
```

### Deploy github pages
```
npm run deploy:gh-pages
```

### Add support for a new locale

1. Create `parser-${locale}.js` in `/src` folder
1. Create `data-${locale}.js` and `parser.${locale}.spec.js` in `/test` folder
1. Add locale to `supportedLocales` constance in `index.js`
