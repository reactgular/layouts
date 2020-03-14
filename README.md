[![Build Status](https://travis-ci.org/reactgular/layouts.svg?branch=master)](https://travis-ci.org/reactgular/layouts)
[![Coverage Status](https://coveralls.io/repos/github/reactgular/layouts/badge.svg?branch=master)](https://coveralls.io/github/reactgular/layouts?branch=master)
[![npm version](https://badge.fury.io/js/%40reactgular%2Flayouts.svg)](https://badge.fury.io/js/%40reactgular%2Flayouts)

# What is Layouts?

Layouts is an Angular component library that implements a *border layout* using a container that can dock child panels into Top, Left, Right, Bottom 
and Center regions. Containers can be nested allowing for a variety of usages, and panels can be animated to enhance the user experience.

Layouts was designed to support *nesting* of inner Layouts allowing for a wide range of design usages.

# Why use this library?

Layouts was developed mainly to solve the problem of transitioning between desktop and mobile screens while using a *border layout* strategy. It makes
it really easy to move a side menu from being on screen to floating off screen without much effort.

Layouts is *unopinionated* about how panels should be arranged, sized or positioned in the border layout. Allowing the developer to have full control
over how panels transition between different states. That means you can use layouts to create narrow, wide, overlaying and animated panels that fit
your design goals. 

Layouts does it's best to transition between different states without restructuring of the DOM elements. This reduces flickering of elements and
avoids unwarned life-cycle changes for components being displayed on the page.

# Installation

You need to have an Angular project with the supported Angular version. This project was last updated to work with Angular 8.

```bash
npm install --save @reactgular/layouts
```

Layouts depends upon the following peer dependencies.

```bash
npm install --save @reactgular/destroyable @reactgular/observables @reactgular/stateful
```

Once installed you need to import the Layouts module into your project.

```typescript
import {LayoutsModule} from '@reactgular/layouts';

@NgModule({
    ...
    imports: [LayoutsModule, ...],
    ...
})
export class AppModule {
}
```

# Usage

Start by adding the `<rg-layout>` component, and then adding upto *four* `*rgPanel` structural directives and a *single* `*rgCenter`.

```html
<rg-layout>
    <div *rgPanel="'top'; size: 50">
        TOP MENU
    </div>
    <div *rgPanel="'left'; size: 200">
        SIDE MENU
    </div>
    <div *rgCenter>
        CENTER
    </div>
</rg-layout>
```

The above creates a border layout where the top panel has a height of `50`, a side panel with a width of `200` and center content. Layouts will animate
changes in panel parameters such as their size and position along the edge of borders. 

Each panel has additional parameters such as;

- `order` will sort panels changing how they overlap each other.
- `push` will push content away from that panel's edge.
- `pull` will pull the panel off screen.
- `overlay` will display a background overlay on top of inner content.

## Configuring Panels

You can configure a panel using individual properties, or a single `config` object.

The following example configures the `order`, `size` and `overlay`:

```html
<rg-layout>
    <div *rgPanel="'left'; order:2, size: 200, overlay: true">
        SIDE MENU
    </div>
    <div *rgCenter>
        CENTER
    </div>
</rg-layout>
```

The following example configures the panel using a `config` object:

```html
<rg-layout>
    <div *rgPanel="'left'; config: {order:2, size: 200, overlay: true}">
        SIDE MENU
    </div>
    <div *rgCenter>
        CENTER
    </div>
</rg-layout>
```

You can mix the usage of `config` and properties for easier programming of panels.

## Using Observable config objects

The easiest way to animate the transition between panel properties is to create an observable using
one of the present functions. There are a collection of present functions that create different panel effects.

```typescript
@Component({
   template: `
    <rg-layout>
        <div *rgPanel="'left'; config: left$ | async">
              ....
        </div>
    </rg-layout>
   `
})
export class ExampleComponent implements OnInit {
    public left$: Observable<PanelConfig>;

    public ngOnInit() {
       this.left$ = PanelStatic(1,100);    
    }
}
```

## Understanding how Order works

Order is one of the more important parameters to understand, because order controls how panels overlap each other and what content an overlay covers.

Panels are first added to a collection and then sorted by their order. The page is then split, a panel is rendered on one side and the remaining panels are rendered 
on the other side. This process repeats until there are no more panels in the collection, and the center content is rendered last. 

Each panel is rendered like this:

```text
+=========+=================+
|         |                 |
|  panel  |  [...panels]    |
|         |                 |
+=========+=================+
```

Since panels are rendered by splitting parts of the page it means their order has an effect on how panels overlap each other. Just by changing the order parameter
you can change how the board layout appears on the page.

Panels have the following default order: 

```text
+=============================+
|              0              |
+=====+=================+=====+
|     |                 |     |
|  1  |                 |  2  |
|     |                 |     |
|     +=================+     |
|     |        3        |     |
|     +=================+     |
```

You can change the above layout pattern just by using a different order value for each panel:

```text
+=====+=======================+
|     |        1              |
|     +=================+=====+
|     |                 |     |
|  0  |                 |  3  |
|     |                 |     |
|     +=================+=====+
|     |        2              |
+=====+=======================+
```

Changing panel orders is the most common way to rearrange panels to accommodate differences between desktop and mobile screen.

# Panel Presents

Presents are functions that create an observable that emits a panel configuration. Often taking other observables as input parameters. I've 
created a few present functions that are most commonly used in applications.

### PanelIfElse

Emits one of two PanelConfig objects based upon a condition.

### PanelPartialResize

Emits a PanelConfig object that changes sized based upon a boolean value.

### PanelPartialReveal

Creates a panel config that shows only a partial part of the panel, and toggles revealing the full size. When
it is toggled the panel is moved to reveal all and overlay center content.

This preset is useful when you want to hide a partial part of the panel and then reveal it without changing
the side of the panel (which might causes flickering of panel content).

### PanelSlide

Creates an observable that emits a panel config which slides a panel on/off the screen.

If overlay is True the panel floats over top of content, and when False it pushes content.

### PanelStatic

Creates an observable that emits a panel that doesn't push or pull content. Often used to add a top menu bar.

# Getting help

You are welcome to open issues for general support questions as well as bug reports and feature requests.
