# Toggle

## **About Toggle**

Toggles are a quick way to switch between on and off states. Similar to a physical light switch Toggles are used to turn something on/off instantly. The options are mutually exclusive and always have a default state, enabled or disabled.

## Usage

When you need to provide a switch to turn something on or off (eg. Do you want odds in decimal or fractional?)

If a physical switch would work for the action a toggle is the best option.

![Toggles structure](./media/toggle-usage.png)

**Use a toggle switch when:**

There are only 2 options to choose from, on or off.

To make decisions or a preference such as settings or dialogs.

## **Structure**

A toggle consists of the following:

![Toggles structure](./media/toggle-struture.png)

3. **Toggle** **slot**- Area the toggle button sits into and slides in
4. **Button**- the piece of the toggle which moves side to side
5. **Label** - use labels with a Toggle so the action is clear. Labels should be three words or less.

## Types

![Toggles structure](./media/toggle-variations.png)

1. **Primary** - Should be used most. Behaves like an on/off switch
2. **Secondary** - Use secondary when you are given two options to toggle between.

## Specs

![Toggles structure](./media/toggle-specs.png)

## Colour

Toggles use custom colour on three elements: the background (active state), the background (inactive state) and the button.

![toggle-colour1](./media/toggle-colour1.png)

| Element | Category              | Attribute                     | Value                                          |
| ------- | --------------------- | ----------------------------- | ---------------------------------------------- |
| 1.      | Background (active)   | Token<br />Color<br />Opacity | \$color-brand-secondary<br />#31953e<br />100% |
| 2.      | Button                | Token<br />Color<br />Opacity | \$color-white<br />#ffffff<br />100%           |
| 3.      | Background (inactive) | Token<br />Color<br />Opacity | \$color-grey-200<br />#eaeaea<br />100%        |

![toggle-colour2](./media/toggle-colour2.png)

| Element | Category              | Attribute                     | Value                                        |
| ------- | --------------------- | ----------------------------- | -------------------------------------------- |
| 1.      | Background (active)   | Token<br />Color<br />Opacity | \$color-brand-primary<br />#004833<br />100% |
| 2.      | Background (inactive) | Token<br />Color<br />Opacity | \$color-green-800<br />#1a6e5a<br />100%     |
| 3.      | Border                | Token<br />Color<br />Opacity | \$color-brand-primary<br />#004833<br />100% |
| 4.      | Text                  | Token<br />Color<br />Opacity | \$color-white<br />#ffffff<br />100%         |

## Typography

All toggles labels are set in sentence case and should not exceed three words.

![toggle-colour1](./media/toggle-typography.png)

| Element | Category    | Attribute                                     | Value                                   |
| ------- | ----------- | --------------------------------------------- | --------------------------------------- |
| 1       | Medium Bold | Typeface<br />Font<br />Size<br />Line height | Arial<br />Bold<br />12px<br />1.17     |
| 2       | Medium      | Typeface<br />Font<br />Size<br />Line height | Arial <br />Regular<br />10px<br />1.17 |
