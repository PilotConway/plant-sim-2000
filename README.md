# Plant Sim 2000

The ultimate plant simulator!

The game is simple. You have 20 days to keep your plant alive. Every day you can either water your
plant, or give your plant light. But beware! Every day has new weather, and if you over water
or give your plant too much light, it might not make it.

When the game is started you are presented with a screen showing the current day and weather and the
option to water or give light to your plant. After 2 seconds it advances to the next day.

If the weather is raining, be sure to give your plant sun! If you give water it will over water and
hurt the plant. If the weather is sunny, do the opposite, water will help your plant and more light
will hurt it. On cloudy days you can give water or light, it will appreciate either one.

Pay attention to the score bar at the top, if it goes red your plant is dying!

## Running the App 

```
yarn 
yarn start
```

This will install deps and then start the application. You can then go to `http://localhost:3000` 
in your browser of choice to see the application if it does not launch automatically. 

The app was created using Create React App. 

## TODO

A bunch of things that need to be addressed, or made better, or things that immediately bug me.

- I think once the score goes negative, the game should end with the "Your plant died" screen.
  Currently, no matter the status, it's waits until the end of the time period to finish the game.
- The day should also be in the reducer, and game finished should be handled through a gameState
  property. This would clean up the useEngine hook as well as hopefully address the useEffect
  memory leak being shown because of a state update after unmount of the component in the console.
- There are two lint warnings currently that need to be addressed in the console.
- Once the user clicks, the buttons should go disabled. They have made their choice, and should now
  have to live with it for the full two seconds, correct or not. Should make it more challenging too.
- Originally I wanted to also have a crop yield. At the end, your score acutally relates to a total
  crop yield. So not only does the plant have to stay alive, but you want to get the highest yeild
  possible. Could be useful to chain simulations together or have a harder mode where you could have
  more than one plant (or crop) at a time going. Up the ante.
- Better show the weather with icons and color.
- Refactor! Storybook! Tests! All the things I didn't have time for.
