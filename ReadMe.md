# Collin McRae Rally 2.0 UI fingubingu
*by Alina Rosa*


https://github.com/user-attachments/assets/05a68469-573c-45f2-87f2-16b5cf94d929


Fancy letters following an svg path like in Collin 2.0 menu.
Note: not exactly like the menu, but like, close enough

## Customization
In `script.js` modify `word` to your text and `repetitions` to any you like, or think look good.

In `styles.css` you have some stuff to adjust:
- `transform: scale(#)` - change # to number so that your path looks good
- `offset-path: path( <path> )` - just an svg path, examples included
  - you can get it from any svg image, they're all just code after all
- `font-size` - to your liking

Generally it's an act of finding good balance between scale, font size, and repetitions.  
Also you can remove/change the background and do whatever, it's just CSS. Go wild.  
Ah and also to adjust speed change both occurences of the time (6000ms by default). They should match so the letters are spaced evenly.
