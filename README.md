# flex-modal

A quick experiment to play with column flex box for modal auto sizing.

Comparing old school solution with flex solution.

## Pre-requisites

The modal:

1. should take no more height than necessary to fit content.
2. should not be taller than 90% of the window.
3. should work on the last 2 versions of each major browser on desktop and mobile.

## requirements
- install compass
- bower install


## findings

### legacy solution
The height auto of the modal means that the 100% height or the section is not respected.
Script needed to set that height.

### flexbox solution
Ran into problems in IE with clientHeight on a flex-item.

Chrome did not honour 100% and scroll on the flex-item content.
