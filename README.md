# ReadingTime.js

View the project page at [http://jreed91.github.io/ReadingTime](http://jreed91.github.io/ReadingTime "ReadingTime.js")

ReadingTime.js is a simple script to add the estimated reading time to your blog posts. Just like Medium does.

# Getting started

* Download the zip file
* Add the readingTime.js file to your document
```bash
    <script type="text/javascript" src="js/readingTime.js"></script>
```

* Add the html tag where you want the estimated reading time to be outputted
```bash
    <div id="readingTime"></div>
```

* The script will grad all the words contained in the div named content. This can be edited here:
```bash
var text = $('#content').text();
```
# Author

[jreed91](http://reeddesigns.me "Jacob Reed")

# License

The MIT License (MIT)

Copyright (c) 2014 @jreed91

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

