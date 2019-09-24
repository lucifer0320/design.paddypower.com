# Bet Button

## About Bet button

Bet buttons allow users to place a bet. They are the starting point for making a selection and when clicked add a desired selection to the betslip.

A button contains a numeric label representing the odds. The odds are expressed as a pair of numbers as fractions (e.g. 4/1) or a single number as decimals (e.g. 5.0) depending on the users preference.

## Usage

Bet buttons communicate the price of anything that can be bet on. They are used to tell users the odds associated with a selection in any given match/game/event and act as the primary call to action for bet placement.

![primaryPallete](media/bet-button-usage.png)

## Structure

Bet Buttons are composed of two elements:

![primaryPallete](media/bet-button-struture.png)

1. **Container** - space around the label.
2. **Numeric Label** - the odds which describe the ratio of pay-out to stake

## Types

![primaryPallete](media/bet-button-variations.png)

1. **Bet Button** - default state of odds for any selection
2. **Bet Button Price Up** - use when the odds for a selection increase
3. **Bet Button Price Down** - use when the odds for a selection decrease
4. **Bet Button PowerPrice** - use to signify increased value for a selection
5. **Bet Button Disabled** - use to indicate a suspended or discontinued selection

## Specs

![primaryPallete](media/bet-button-specs.png)

## Colour

### Bet Button

![primaryPallete](media/bet-button.png)

| Element | Category | Attribute                                           | Value                                                              |
| ------- | -------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| 1.      | Normal   | Background<br />Colour<br />Text-colour             | \$color-act-bg-odds<br />#c9da2a<br />#406118                      |
| 2.      | Hover    | Background<br />Colour<br />Text-colour             | \$color-act-bg-odds-hover<br />#b9c926<br />#4c721d                |
| 3.      | Active   | Background<br />Colour<br />Text-colour<br />Border | \$color-act-bg-odds-pressed<br />#abba23<br />#004833<br />#919e1e |
| 4.      | Disable  | Background<br />Colour<br />Icon Colour             | \$color-act-bg-disable<br />#eaeaea<br />#aaaaaa                   |

### Bet Button Price Up

![primaryPallete](media/bet-button-odds-up.png)

| Element | Category | Attribute                                           | Value                                                                |
| ------- | -------- | --------------------------------------------------- | -------------------------------------------------------------------- |
| 1.      | Normal   | Background<br />Colour<br />Text-colour             | \$color-act-bg-oddsup<br />#d63c3c<br />#ffffff                      |
| 2.      | Hover    | Background<br />Colour<br />Text-colour             | \$color-act-bg-oddsup-hover<br />#c93838<br />#fff0f0                |
| 3.      | Active   | Background<br />Colour<br />Text-colour<br />Border | \$color-act-bg-oddsup-pressed<br />#a32e2e<br />#ffffff<br />#802424 |
| 4.      | Disable  | Background<br />Colour<br />Icon Colour             | \$color-act-bg-disable<br />#eaeaea<br />#aaaaaa                     |

### Bet Button Price Down

![primaryPallete](media/bet-button-odds-down.png)

| Element | Category | Attribute                                           | Value                                                                  |
| ------- | -------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| 1.      | Normal   | Background<br />Colour<br />Text-colour             | \$color-act-bg-oddsdown<br />#2c7ba8<br />#ffffff                      |
| 2.      | Hover    | Background<br />Colour<br />Text-colour             | \$color-act-bg-oddsdown-hover<br />#28719c<br />#ecf8ff                |
| 3.      | Active   | Background<br />Colour<br />Text-colour<br />Border | \$color-act-bg-oddsdown-pressed<br />#236287<br />#ffffff<br />#1e5473 |
| 4.      | Disable  | Background<br />Colour<br />Icon Colour             | \$color-act-bg-disable<br />#eaeaea<br />#aaaaaa                       |

### Bet Button PowerPrice

![primaryPallete](media/bet-button-power-price.png)

| Element | Category | Attribute                                           | Value                                                                    |
| ------- | -------- | --------------------------------------------------- | ------------------------------------------------------------------------ |
| 1.      | Normal   | Background<br />Colour<br />Text-colour             | \$color-act-bg-powerprice<br />#fecf33<br />#444444                      |
| 2.      | Hover    | Background<br />Colour<br />Text-colour             | \$color-act-bg-powerprice-hover<br />#f2c530<br />#444444                |
| 3.      | Active   | Background<br />Colour<br />Text-colour<br />Border | \$color-act-bg-powerprice-pressed<br />#e6bb2e<br />#444444<br />#d9b02b |
| 4.      | Disable  | Background<br />Colour<br />Icon Colour             | \$color-act-bg-disable<br />#eaeaea<br />#aaaaaa                         |

## Typography

![primaryPallete](media/bet-button-typography.png)

| Element     | Category | Attribute                                     | Value                                |
| ----------- | -------- | --------------------------------------------- | ------------------------------------ |
| 1, 2, 3 & 4 | Large    | Typeface<br />Font<br />Size<br />Line height | Arial <br />Bold<br />14px<br />1.14 |

## Interaction & transition

When the odds increase or decrease an animation indicates a change in odds and button style. The button changes from **Bet Button** to **Bet Button Price Up** or **Bet Button Price Down**. This signifier is used to notify users of changes. After 4 seconds it fades out and rolls back to the normal bet button colour.

[button animation](media/button_anim.mp4 ':include width=100% controls=true loop=true')
