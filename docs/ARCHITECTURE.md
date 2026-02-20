# Alaric TD Structure

## Runtime files
- `index.html`: Main playable build entry point.
- `Index.html`: Case-variant copy kept in sync for hosts with differing default file resolution.
- `src/config/balance.js`: Centralized progression and combat tuning values.

## Design notes
- Balance values are intentionally externalized to support rapid iteration without touching combat logic flow.
- The current tuning targets long progression (Rift 100+) by combining:
  - stronger tower scaling,
  - reduced boss HP multiplier,
  - stronger boss-focused damage ramps,
  - smoother early-rift onboarding.

## Next recommended extraction
- Move the inline game script into `src/game.js`.
- Split into `src/systems/` modules for spawning, towers, enemies, and loot.
