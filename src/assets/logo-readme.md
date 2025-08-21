Logo asset notes

- Path: `src/assets/logo.svg`
- Style: abstract orbital/galaxy mark inspired by aifiesta.ai's simple rounded mark, using colors sampled from coledra.com.
- Colors used (approx):
  - #0A6CF0 — primary blue (brand accent)
  - #00B7A8 — teal/cyan accent
  - #7C3AED — purple accent
- Use: include the SVG inline or as an <img> for the header. Example React import:

```jsx
import Logo from './assets/logo.svg';

function Header(){
  return <img src={Logo} alt="AI Galaxy" style={{height: 40}} />
}
```

- Licensing: Original asset created for this project. You can request variations (monochrome, white) if needed.
