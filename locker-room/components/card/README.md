# Card

## About Card

A card is a container for unique related data containing content and relevant actions and controls. The primary function of the card should be the action - typically to link to a new view or expand to reveal more. See card types below

Card content (e.g. images, text, icons) and quantity can vary greatly, depending on the content being expressed. Cards may be "entry points" to more complex and detailed content or "destinations" in their own right.

Card's contain actions. These actions may be accessed via icons, text or UI controls are within the context of the card.

- UI controls are used for modifying the content of the card.
- Text may contain inline links.
- Supplemental actions should have some form of visual affordance to distinguish them from other supplemental actions e.g. a line, an arrow, a UI element

One or more cards may be presented in a view. Card collections can move horizontally and/or vertically.

Cards may be controlled by UI outside of the array of cards e.g. a segmented bar or accordion.

Cards do not have a maximum height. Cards height may exceed the height of the viewport. Cards may expand to accommodate the content rather than truncate.

## Usage

Use cards to present discreet sets of content and functionality in a given view. A card is, essentially, a container for content and relevant actions. Cards are not a panacea. They don't replace the need for other UI elements like accordions, lists or buttons. Before using a card consider whether some other UI might be better. Cards are intended to serve as a UI component rather than serve a purely decorative function.

![img](./media/cards.png)

## Structure

An card comprises the following:

![img2](media/cards2.png)

1. **Arrow** - A visual cue denoting the accordion is open **(a)** or closed **(b)**

2. **Title** - The textual title of the item. May be truncated if bigger that the % of space available.

3. **Odd** - Should be used to show the odd value.

4. **Card** - A discreet area surrounding the expanded card.

5. **Expanded card** - A discreet area surrounding the expanded card.

## Types

For standard cases like homepage or in- play , use the primary version. On the betslip we use the secondary.

![img2](media/cards3.png)

1. **Primary** - Should be the most used.

2. **Secondary** - Should be used on the betslip.

3. **Tertiary** - Should be used to hightlight a featured based content.

4. **Expanded** - Should be used on the betslip.

## Header

The header can be used to frame the section itself with a title. This is especially useful if there’s going to be multiple cards on one page

![img2](media/header.png)

## Footer

The default footer contains links that allow the user to navigate and access additional information if and when required.

![img2](media/footer.png)

## Expand

In certain situations it’s beneficial to artificially limit the vertical height of a card to ensure a page length that’s digestible.

![img2](media/expand.png)

## Specs

![img2](media/cards4-1.png)

There is no limit to the height of the card, however, the padding specs above should be followed. The width of an card varies based on content, layout and page design.

**Note**: All the cards have a `border-radius:2px`

### Header

![img2](media/cards4-2.png)

### Footer

![img2](media/cards4-3.png)

### Expanded

![img2](media/cards4.png)

There is no limit to the height of an open row, however, the padding specs above should be
followed. The width of an expanded card varies based on the content, layout, and page design. The
chevron icon can be found on the iconography library page.

**Note:** Padding on the left is 8px because we are considering the bondery box on the arrow
icon.

## Colour

![img2](media/cards-colors.png)

| Element | Category            | Attribute                     | Value                                         |
| ------- | ------------------- | ----------------------------- | --------------------------------------------- |
| 1.      | Background          | Token<br />Color<br />Opacity | \$color-white<br />#ffffff<br />100%          |
| 2.      | Title               | Token<br />Color<br />Opacity | \$color-grey-800<br />#444444<br />100%       |
| 3.      | Shadow              | Color<br />Size               | rgba(0,0,0,0.25);<br />0px 0px 2px 0px        |
| 4. & 5. | Link & Icon         | Token<br />Color<br />Opacity | \$color-link-txt<br />#2C7FAE<br />100%       |
| 4. & 5  | Link & Icon : Hover | Token<br />Color<br />Opacity | \$color-link-txt-hover<br />#256B94<br />100% |

![img2](media/cards-colors-3.png)

| Element | Category   | Attribute                     | Value                                |
| ------- | ---------- | ----------------------------- | ------------------------------------ |
| 1.      | Background | Token<br />Color<br />Opacity | \$color-white<br />#ffffff<br />100% |

![img2](media/cards-colors-4.png)

| Element | Category         | Attribute                     | Value                                   |
| ------- | ---------------- | ----------------------------- | --------------------------------------- |
| 1.      | Background       | Token<br />Color<br />Opacity | \$color-grey-800<br />#666666<br />100% |
|         | Background-hover | Token<br />Color<br />Opacity | \$color-grey-900<br />#444444<br />100% |

![img2](media/cards-colors-5.png)

| Element | Category   | Attribute                     | Value                                     |
| ------- | ---------- | ----------------------------- | ----------------------------------------- |
| 1.      | Background | Token<br />Color<br />Opacity | \$color-white<br />#ffffff<br />100%      |
| 2.      | Border     | Token<br />Color<br />Opacity | \$color-yellow-400<br />#fecf33<br />100% |

![img2](media/cards-colors-2.png)

| Element | Category            | Attribute                     | Value                                         |
| ------- | ------------------- | ----------------------------- | --------------------------------------------- |
| 1. & 2. | Icon & Label        | Token<br />Color<br />Opacity | \$color-white<br />#ffffff<br />100%          |
| 3.      | Title               | Token<br />Color<br />Opacity | \$color-white<br />#ffffff<br />100%          |
| 4.      | Background          | Token<br />Color<br />Opacity | \$color-grey-800<br />#666666<br />100%       |
| 5.      | Background-expand   | Token<br />Color<br />Opacity | \$color-grey-900<br />#444444<br />100%       |
|         | Link & Icon : Hover | Token<br />Color<br />Opacity | \$color-link-txt-hover<br />#256B94<br />100% |
| 6.      | Border              | Border-radius                 | 2px                                           |

## Typography

| Element | Category    | Attribute                                     | Value                                 |
| ------- | ----------- | --------------------------------------------- | ------------------------------------- |
| Title   | Medium Bold | Typeface<br />Font<br />Size<br />Line height | Arial<br />Bold<br />12px<br />1.17   |
| Label   | Small       | Typeface<br />Font<br />Size<br />Line height | Arial<br />Regular<br />10px<br />1.2 |

## Interaction & transition

![img2](media/card.gif)
