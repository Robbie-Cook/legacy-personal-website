# Personal Website

This is a repository of my personal website [http://robbie.pw](http://robbie.pw) built with React (create-react-app), and deployed with a static server.
It's a very simple website with a few pages, and it should be updated regularly.

I'm hoping to start with introducing more simple features, then move into making the website smooter
with animations. 
Then I want to start making open source contributions to cool projects, and showcase the contributions
on this website.
Then I want to hook it up to a CMS system for GUI updates, so I can make changes without
having to modify the code.

## Bugs
* Fix overflow on pages due to navbar changes (including home pages) (bug)  

* Fix browsing directly to /about or /music via url not working 

### Known issues on the backburner
 * Issue where when navbar played with in mobile view and then opened again, navbar item's are misaligned
       * I blame bootstrap, so need to pull out bootstrap and replace it (see below) before this bug can be fixed
       

## Features to come

* Mobile support
  * Make pages mobile-viewable (feature)
    * Make basic components responsive
  
* Check email client forwarding properly to personal email

* Awesome videos of me playing music

* 'Project' contribution page for contributed work on open source projects

### Polishing 

* Replace bootstrap in navbar for the following reasons:
  * The svg graphic for the navbar is hard to color with hex, so a bad workaround was made.
  * Bug where you collapse navbar in mobile view and then expand page and nav items are misaligned hard to fix
  * There are fixed values for the media queries -- I want to get these values from a theme variable
  
  Bootstrap can either be replaced with:
   * My own component
      * Pros:
         * Highly configurable
         * Can be compatible with central theme context to be implemented
         * Small size and loading time
      * Cons
         * Not feature rich
         * Sub standard animations
         
   * Another CSS framework
       * Pros:
         * Feature rich
         * Nice animations
         * Can learn new framework to save development and testing time
      * Cons
         * May not be configurable to a theme i.e. same problem as bootstrap -- need to look at rendering to be sure
         

* Centralised theme file like what exists in navbar

* Animations:
   * Smoother transitions on photos, embedded content
   * Loading animation on pages

* ssh with auto certificate renewal

* Migrate site to Gatsby to hook up a CMS
  * Make a tutorial site with Gatsby to get a feel
  * Babel?

* Blog integration
