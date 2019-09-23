# Accordion

## About accordions

An accordion menu is a component that reveals or hides lists of links or items. The primary use is to reduce the screen space used for long lists and make it easier for users to scan information. The accordions should:

- Reduce scrolling
- Groups items into a simple hierarchy
- Provides a quick overview
- Makes it faster and easier to scan than a long list of items

## Usage

When you need to display long, hierarchical lists of categories and sub-categories.

- An accordion can be nested within another accordion, to a maximum depth of 2 levels.

- Multiple accordions can be open at the same time

- An accordion can have one panel open by default on initial display

- Accordions have a distance of 2px between each other

![accordion1](./media/accordion2.png)

## Structure

An accordion list comprises of the following:

![accordion1](./media/accordion1.png)

1. **Arrow** - A visual cue denoting the accordion is open **(a)** or closed **(b)**

2. **Title** - The textual title of the item. May be truncated or wrap over 2 lines, depending on the nature of the event

3. **Number** - Should be used to show the number of races for the event

4. **Subtitle** - Should be added to indicate the next race status

5. **Row** - The area bounding the title and icon.

6. **Badges (optional)** - An icon used to promote and show offers available. The max number off badges is 2. Badges are stacked.

## Variations

For standard accordions or sports pages use the style 1. Some pages of racing use styles (2 lines).

![accordion1](./media/accordion4.png)

1. **Primary** - Should be used most.

2. **Secondary** - Used when secondary information below the accordion name is needed.

## Specs

Primary

![accordion1](./media/accordion3.png)

Secondary

![accordion1](./media/accordion-secondary-specs.png)

There is no limit to the height of an open row, however, the padding specs above should be followed. The width of an Accordion varies based on the content, layout and page design. The chevron icon can be found on the **iconography** library page.

Include padding between labels, body copy and separation lines to provide breathing room between elements.

**Note:** Padding on the left is 8px to allow room for the arrow icon.

## Colour

Accordions use custom colour on six elements: the background, title, subtitle, extra information, icon, and pressed state.

![accordion1](./media/accordion5.png)

| Element | Category         | Attribute                     | Value                                       |
| ------- | ---------------- | ----------------------------- | ------------------------------------------- |
| 1.      | Background       | Token<br />Color<br />Opacity | \$color-grey-50<br />#f6f6f6<br />100%      |
| 2.      | Background Hover | Token<br />Color<br />Opacity | \$color-acc-main-open<br />#f3f6f<br />100% |
| 3. & 4. | Arrow and Title  | Token<br />Color<br />Opacity | \$color-grey-900<br />#444444<br />100%     |
| 5.      | Subtitle         | Token<br />Color<br />Opacity | \$color-grey-800<br />#666666<br />100%     |

## Typography

All Accordion labels are set in sentence case and should not exceed three words.

| Element                           | Category    | Attribute                                     | Value                                  |
| --------------------------------- | ----------- | --------------------------------------------- | -------------------------------------- |
| Title                             | Medium Bold | Typeface<br />Font<br />Size<br />Line height | Arial <br />Bold<br />12px<br />1.17   |
| Subtitle &<br />Extra information | Small       | Typeface<br />Font<br />Size<br />Line height | Arial <br />Regular<br />10px<br />1.2 |

## Interaction & transition

Each accordion is expanded/collapsed by tapping **the row (5)**.

Do not collapse/expand accordions without a transition. Collapse and expand should happen very quickly. A good rule of thumb is complete an expand/collapse in 300 milliseconds using a SlideDown.

![accordion1](./media/accordion.mp4)
