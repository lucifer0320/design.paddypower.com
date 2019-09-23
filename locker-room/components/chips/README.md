# Chips

## About Chips

Chips allow our users to make selection or filter content. Unlike buttons, this should be treated only to filter/treat information rather than providing a destination.

## Usage

![ tab](./media/chips-usage.png)

### How to Use

- They should be compact, be careful of the content inside of them need to be clear.

- They need to be relevant and have a clear relationship to the content they represent.

- Chips should make the task to sort content easier.

### How Not to Use

They are not a button, so this should no be used to go to locations

## Structure

A tab comprises the following:

![tab](./media/chips-struture.png)

1. **Icon** - An area where you can add one icons.
2. **Background** - A discreet area surrounding the chip.
3. **Label** - This text label could be a counter or countdown.
4. **Title** - The textual label of the item. May be truncated if bigger than the % of space available.

## Types

For standard cases like the in- play or virtuals, use the primary version.

![tab](./media/chips-variations.png)

1. **Primary** - Should be the most used.
2. **Secondary** - Should be used on horse racing or greyounds next races.

## Specs

### Primary

![tab](./media/chips-specs-primary.png)

When using the primary with counter, a `padding-right: 2px` and `padding-radius:2px` needs to be added from the edge of the background

![tab](./media/chips-specs-primary-counter.png)

### Secondary

![tab](./media/chips-specs-secondary.png)

## Colour

### Primary

![tab](./media/chips-colors-primary.png)

| Element | State  | Category   | Attribute                           | Value                                    |
| ------- | ------ | ---------- | ----------------------------------- | ---------------------------------------- |
| 1.      | Normal | Background | Color<br />Text-colour              | $color-white<br />\$color-grey-800       |
| 2.      | Hover  | Background | Color<br />Text-colour              | $color-grey-150<br />\$color-grey-800    |
| 3.      | Active | Background | Color<br />Text-colour              | $color(…)<br />\$color-grey-800          |
| 4.      | Normal | Counter    | Text-colour<br />Color<br />Opacity | $color-grey-600<br />\$color(…)<br />15% |
| 4.      | Hover  | Counter    | Text-colour<br />Color<br />Opacity | $color-grey-600<br />\$color(…)<br />15% |

### Secondary

![tab](./media/chips-colors-secondary.png)

| Element | State  | Category   | Attribute              | Value                                 |
| ------- | ------ | ---------- | ---------------------- | ------------------------------------- |
| 1.      | Normal | Border     | Color<br />Border      | \$color-grey-550<br />1px             |
| 2.      | Active | Background | Color<br />Border      | \$color-esmerald-300<br />1px         |
| 2.      | Active | Background | Text-colour            | \$color-grey-550                      |
| 3.      | Hover  | Background | Color<br />Text-colour | $color-grey-150<br />\$color-grey-500 |
| 5.      | Hover  | Border     | Color<br />Border      | \$color-grey-300<br />1px             |

## Typography

![tab](./media/chips-typography.png)

| Element | Category | Attribute                                     | Value                                  |
| ------- | -------- | --------------------------------------------- | -------------------------------------- |
| 1.      | Small    | Typeface<br />Font<br />Size<br />Line height | Arial<br />Regular<br />10px<br />1.2  |
| 2.      | xSmall   | Typeface<br />Font<br />Size<br />Line height | Arial<br />Regular<br />8px<br />1.25  |
| 3.      | Medium   | Typeface<br />Font<br />Size<br />Line height | Arial<br />Regular<br />12px<br />1.17 |
| 4.      | Medium   | Typeface<br />Font<br />Size<br />Line height | Arial<br />Bold<br />12px<br />1.17    |
