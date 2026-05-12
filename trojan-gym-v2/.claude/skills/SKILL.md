# Frontend Design Skill — Trojan Gym

## Identity
Dark industrial luxury. Think high-end Dubai gym meets military precision.
Never generic. Never safe. Every element should feel intentional and expensive.

## Typography
- Headings: Bebas Neue — aggressive, tall, commanding
- Subheadings: Barlow Condensed 600
- Body: Barlow 300/400
- Never use Inter, Roboto, or system fonts

## Color Tokens
- --black: #0A0A0A
- --black-2: #111111
- --red: #C41E1E
- --gold: #B8960C
- --white: #F5F0E8
- --white-muted: #9A9490

## Spacing System
- Base grid: 8px
- Section padding: 120px vertical
- Container max-width: 1400px

## Animation Rules (Framer Motion)
- All sections fade + slide up on scroll (y: 60 → 0, opacity: 0 → 1)
- Staggered children: 0.1s delay between items
- Duration: 0.7s ease
- Hover on cards: slight scale + red border glow

## Component Patterns
- Buttons: all caps, Barlow Condensed, letter-spacing 0.2em, crimson fill or ghost
- Cards: dark border (#1A1A1A), subtle red glow on hover
- Section labels: 0.75rem, 0.3em letter-spacing, crimson, all caps

## Avoid
- Purple gradients
- White backgrounds
- Generic card shadows
- Cookie-cutter layouts
- Anything that looks like a Tailwind template