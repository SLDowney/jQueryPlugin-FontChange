
jQuery Plugin
=============

jQuery font changer for basic webpages.

Installation
============

1. Click and download the file [jQuery-FontChanger.js](https://github.com/SLDowney/jQueryPlugin-FontChange/blob/master/jQuery-FontChanger.js) and move 
it into the destination project folder.

2. Add script tags below into the main webpage html file. 

      *Note 1: Make sure the scripts are added **above** the native JavaScript file script tag.* 

      *Note 2: The jQuery script tag is optional - if you already have the jQuery tag in the html, you can disregard it here.*

    ```html
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="jQuery-FontChanger.js" type="text/javascript"></script>
    ```

3. Add div tag below into the webpage html file where you want the plugin options to be placed. The plugin file will insert the 
needed html elements into this div to show the options menus. 
    
    ```html
    <div class="options-container"></div>
    ```
    
4. In your default JavaScript file, create a method call to `fontChanger();` - this will call the plugin and make it usable on your webpage. 

Use
===

After successful installation (note steps above), the webpage will show two dropdown select options: **Header** and **Paragraph**. These will each show 
three set options to change the font of the specified elements. Click on the chosen option to change the font of the element to that option. You can 
change the font as many times as you choose - the header and paragraph fonts can be changed independently of one another, and do not need to match.

In the native website JavaScript file, all of the customization code is going to go within the method call to the plugin method `fontChanger()` (Installation Step 4 above). 
Note: Remember to use curly braces `{ }` surrunding the customization code.

The variables needed for customization are:
* `fontFamilyHeader` for the header 
* `fontFamilyPara` for the paragraphs
* `fontSize` for the font size (**works for the paragraph tags only**).

For the font options, there will need to be three  parts - a **Specified Font**, a **Backup Font**, and a **General Font Type** (*serif* or *sans-serif*).

The **Specified Font** will be first. If the name of the font consists of more than one word, the font name must be wrapped in single quotes, for example ``'Times New Roman'``.
You can technically choose any font you wish to be shown on the webpage, but only certain browsers can show certain fonts. This is the issue solved by the second part.

The **Backup Font** - a generic font that is guaranteed to be available on any browser. There are typically two options chosen for the backup font - `Helvetica` or `Times`, 
depending on your font style. This is the font that the browser will default to if it cannot access the **Specified Font**, and is therefore mandatory.

The **General Font Type** is the browsers last attempt to correctly show the font on a webpage. If, for some reason, the browser cannot find the **Specified Font** *or* the
**Backup Font**, it will default to one of the two font types: *serif* or *sans-serif*. To get technical, a *serif* is the little decorative ‘feet’ on the end of each line 
that makes up a letter. A *serif* font would have serifs, and a *sans-serif* font would not. For example, Times New Roman would be a serif font, and Arial would be a 
*sans-serif* font. 


The completed customization code will look like this:
```javascript
$(".options-container").fontChanger({
    fontFamilyHeader: "'Times New Roman', Times, serif",
    fontFamilyPara: "Arial, Helvetica, sans-serif",
    fontSize: "100%"
}); 
```
