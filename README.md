# McGriddle

McGriddle is a (mostly) get-out-of-your-way Sass library designed to help you build based a grid system. Set up your grid system…

```scss
$grid-width  : 64em;
$grid-gutter : 1.875em;
$grid-columns: 12;
$grid-flexbox: false;
```

…and you’re ready to build.

```html
<section class="container">
  <article class="article"></article>
  <div class="sidebar"></div>
</section>
```

```scss
.container { @include container; }
.article   { @include columns(8); }
.sidebar   { @include columns(4, last); }
```

## Installation

1. Install via [npm](https://www.npmjs.com/package/mcgriddle) or yarn.
  ```
  npm install mcgriddle

  yarn add mcgriddle
  ```

  McGriddle is also available via [Bower](http://bower.io) (`bower install mcgriddle`).

2. Import the `_mcgriddle.scss` file in your Sass manifest file:

  ```scss
  @import "path/to/mcgriddle";
  ```

## Manual Installation

Alternatively, you can manually install McGriddle.

1. [Download](https://github.com/jonsuh/mcgriddle/archive/master.zip) and unzip the source files.
2. Copy the files from the `_sass/mcgriddle` directory into your project.

## Usage

First, create a settings file (`_mcgriddle-settings.scss`) and import it before importing McGriddle.

```scss
@import "mcgriddle-settings";
@import "mcgriddle";
```

Then edit the settings file to customize/override default grid settings. The following is a list of default settings:

```scss
$grid-width   : 64em;
$grid-gutter  : 1.875em;
$grid-columns : 12;
$grid-minor   : 1/3;
$grid-flexbox : false;
$grid-collapse: false;
$grid-rtl     : false;
```

---

### Read the [documentation](https://jonsuh.com/hamburgers) for full list and explanation of settings, mixins and functions.

---

Features:

1. [Containers](#container)
2. [Columns](#columns)
3. [Collapse gutters](#grid-collapse)
4. [Flexbox support](#grid-flexbox)
5. [Right-to-left support](#grid-rtl)

#### `container()`

You’ll need a container to wrap the columns in.

```scss
.container {
  @include container;
}

// Container with no max width ($grid-width)
.container--full {
  @include container(false);
}
```

#### `columns()`

Then use `columns()` on an element to specify how many columns wide it should be.

```scss
.column {
  @include columns(8);
}

.column-decimal {
  @include columns(5.6);
}

// Last column
.column-last {
  @include columns(4, last);
}

// Centered column
.column-center {
  @include columns(8, center);
}

// Relative columns
.column-4-9 {
  @include columns(4 of 9);
}
.column-5-9 {
  @include columns(5 of 9, last);
}
```

Nest columns by wrapping nested columns in a container.

```html
<div class="container">
  <div class="columns-9">
    <div class="container">
      <div class="columns-6"></div>
      <div class="columns-6"></div>
    </div>
  </div>
  <div class="columns-3"></div>
</div>
```

Push an element however many columns with `shift()`.

```scss
// Shift a column over 2 columns
.column {
  @include columns(6);
  @include shift(2);
}
```

#### `$grid-collapse`

Collapse gutters: `$grid-collapse: true`. (Default is `false`)

```scss
$grid-collapse: true;
.container { @include container; }
```

#### `$grid-flexbox`

Flexbox support (as opposed to floats): `$grid-flexbox: true`. (Default is `false`)

```scss
$grid-flexbox: true;
.container { @include container; }
```

#### `$grid-rtl`

Right-to-left support for RTL languages: `$grid-rtl: true`. (Default is `false`)

```scss
$grid-rtl: true;
.container { @include container; }
```
