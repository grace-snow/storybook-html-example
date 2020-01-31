# Example of Storybook for HTML

This investigation was to see if we could start using Storybook now with a vanilla HTML/JS setup to build, document, test and review new UI components.

After investigation, these are my (GS) conclusions.

## Pros

These things work well in Storybook for HTML:

* Building isolated UI components
* Previewing styles and how they change with different states (hover, focus, active, disabled etc)
* Could get design approval before code goes into real project
* Displaying and tracking events like click or mouseover 
* Importing compiled CSS to stories  
* Simple Gulp pipeline still possible to compile scss to css (don't have to use webpack yet)
* Could alter gulp pipeline so it only copies new styles to project when they are ready
* Basic js functions like reacting to click/mouseover events
* Builds familiarity with React and javascript for future

## Cons 

These things don't work well in the HTML flavour:

* All html has to be constructed in javascript (so unusable in our current project without copying generated HTML markup from devtools)
* Most add-ons don't work - they are built for React
* Cannot generate automatic documentation (addon-docs)
* Cannot easily switch the state of components (addon-knobs)
* No potential to build up design tokens / a design system
* Not futureproof if we plan to rebuild project in React anyway (would have to build every component 3 times in total)
* Automated testing (e.g. Jest) is unlikely to work in this set-up with our current level of knowledge and limited addon support  

## Conclusion

I plan to trial Storybook for React and see how we could use it to build new coponents ready for future projects, AND use the docs addon to expose basic html markup usable in our legacy versions of projects.  

We still need to investigate what styles pipeline we would want to use, ensuring that new component styles are scoped and isolated until they are approved, while also incorporating any style changes made to the live projects. 

I also need to investigate how we might deploy the built Storybook to an internally-hosted static site. 

----

## To install 

Clone the repo and run `npm install`. 

## To build

To build both styles and storybook in parallel, use the command `npm run-script dev`

When ready to deploy Storybook, use the command `npm run-script storybook`