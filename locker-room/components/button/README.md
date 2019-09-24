# Buttons

## About buttons

Buttons are used to trigger actions. There are a variety of different button styles applied throughout our products each used to represent a specific type of action.

The button label uses sentence case and are as short as possible, while clearly explaining what happens when the button is clicked.

Avoid using disabled buttons to prevent users from completing an intended action without providing an explanation as to why the button has been disabled.

## Usage

They are placed throughout the UI, in places like:

- Cards

- Forms

- Modals

- Sidebar

![primaryPallete](./media/button-usage.png)

## Structure

Buttons can contain a combination of a clear label and an icon while links are always text.

![primaryPallete](./media/button-struture.png)

1. **Container** - Is around a text label.

2. **Main label** - Text that indicates the result of selecting the button.

3. **Icon (optional)** - Use icons after the label to draw more attention to it, or help convey more meaning.

4. **Secondary label** - Text that gives more detail about the main label.

## Variations

![primaryPallete](./media/button-variations.png)

1. **Default button** - Default buttons have the highest emphasis and are used as the primary call to action on a page. Used in different places means the colour for the text and background often changes.
2. **Outlined button** - Use with a default button for actions that are less crucial such as "cancel".
3. **Link button** - Link buttons are used to navigate to another page or to be on the footer of a card to show more or less information. The icon is optional and should be used on links that redirect to another page.
4. **Icon button** - Use for actions that can be represented by an icon.
5. **Round button** - Round buttons are used to create a patternized group of actions and can have either text or an icon as a label representing the action.
6. **Square button** - Used when the main label is not enough to explain the action and needs some extra info.

## Specs

![primaryPallete](./media/buttons-specs.png)

![primaryPallete](./media/buttons-specs2.png)

![primaryPallete](./media/buttons-specs3.png)

**Note:** The default, outlined, icon and detail button have `border-radius:2px`.

## Colour

### Primary button

![primaryPallete](./media/button-color-primary.png)

| Element | Category | Attribute                             | Value                                                               |
| ------- | -------- | ------------------------------------- | ------------------------------------------------------------------- |
| 1.      | Normal   | Background<br />Color<br />Text-color | $color-act-bg-primary<br />#2c7fae<br />\$color-white               |
| 2.      | Hover    | Background<br />Color<br />Text-color | \$color-act-bg-primary-pressed<br />#328fc4<br />#eaf4f9            |
| 3.      | Active   | Background<br />Color<br />Text-color | $color-grey-900<br />#256b94<br />\$color-white                     |
| 5.      | Disable  | Background<br />Color<br />Text-color | \$color-act-bg-disable<br />​\$color-grey-200<br />\$color-grey-600 |

### Secondary button

![primaryPallete](./media/button-color-secondary.png)

| Element | Category | Attribute                              | Value                                                       |
| ------- | -------- | -------------------------------------- | ----------------------------------------------------------- |
| 1.      | Normal   | Text-color<br />Border                 | #2c7fae<br />#2c7fae                                        |
| 2.      | Hover    | Background<br />Text-color<br />Border | \#f6f9fb<br />\#256b94<br />\#256b94                        |
| 3.      | Active   | Background<br />Text-color<br />Border | \#e7eff3<br />\#256b94<br />\#256b94                        |
| 5.      | Disable  | Background<br />Text-color<br />Border | \$color-grey-50<br />\$color-grey-600<br />\$color-grey-600 |

### Round button

![primaryPallete](./media/button-color-round.png)

| Element | Category | Attribute                                   | Value                                                        |
| ------- | -------- | ------------------------------------------- | ------------------------------------------------------------ |
| 1.      | Normal   | Background<br />Border<br />Text/icon color | \$color-white<br />​\$color-grey-200<br />​\$color-grey-900  |
| 2.      | Hover    | Background<br />Border<br />Text/icon color | \$color-grey-50<br />\$color-grey-200<br />​\$color-grey-900 |
| 3.      | Active   | Background<br />Border<br />Text/icon color | #d5e5ef<br />#b4d1e3<br />#20678F                            |
| 4.      | Disable  | Background<br />Border<br />Text/icon color | \$color-white<br />\$​color-grey-200<br />​\$color-grey-200  |
| 5.      | Delete   | Background<br />Text/icon color             | \$color-red-500<br />\$color-white                           |

### Square button

![primaryPallete](./media/button-color-detail.png)

| Element | Category | Attribute                              | Value                                                          |
| ------- | -------- | -------------------------------------- | -------------------------------------------------------------- |
| 1.      | Normal   | Background<br />Border<br />Text-color | \$color-grey-50<br />\$color-grey-200<br />​\$color-grey-800   |
| 2.      | Hover    | Background<br />Border<br />Text-color | \$color-grey-200<br />​\$color-grey-200<br />​\$color-grey-800 |
| 3.      | Active   | Background<br />Border<br />Text-color | #d5e5ef<br />#b4d1e3<br />#20678F                              |
| 4.      | Disable  | Background<br />Border<br />Text-color | \$color-grey-50<br />\$color-grey-200<br />​\$color-grey-300   |

## Typography

![primaryPallete](./media/button-typography.png)

| Element | Category    | Attribute                                     | Value                                   |
| ------- | ----------- | --------------------------------------------- | --------------------------------------- |
| 1 & 2   | Medium Bold | Typeface<br />Font<br />Size<br />Line height | Arial <br />Bold<br />14px<br />1.14    |
| 3       | Small       | Typeface<br />Font<br />Size<br />Line height | Arial <br />Regular<br />12px<br />1.17 |
| 4       | Large Bold  | Typeface<br />Font<br />Size                  | Arial <br />Bold<br />16px              |
| 5       | xLarge Bold | Typeface<br />Font<br />Size                  | Arial <br />Bold<br />18px              |
| 6       | xSmall      | Typeface<br />Font<br />Size                  | Arial <br />Regular<br />10px           |

## Interaction & transition

A loading animation is used when performing when computational or connections speeds are slow. They help to notify users that loading is underway.

[button animation](./media/button_anim.mp4 ':include width=100% controls=true loop=true')
