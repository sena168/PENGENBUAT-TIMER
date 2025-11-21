# PENGENBUAT TIMER

A customizable timer application with multiple themes and dynamic title functionality.

## Features

- **Multiple Timer Presets**: 10 seconds, 1 minute, 15 minutes, and 1 hour presets
- **Custom Timer**: Set your own time using hours and minutes inputs
- **10 Themes**: Including Ocean Deep, Graphite Glow, Paper Fresh, Pumpkin Night, Holly Berry, Crescent Night, Seafoam Wave, Mochi Pastel, Neo Cyber, and Lantana Bloom
- **Dynamic Title**: The first word of the title changes randomly on page load and every 1 minute thereafter
- **Responsive Design**: Works on different screen sizes

## Theme Features

- Fixed visibility issue in Mochi Pastel theme dropdown menu
- Dynamic "(Current)" indicator that properly shows the currently selected theme
- Theme preferences saved to localStorage

## Title Randomization

- Title changes from a list of 16 different options
- Updates automatically every 1 minute when the site is open
- Configuration stored in external files for easy modification

## Technical Details

- External configuration for random title functionality (externals/random-title-config.js)
- External data file for random title information (externals/random-title-data.md)
- Git credentials properly configured as per external-notes.md

## Files

- `index.html`: Main HTML structure
- `script-logic.js`: Main JavaScript functionality
- `externals/random-title-config.js`: Configuration for random title functionality
- `externals/random-title-data.md`: Documentation for random title data
- `externals/prompt-list.md`: Development prompt list
- `externals/external-notes.md`: Git credentials and repository information