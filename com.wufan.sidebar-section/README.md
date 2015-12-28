# sidebar-section (5ftech version1.0.0)
>angular directive combined with Bootstrap

**Examples**

refer to example.html && yourctrl.js


## Install

$ bower install com.wufan.sidebar-section --save

## Usage

  sidebar usage

 ```html
    <wf-sidebar><wf-sidebar>
  ```html
  set your items in sidebarconstant.js set.items field;

  section usage
  ```html
    <wf-section><wf-section>
    ```html

  Generally, sidebar will acompany the section besides its right side,the seciton can adjust to
  the item clicked or selected in sidebar,therefore
  section-Selected attr is required as follow
  ```html
  <wf-sidebar section-Selected="sectionSelected(index)"><wf-sidebar>
  <wf-section>
    <header>here is header fixed<header>//optional
    <p> here is content fixed </p> //optional
  <wf-section>
  ```html
  More details refer to example






