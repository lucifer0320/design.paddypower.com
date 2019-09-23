# Slider

## About sliders

Sliders allow users to adjust a selection, where the user can move the handle along a horizontal track to increase or decrease a value from a range of values.

## Usage

Sliders reflect a range of values along a bar, from which users may select a single value.

![badge-struture](./media/slider-usage.png)

## Structure

![badge-struture](./media/slider-struture.png)

1**.Track** - The track shows the range available for user selection.

2.**Knot** - Display the selected value through its position, sliding along the track.

3.**Label** - A label displays to show what's the value of the currently stake.

4.**Mark** - Mark represent current stake value.

## States

Sliders have normal, hover, and pressed states.

![badge-struture](./media/slider-states.png)

## Specs

### Track specs

![badge-struture](./media/slider-specs.png)

### Mark specs

![badge-struture](./media/slider-specs2.png)

## Colour

![badge-struture](./media/slider-colours.png)

| Element | Category         | Attribute                     | Value                                          |
| ------- | ---------------- | ----------------------------- | ---------------------------------------------- |
| 1.      | Active Track     | Token<br />Color<br />Opacity | \$color-brand-secondary<br />#31953e<br />100% |
| 2.      | Knot             | Token<br />Color<br />Opacity | \$color-brand-secondary<br />#31953e<br />100% |
| 3.      | Label background | Token<br />Color<br />Opacity | \$color-white<br />#ffffff<br />100%           |
| 4.      | Label text       | Token<br />Color<br />Opacity | \$color-grey-800<br />#666666<br />100%        |
| 5.      | Mark             | Token<br />Color<br />Opacity | \$color-grey-800<br />#666666<br />100%        |
| 6.      | Inactive Track   | Token<br />Color<br />Opacity | \$color-grey-400<br />#bbbbbb<br />100%        |

## Typography

![badge-struture](./media/slider-typography.png)

| Element | Category    | Attribute                                     | Value                                |
| ------- | ----------- | --------------------------------------------- | ------------------------------------ |
| Label   | Medium Bold | Typeface<br />Font<br />Size<br />Line height | Arial <br />Bold<br />12px<br />1.17 |

## Interaction & transition

![badge-struture](./media/slider.mov)
