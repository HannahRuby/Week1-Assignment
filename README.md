SD09
🧪 Build out the website

🧪 Build out the website
Completion requirements
 Done: Make a submission
Build out the website
Overview
The holding page works great, but we need to start thinking about adding some more content to the page.

A designer has been working on some design assets and style guides, and we'd like you to help us build out the page. Our lead dev has written some rough instructions for you, but you'll need to search for some of the details.

Class Plan
Demo: Demonstration of the design assets and page design
Discussion: Talk about the new features we'll be using and what they do in the example: background images, flexbox, "view height" units, absolute positioning)
Demo & Workshop: Background images and View Height
Demo & Workshop: Absolute & Fixed positioning
Demo & Workshop: Flexbox
Workshop: Build the website using design assets and style guide
Topics
HTML and CSS structure and layout
Background images and sizing options for visual design
Box model and positioning
Flexbox basics
Resources
MDN: HTML Elements Reference
MDN: CSS Properties Reference
MDN: CSS Colours
MDN: Flexbox
Flexbox Game
CSS Tricks: Flexbox Cheatsheet
CodePen: Flexbox Playground
Workshop
Follow the guide written by the lead dev to build out the website using the design assets and style guide. It gets a bit vague towards the end, but you should be able to figure out what they mean...

We want something that looks like this: Example website

Setting up the page structure
Dev: Hey! Thanks for taking on the website build. I've been writing up some of our plans today, hopefully it helps you get going!

⛳️ Create a new index.html file, just like the last project, and set up the basic doc structure

We're going to build the rough page structure with HTML, as we interpret it from the design.

⛳️ Set up the page with three primary sections: header, main, and footer:

```html
<body>
  <header>Header</header>
  <main>Page content</main>
  <footer>Footer</footer>
</body>
```

⛳️ Use an `<h1>` tag in the header to add the company name, and a `<nav>` tag with some nav links. We'll just point them to # for now.

<header>
  <h1>Company Ltd. Ltd.</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>

⛳️ Add a `<section>` tag to the main content, with the class of `feature`. This will contain our featured post content, and display our large background images. Inside it, add an `<h2>` tag for the section subtitle (the smaller heading), and a `<h1>` tag for the section title (the larger heading). These can be in any order you like, and each section can have it's own `<h1>`. Also, group the h2 and h1 in a `<div>`, so we can position them together. While you're there, add the "read more" `<a href>` as well.

```html
<main>
  <section class="feature">
    <div class="title">
      <h2>Featured Post</h2>
      <h1>How to make a splash page</h1>
      <a href="#">Read more</a>
    </div>
  </section>
</main>
```

Next we'll start styling those full page images.

Adding background images
⛳️ Add a background image to the feature section, using the `background-image` property. You can use the image from the design assets, or use a placeholder image from [placeholder.com](https://placeholder.com/). Set the height of the section to `100vh`, which is a browser unit that means 100% of the viewport height.

```css
.feature {
  height: 100vh;
  background-image: url("./images/eclipse.jpg");
  background-size: cover;
  background-position: center center;
}
```

👀 Play around with the different settings for background-size and background-position to see how they affect the position of the image.

Absolute positioning the titles
The css `position: absolute` property allows us to position an element a specific distance from the top, left, bottom, or right of it's parent element. We can use absolute pixel units, rems, or percentages.

⛳️ Add the following CSS to the title div to position it near the bottom left corner of the feature section, like the design:

```css
.title {
  position: absolute;
  bottom: 50px;
  left: 50px;
}
```

🎯 Continue to add more styles to match the design as closely as possible. Add some more sections by copying the first one. Use CSS classes to style each one differently.

Tips and hints
- Use "Inspect Element" to inspect the example and see what styles are being applied to each element
- Margin and padding is one option for spacing between elements, but there are others supported by flexbox.
- Alignment and consistent spacing between elements is important for a design to look balanced and professional (this can be tricky with text!).

There are many correct ways to achieve the same layout, so experiment and see what works best for you.
Please also provide an assignment reflection in your project README.md file.
(Required)
🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.
 
What went really well and what could have gone better?
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.
Requesting feedback about a specific part of your submission.
