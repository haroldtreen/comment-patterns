/**
 * Copyright (c) 2011 Ian MacLeod <ian@nevir.net>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */
module.exports = ([{name:"Markdown",nameMatchers:[".md",".markdown",".mkd",".mkdn",".mdown"],commentsOnly:true},{name:"C",nameMatchers:[".c",".h"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"CSharp",nameMatchers:[".cs"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"CSS",nameMatchers:[".css"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}]},{name:"C++",nameMatchers:[".cpp",".hpp",".c++",".h++",".cc",".hh",".cxx",".hxx"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"Clojure",nameMatchers:[".clj",".cljs"],singleLineComment:[";;"]},{name:"CoffeeScript",nameMatchers:[".coffee","Cakefile"],multiLineComment:[{start:"###*",middle:" *",end:" ###"},{start:"###",middle:"#",end:"###"},{start:"###*",middle:"#",end:"###"}],singleLineComment:["#"]},{name:"Go",nameMatchers:[".go"],singleLineComment:["//"]},{name:"Handlebars",nameMatchers:[".handlebars",".hbs"],multiLineComment:[{start:"<!--",middle:"",end:"-->"},{start:"{{!",middle:"",end:"}}"}]},{name:"Haskell",nameMatchers:[".hs"],singleLineComment:["--"]},{name:"HTML",nameMatchers:[".htm",".html"],multiLineComment:[{start:"<!--",middle:"",end:"-->"}]},{name:"Jade",nameMatchers:[".jade"],singleLineComment:["//","//-"]},{name:"Java",nameMatchers:[".java"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"JavaScript",nameMatchers:[".js"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"Jake",nameMatchers:[".jake"],singleLineComment:["//"]},{name:"JSON",nameMatchers:[".json"]},{name:"JSP",nameMatchers:[".jsp"],multiLineComment:[{start:"<!--",middle:"",end:"-->"},{start:"<%--",middle:"",end:"--%>"}]},{name:"LaTeX",nameMatchers:[".tex",".latex",".sty"],singleLineComment:["%"]},{name:"LESS",nameMatchers:[".less"],singleLineComment:["//"]},{name:"LiveScript",nameMatchers:[".ls","Slakefile"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["#"]},{name:"Lua",nameMatchers:[".lua"],singleLineComment:["--"]},{name:"Make",nameMatchers:["Makefile"],singleLineComment:["#"]},{name:"Mustache",nameMatchers:[".mustache"],multiLineComment:[{start:"{{!",middle:"",end:"}}"}]},{name:"Objective-C",nameMatchers:[".m",".mm"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"Perl",nameMatchers:[".pl",".pm"],singleLineComment:["#"]},{name:"PHP",nameMatchers:[/\.php\d?$/,".fbp"],singleLineComment:["//"]},{name:"Puppet",nameMatchers:[".pp"],singleLineComment:["#"]},{name:"Python",nameMatchers:[".py"],singleLineComment:["#"]},{name:"Ruby",nameMatchers:[".rb",".ru",".gemspec"],singleLineComment:["#"]},{name:"Sass",nameMatchers:[".sass"],singleLineComment:["//"]},{name:"SCSS",nameMatchers:[".scss"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"Shell",nameMatchers:[".sh"],singleLineComment:["#"]},{name:"SQL",nameMatchers:[".sql"],singleLineComment:["--"]},{name:"Swift",nameMatchers:[".swift"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"TypeScript",nameMatchers:[".ts"],multiLineComment:[{start:"/*",middle:"*",end:"*/"}],singleLineComment:["//"]},{name:"YAML",nameMatchers:[".yml",".yaml"],singleLineComment:["#"]}]);
