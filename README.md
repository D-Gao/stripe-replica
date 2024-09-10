# Stripe Home Page Replica

This project aims to clone the home page of the [Stripe home page](https://stripe.com)

Demo: [stripe-replica.vercel.app](https://stripe-replica.vercel.app/)

Currently, working on the feature of Modular solutions section, really cool animations with svg. Each animation is not hard but the total orchestration requires a lot of work, and for that purpose I decided to use [GSAP](https://www.npmjs.com/package/gsap) animation library.

```bash
#start development
npm run dev

#produce production build
npm run build
```

## Responsiveness

While inspecting the "Modular Solutions" section of the website, I noticed that the sticky container remains vertically centered along the Y-axis. On resizing the browser window, the container's width is constrained by the max-width property, set to 540px. When the window size is reduced, instead of recalculating layout properties for individual child components, the width dynamically transitions from max-width to a smaller size using transform: scale.

This approach leverages scaling on the parent container, allowing for proportional resizing of all child elements without needing individual responsive adjustments. By scaling the parent container, this method ensures that child components maintain their relative sizes and positions, simplifying responsiveness and removing the complexity of handling each component’s layout separately.

The key benefit here is that scaling the parent container provides a uniform solution to responsiveness across nested elements, reducing the overhead of managing complex responsive behaviors for child components.

## GSAP

This animation library is really useful for creating complex animations, which is almost impossible to create with plain css.

- massive usage fo timelines, each concern about the proper animation
- mastertimeline to coordinate the animations between different timelines
- useeffect hooks to switch between show and hide animations by the "show" prop, also need 2 separated timelines for show and hide for smooth transition.
