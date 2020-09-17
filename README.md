# Alloy *Buttom Sheet View* Widget

[![gitTio](http://gitt.io/badge.svg)](http://gitt.io/component/ti.buttomsheetview) [![Abdullah Al-Faqeir](https://img.shields.io/badge/maintainer-Abdullah_Al_Faqeir-yellow.svg?style=flat-square)](https://github.com/abdullahfaqeir)

Ti.ButtomSheetView is an ios and android widget which provides an android-like ButtomSheet behavior in the [Alloy](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Quick_Start) MVC framework for [Titanium](http://www.appcelerator.com/platform) by [Appcelerator](http://www.appcelerator.com), it's simple and easy to use.

It also supports swip up to expand and swip down to close.

## Quick Start

### Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/ti.buttomsheetview)
Download this repository and consult the [Alloy Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-ImportingWidgets) on how to install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install ti.buttomsheetview`

### Use it

* Add the widget to your *TableView*:

```xml
<Window> // Window or View (Please note that layout must be default, not vertical or horizontal) in order for it to work properly
    <View> //Over view
    </View>
    <Widget id="ButtomSheetView" src="ti.buttomsheetview" contentBoxHeight="400" <!-- this is optional --> >
      <TableView>
        <TableViewRow text="Row 1"></TableViewRow>
        <TableViewRow text="Row 2"></TableViewRow>
        <TableViewRow text="Row 2"></TableViewRow>
      </TableView>
    </Widget>
<Window>
```
  

```javascript

  $.ButtomSheetView.addEventListener('opened',buttomSheetViewOpened);
  $.ButtomSheetView.addEventListener('closed',buttomSheetViewClosed);

  function buttomSheetViewOpened(e){}
  
  function buttomSheetViewClosed(e){}  

  //To show the bottom sheet view
  $.ButtomSheetView.show();
  
  //To expand the bottom sheet view
  $.ButtomSheetView.expand();  
  
  //To hide the bottom sheet view
  $.ButtomSheetView.hide();
  
  //To set the views of the bottom sheet view anytime
  $.ButtomSheetView.setViews([]); //Array of views
```
  
## Options
There are no required options to pass via TSS properties or XML attributes, yet you can change the ContentBox height

| Parameter | Type | Default |
| --------- | ---- | ----------- |
| contentBoxHeight | `30%` | The height of the content box |

## Events

| Name  | Usage |
| ---------  | ----------- |
| opened     | When the buttomsheet is shown and the animation is done |
| closed     | When the buttomsheet is hidden and the animation is done |


## Methods
You can also manually trigger the show, hide and expand event of the widget.

| Function   | Parameters | Usage |
| ---------- | ---------- | ----- |
| show       |          | To show the buttom sheet view |
| hide       |          | To hide the buttom sheet view |
| exapnd     |          | To expand the ContentBox to fit the view 100% |
| setViews   | `array`  | To set the child views of the ContentBox |


## Changelog
* 1.0: Initial version



## License

<pre>
Copyright 2020 Devloops LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
