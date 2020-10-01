# AutoSlider

AutoSlider lets you easily add automatic sliders. You can define the number of items displayed, as well as the slide
speed by simply adding a defining class name.

## How to use

You need to include both, the **.js** and **.css** file in your project and you are ready to go.

To apply the slider, just use one of the available classes, representing the desired behavior.

## Class definition

Here are some sample slider definitions:

* **auto-slider-1** - Sets up the slider with only 1 slide shown, using the default slide speed of 3000ms
* **auto-slider-5** - Sets up the slider with 5 columns 
* **auto-slider-5-1500** - Sets up the slider with 5 columns at a slide speed of 1500ms

## HTML Markup

The defining class can be applied to any wrapper, above the actual slides. The first children having more than 1
item, the slider will be initialized on. This allows you to add the slider to html nodes, you might not even have
direct access on.

## User inputs

The slider interacts with user inputs. Hovering the slider will stop the sliding as well as moving out the mouse will
reactivate the slider. Also clicking will trigger the next slide. 

## Behavior

The slider moves from left to right and back.

## Mobile

There is currently no mobile fallback included.