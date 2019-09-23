# Tooltip

## About Tooltip

A tooltip is a brief, informative message that appears when a user interacts with an element in a
graphical user interface .

## Usage

Use tooltips to add information to an element. Tooltips are used to give the user a better
understanding of what is happening on the page.

![primaryPallete](media/tooltip-usage.png)

## Structure

An tooltip list comprises of the following:

![primaryPallete](media/tooltip-struture.png)

1. **Container** - The area bounding the title and icon.

2. **Title**- the title should be short and concise
3. **Subtitle**-additional information beside the title if required.
4. **Tooltip arrow**- an arrow pointing in the direction the tooltip information is for.

## Specs

![primaryPallete](media/tooltip-specs.png)

There is no current limit to the width of an open row, however, the padding specs above should be followed.

## Colour

![primaryPallete](media/tooltip-colour.png)

| Element | Category  | Attribute                     | Value                                          |
| ------- | --------- | ----------------------------- | ---------------------------------------------- |
| 1.      | Container | Token<br />Color<br />Opacity | \$color-brand-highlight<br />#C9DA2A<br />100% |
| 2.      | Title     | Token<br />Color<br />Opacity | \$color-green-700<br />#4C721D<br />100%       |
| 3.      | Subtitle  | Token<br />Color<br />Opacity | \$color-brand-primary<br />#004833<br />100%   |
| 4.      | Arrow     | Token<br />Color<br />Opacity | \$color-brand-highlight<br />#C9DA2A<br />100% |

## Typography

All tooltip labels are set in sentence case.

![primaryPallete](media/tooltip-typography.png)

| Element  | Category    | Attribute                                     | Value                                   |
| -------- | ----------- | --------------------------------------------- | --------------------------------------- |
| Title    | Medium      | Typeface<br />Font<br />Size<br />Line height | Arial <br />Regular<br />12px<br />1.17 |
| Subtitle | Medium Bold | Typeface<br />Font<br />Size<br />Line height | Arial <br />Bold<br />10px<br />1.2     |
