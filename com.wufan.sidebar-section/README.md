# sidebar-section (5ftech version1.0.0)
>angular directive combined with Bootstrap

**Examples**

refer to example.html && yourctrl.js


## Install

$ bower install com.wufan.sidebar-section --save

## Usage
第一步:
   在要用的html文件例如index.html内引入四个js文件
   第二步:
   将sectionconstant.js和sidebarconstant.js里面的set下字段设置为自身需求
   第三步
   在index.html中引用 <wf-sidebar><wf-sidebar>和
   <wf-sidebar section-Selected="sectionSelected(index)"><wf-sidebar>
   (可直接复制example.html的从row开始内容)
   第四步
   在自己控制器,写入yourctrl.js的内容,可知接复制该文件,并改为相应的名字,如mainctrl.js即可
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






