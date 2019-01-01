大喵教育前端培训
================

## 阶段性测试 2018.12.29

### 大喵教育版权所有 | 出题人：谢然

01. 解释 position 可以取哪些值以及这些值的意义
    
    absolute    绝对定位    如果祖先及父元素没有有相对定位的话，就相对于窗口定位
    relative    相对定位    相对于自身定位
    static  没有定位
    fixed   绝对定位    相对于浏览器窗口定位
    inherit 继承父元素的定位

02. 被定位的元素（即想要定位的那个元素）的定位原点是其哪个 box？
    
    margin-box

03. 说出级联菜单的大体实现思路

    结构用无序列表ul来实现。最外面的ul是第一级菜单，越往里，级别越低，且放在li中。
    子菜单用display：none隐藏，hover时用display：block再展现出来
    
04. 画出如下代码中 div 及其子元素的渲染结果，并指出 p 标签中【每个行内元素的，内容区，行内框的范围】，p 元素的行框，并指明理论的行框高度。有尺子的可以以 1mm 为 2px 来绘制。
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>JS Bin</title>
      <style>
        p {
          font-size: 20px;
          line-height: 120%;
          margin: 30px;
          margin-left: auto;
          margin-right: -20px;
          width: 300px;
          background-color: tan;
        }

        .a {
          display: inline-block;
        }

        .b {
          font-size: 30px;
          vertical-align: 15px;
        }

        .c {
          display: inline-block;
          width: 60px;
          height: 60px;
          background-color: pink;
          margin: 8px;
        }

        img {
          box-sizing: border-box;
          width: 50px;
          height: 50px;
          border: 2px solid;
          margin: 4px;
          vertical-align: -10px;
          margin-bottom: -5px;
        }
        div {
          width: 400px;
          border: 1px dotted;
        }
      </style>
    </head>
    <body>
      <div>
        <p>
          <span class=a>foo</span>
          <span class=b>bar</span>
          <span class=c></span>
          <img src="https://drscdn.500px.org/photo/205228769/m%3D1170_k%3D1/d721302d063d447aa3bd6301dc1cba87" alt="">
        </p>
      </div>
    </body>
    </html>
    ```
    
05. 何为缓动函数（即 transition-timing-function）？它有哪些内置值？如何自定义一个缓动函数？

    就是属性值在一段时间内变化的速度。
    linear 、ease
    需要用到贝塞尔曲线


06. 有坐标点 `(1, 2), (3, 4), (3, 0), (8, 1)`，画出它的大致Beizer曲线。可查维基百科。

    

07. 可渐变与不可渐变属性的最大的区别是什么？

    一个有具体明确的值，如px、百分数等。
    一个是只有两种状态，没有缓变的余地。


08. 说出如下代码中，元素 `.a` 的左边框的左边缘距元素 `.b` 的右边框的左边缘的距离；`.a `元素下边框的上边缘与 `.b` 元素上边框的下边缘的距离。不要贴在浏览器里量。
    ```html
    <style>
    .b {
      position: relative;
      margin: 10px 15px 30px;
      border: 20px solid;
      padding: 5px 20px 10px 35px;
      width: 565px;
      height: 400px;
      box-sizing: border-box;
    }
    .c {
      width: 198px;
      height: 200px;
      background-color: #fff;
      position: absolute;
      left: 52px;
      bottom: 45px;
    }
    .a {
      position: absolute;
      margin: 8px 9px;
      border: 6px solid;
      border-right-width: 14px;
      padding: 13px 17px;
      width: 100px;
      height: 100px;
    }
    </style>
    <div class=b>
      <div class=c>
        <div class=a></div>
      </div>
    </div>
    ```

09. 想要让一个元素对鼠标完全不可点击，用什么办法？

    该元素上面盖着一层透明元素
    user-select：none


10. 清除浮动与闭合浮动分别是什么？它们的区别和联系是什么？

    清除浮动是子元素周围没有浮动元素，但浮动元素仍可超出包含块
    闭合浮动是让浮动元素不超出其包含块的范围

11. 解释如下代码渲染结果的成因：
12. 

    利用循环。第一行循环0个空格，第二行循环2个空格，依次类推

12. 解释如下代码渲染结果的成因：https://jsbin.com/dimaxip/1
13. 说出至少三种闭合浮动的方案，并解释原理

    触发bfc：overflow-hidden
    利用clear：在最后一行加入一个伪元素，并清除其左右浮动
    定高
    包含块浮动

14. 在 Twitter 点赞的动画中，为什么让动画以 `0.4666` 且以 `linear` 的方式进行，就可以正确观察到动画了？

    linear是让动画匀速运动，以保证人眼每一次看到的都是只用一个红心

15. 什么是glob？

    

16. display 属性有哪些值可选？

    none
    inline-block
    block
    flex
    table
    table-cell
    inherit

17. 画出如下代码的渲染结果
  ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
      <style>
        div {
          background-color: brown;
          width: 200px;
          height: 150px;
          margin: 20px;
          padding: 1px;
        }

        span {
          background-color: pink;
          margin: 1px;
        }

        [a1] {
          width: 50px;
          height: 40px;
          float: left;
        }
        [a2] {
          width: 20px;
          height: 50px;
          float: left;
        }
        [a3] {
          width: 20px;
          height: 70px;
          float: right;
        }
        [a4] {
          width: 30px;
          height: 30px;
          float: left;
          clear: both;
        }
        [a5] {
          width: 60px;
          height: 190px;
          float: right;
        }

        [b1] {
          width: 30px;
          height: 30px;
          float: left;
        }
        [b2] {
          width: 40px;
          height: 40px;
          float: right;
        }
        [b3] {
          width: 50px;
          height: 90px;
          clear: both;
          float: left;
        }
      </style>
    </head>
    <body>
      <div a>
        <span a3></span>
        <span a4>an a1a1</span>
        <span a3>4</span>
        <span a5>a5</span>
        lorem
      </div>
      <div b>
        <span b1>b1</span>
        <span b2>b2</span>
        <span b3>b3</span>
      </div>
    </body>
    </html>
  ```

18. 写出多栏等高自适应布局的代码

    利用flex布局
    父元素     
        display:flex；
        flex-direction:row;
    子元素
        左右两边子元素定宽
        中间子元素flex-grow:1(多个元素的话，扩张因子可加起来为1)

19. 常见缓动函数有哪些，画出其【典型的】【时间-距离】图像。

    linear
    ease
    steps

20. 简述字体图标的原理及其优缺点

    利用font-family解析
    先是根据文字内容，转化成相应的ascii码。
    再是查找电脑本地或线上的图标文件库，引入文件。
    最后根据对应的ascii码加载相应的图标。

    即文字符号————ascii码————图标

    优点：加载速度快，体量小，兼容好。
    缺点：有版权限制，维护麻烦，不能广泛使用    

21. 什么是 FOUC 以及 FOUT？如何产生的？如何避免？

    fouc：浏览器的样式闪烁、花屏。
    原因：跟html文档用@import引入css文件造成的。此时是先加读完html，再加载css，所以会出现短     暂的样式失效问题。
    解决：使用link标签引入css文件

22. 将“大喵4号”转换通过 UTF-8 编码后的 16 进制字节序列。

    

23. 如何实现文字溢出后显示为省略号，写出完整代码

    overflow:hidden
    text-overflow:ellipsis
    white-space:nowrap

24. 解释什么是 reflow 与 repaint 以及它们各自的特点以及会造成的问题并给出应对方案

    reflow：回流
        释义：浏览器为了重新渲染部分文档而重新计算所有元素的位置和布局。
        特点：因为一个点的修改，而所有元素重新计算一遍。
        问题：不必要的重新计算，拖慢性能，耗费时间。
        方案：可以让修改的元素脱离文档流，不让他影响父级元素。必要时定高定宽。
    repaint：重绘
        释义：浏览器修改元素的外观，而重新绘制。
        特点：不需重新对元素进行布局，不必回流。

25. transition-porperty 写成 all 可能会造成什么问题？

    所有属性都会有过渡效果

26. 缓动函数 steps(10,end) 表现出什么样的行为？

    属性缓动10次,每次都停留在结尾状态

27. transitoin-delay为负表现出什么样的行为？

    属性会从它4s之后的属性值开始渐变，总时间也会相应的减少

28. 如下代码中，div 元素设置了多列布局，如何让 h2 标签跨越多列显示？
    ```html
    <div>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Aliquid unde perferendis illo consectetur, magni corporis placeat, impedit ullam minus illum 31 Expedita, ipsa!</p>
        <p>Expedita, magni sed accusantium quaerat mollitia doloribus, cum! Possimus nostrum ratione autem aut, laborum doloremque!</p>
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 32Cupiditate adipisci, esse? Cupiditate?</p>
        <p>Mollitia doloribus nihil dolor ipsam ab, nesciunt cupiditate, aut iste aspernatur reprehenderit.</p>
        <p>Veniam necessitatibus, doloremque iusto eveniet nisi illo! Excepturi facilis autem similique tempore!</p>
    </div>
    ```
    h2{column-span:all}

29. 给定如下html结构，为书名加书名号（《》）。为章节加上章节编号，为章节中的段落加上段落编号。为每个段落执行两个文字左右的缩进。并为每章（回）的第一段实现首字下沉效果（类似于报纸杂志的第一个字特大的效果）。
    ```html
    <h1>红楼梦</h1>
    <h2>甄士隐梦幻识通灵  贾雨村风尘怀闺秀</h2>
    <p>——此开卷第一回也。作者自云：曾历过一番梦幻之后，故将真事隐去，而借
  通灵说此《石头记》一书也，故曰“甄士隐”云云。……</p>
    <p>看官你道此书从何而起?说来虽近荒唐，细玩颇有趣味。却说那女娲氏炼石补
  天之时，于大荒山无稽崖炼成高十二丈、见方二十四丈大的顽石三万六千五百零一
  块。那娲皇只用了三万六千五百块，单单剩下一块未用，弃在青埂峰下。</p>
    <h2>贾夫人仙逝扬州城  冷子兴演说荣国府</h2>
    <p>甲：此回亦非正文，本旨只在冷子兴一人，即俗谓“冷中出热，无中生有”也。其演说荣府一篇者，盖因族大人多，若从作者笔下一一叙出，尽一二回不能得明，则成何文字？故借用冷子一人，略出其大半，使阅者心中，已有一荣府隐隐在心，然后用黛玉、宝钗等两三次皴染，则耀然于心中眼中矣。此即画家三染法也。</p>
    <p>未写荣府正人，先写外戚，是由远及近、由小至大也。若使先叙出荣府，然后一一叙及外戚，又一一至朋友、至奴仆，其死板拮据之笔，岂作“十二钗”人手中之物也？今先写外戚者，正是写荣国一府也。故又怕闲文赘累，开笔即写贾夫人已死，是特使黛玉入荣之速也。</p>
    <h2>托内兄如海荐西宾  接外孙贾母惜孤女</h2>
    <p>却说雨村忙回头看时，不是别人，乃是当日同僚一案参革的张如圭。他系此地
  人，革后家居，今打听得都中奏准起复旧员之信，他便四下里寻情找门路，忽遇见
  雨村，故忙道喜。二人见了礼，张如圭便将此信告知雨村，雨村欢喜，忙忙叙了两
  句，各自别去回家。</p>
    <p>那女学生原不忍离亲而去，无奈他外祖母必欲其往，且兼如海说：“汝父年已
  半百，再无续室之意，且汝多病，年又极小，上无亲母教养，下无姊妹扶持。今去
  依傍外祖母及舅氏姊妹，正好减我内顾之忧，如何不去？”黛玉听了，方洒泪拜别，
  随了奶娘及荣府中几个老妇登舟而去。雨村另有船只，带了两个小童，依附黛玉而
  行。</p>
    <h2>薄命女偏逢薄命郎  葫芦僧判断葫芦案</h2>
    <p>卻說黛玉衕姐妹們至王夫人處，見王夫人正和兄嫂處的來使計議家務，又說姨母家遭人命官司等語。因見王夫人事情冗雜，姐妹們遂出來，至寡嫂李氏房中來了。原來這李氏即賈珠之妻。珠雖夭亡，幸存一子，取名賈蘭，今方五歲，已入學攻書。這李氏亦系金陵名宦之女，父名李守中，曾為國子祭酒；族中男女無不讀詩書者。</p>
    <p>如今且說賈雨村授了應天府，一到任就有件人命官司詳至案下，卻是兩家爭買一婢，各不相讓，以致毆傷人命。</p>
    ```
    h1::before{
        content:'《'
    }
    h1::after{
        content:'》'
    }
    h2 {
        text-align: center;
        counter-increment:chapter;
        counter-reset: section;
    }
    h2::before {
        content: "第"counter(chapter)"章"
    }
    p{
        counter-increment: section;
    }
    p::before {
        content: "&nbsp""&nbsp"counter(section)
    }

    h2 > p:first-child ::first-letter {
        float: left;
        margin-top: 0.5em;
    }

30. 如何让一个元素的大小正合适？

     设置宽高、边距时，不要用定值。可以用百分数、rem或者绝对布局

31. CSS3的@font-face除了可以用来做字体图标外，还可以如何使用以提高代码的可维护性？

    可以用来声明变量，以后的值用该变量来代替，需要修改时只需在变量里修改即可

32. 为什么判断一个数是否为素数只需要拿它除以小于等于它平方根的所有素数就可以了？推导整个过程

    假设数为n。假设一个整数为x1.那么肯定会有一个数乘以x1等于n的。设设这个数为x2.
    也可以肯定x2也是小于100的整数。因为n的值是固定的，所以x1小一些，那么x2就一定会大一些。
    并且，有一个x1，就一定会有一个x2，他俩是成对出现的。
    由此特性，那么就会存在一个点，使得所有的x1都排列在左边，所有的x2都排列在右边。
    设这个点为m。那么这个点和自己相乘得到得到n。即m*m=n，也即m是n的平方根。
    综上所诉，只要判断小于一个数的平方根的所有整数能否被整除就可以了。

33. 说出 viewport 声明的意义，及如何适配移动端页面，分别给出不同情况下的解决方案
    - 不同的浏览器环境
        + 安卓 5.0 以上
        + 安卓 5.0 以下
    - 不同的设计需求
        + 严格按比例还原视觉稿布局
        + 页面内容与屏幕大小呈正相关

    viewport意义：让浏览器知道它是移动端的设备，并加载相应的移动端的布局。

    安卓5.0以上：只需将vieport宽度声明为视觉稿的宽度即可，用px开发，照实写宽高。
    安卓5.0以下：声明viewport宽度为divice-width。布局用rew实现等比缩放，文字用px。
    
    严格按照比例还原：设视觉稿宽度为x。那么就让1rew = 100vw /（x*100），视觉稿量出的宽高乘以100即可。
    内容与屏幕大小呈正相关：viewport。content=divice-width。使用px为基本单位来实现布局。


34. CSS3 Media Query可以在查询媒体的哪些方面以实现不同情况下让不同的CSS代码生效？

    media可以查询不同媒体，并让css只在该媒体上生效。如：print、screen、all。
    meida可以让不同的css代码在不同的情况下生效，如在不同宽度下生效，完成响应式布局。如设定最大宽度、最小宽度。
    @media 

35. IE hack 是什么，如何使用？vendor prefix 

  

36. 把如下公式【等号右边反A左边】转换为通过函数名来表达数学符号的单行纯文本表达式形式
  
    ![formule](https://wikimedia.org/api/rest_v1/media/math/render/svg/467cf813e1be327172fa6def9ed61afb54f37f19)

    * 用 `sigma(s,e,f)` 函数表示函数 `f(x)` 在 `x` 从 `s` 到 `e` 范围的和：
        * 即如果 `f(x) = x*x` ，则 `sigma(1,10,f)` 将得到 1 到 10 的平方和
    * 用 `factorial(x)` 表示 `x` 的阶乘
    * 用 `pow(x,y)` 表示 `x` 的 `y` 次方
    * 用 `division(x,y)` 表示 `x` 除以 `y`（`x/y`）
    * 用 `add(x,y)` 表示 `x` 加 `y`
    * 用 `mul(x,y)` 表示 `x` 乘以 `y`

    function sigma(s,e,f) {
        if (e === s) {
            return f(s)
        } else if (e > s) {
            return f(e) + sigma(s,e-1,f)
        }
    }


    function factorial(x) {
        if (x === 1) {
            return 1
        } else if (x > 1) {
            return x*factorial(x-1)
        }
    }
    <!-- function factorial(x) {
        var a = 1;
        for (var count = 1;count <= x;count++) {
            a = a * count;
        }
        renturn a
    } -->

    * 用 `pow(x,y)` 表示 `x` 的 `y` 次方
    function pow(x,y) {
        if (y === 1) {
            return 2;
        } else if (y > 1) {
            return x * pow(x,y-1);
        }
    }


    * 用 `division(x,y)` 表示 `x` 除以 `y`（`x/y`）
        function disvision(x,y) {
            if (y === 0) {
                return x
            } else 
                return division(x,0) / y;
        }


    用 `add(x,y)` 表示 `x` 加 `y`
        function add(x,y) {
            if (y === 0) {
                return x
            } else 
                return division(x,0) + y;
        }


    * 用 `mul(x,y)` 表示 `x` 乘以 `y`
        function mul(x,y) {
            if (y === 0) {
                return x
            } else 
                return division(x,0) * y;
        }






    例如等差数列前 n 项和的公式可以表达为如下形式 `division(mul(n,add(n,1)),2)`
37. 请尽量多的列出JS语言的运算符。
    
    Number()  String()   typeof()   
    && || ! == > <  ^ | & + - * /
    

38. 为什么 !!'' 为false但 '' 却不等于true？

    单独一个''，是不会进行类型转换的。所以不会为true或者false

39. 指出如下程序中存在的【所有错误】
    ```
    var x = (5 + 8 *( 9+2(4+5*(2*5(3(4+0)*7)%2)/2)*4.5)/9，//3、5后面少了一个运算符
    var y = foobar  //要么是符号，需要加‘’。要么是函数，需要加（）
    var fruit = 'apple'

    for (var i = 0; i<10, i++) {    //,改为;
      console.log(i)
    }

    if (x => 25) {      // <=
      console.log(3)
    } else if (x =< 30) {
      console.log(2)
    } else if {         //if去掉 //后面的else全部删除
      console.log(2)
    } else {
      console.log(2)
    } else
      console.log(2)
    }
    ```
    
40. 假设如下【重新定义】闰年，写出判断闰年的函数isLeapYear
    - 4的倍数
    - 100的倍数不是
    - 400的倍数是
    - 3200的倍数不是
    
    function isLeapYear(n) {
        if (n % 3200 === 0) {
            return "no"
        } else if (n % 400 === 0) {
            return "yes"
        } else if (n % 100 === 0) {
            return "no"
        } else if (n % 4 === 0) {
            return "yes"
        }
    }

41. 读程序写结果
    ```
    var sum
    for (var i = 45; i >= -5; i-=2) {
      sum += i
    }
    console.log(sum)
    ```
    NaN

42. JS程序不加分号的话在哪些特殊情况下要加？

    当有+、-、[、/、（ 这几个符号时，它前面的一行是需要加分号

43. 读程序写结果
    ```js
    var x = 0
    var i = -8, j = 42
    var count = 0
    while (x < 10) {
      for(i = x; i<42;i++) {
        do {
          count++
          j--
        } while (j > 37)
      }
      x++
    }
    console.log(count)
    ```
    count=375

44. 什么是死循环？什么情况下会触发死循环？
    
    条件永远满足，循环一直运行。

45. 如何调试JS代码？调试功能最主要的目的是什么？

    debugger，在控制台调试。
    找出代码出现的问题，知道代码的运行顺序

46. switch/case语句有哪些需要注意的问题？

    如果没有遇见break，分支会在满足的条件分支后，继续往下运行，直至没有分支。

47. while语句和do while语句的区别是什么？

    while语句中，先判断条件，再执行循环体。
    do语句中，先执行一遍循环体，再判断条件。

48. 解释图灵机的结构及原理

    

49. 写出使用8位二进制表示168与-200时的形式。然后计算它们进行按位与，按位或，按位非，按位异或的结果

    168:0 10101000    -200:1 00111000
    按位与 ： 40
    按位或 ： -72                                                               
    按位非 ： -169 199
    按位异或 ：-112 


50. JS语言有哪些基本的数据类型？相同及不同数据类型的值分别可以做什么类型的运算？

    数字、字符串、函数、布尔值、对象、未定义值

51. 逻辑代数中的基本运算有哪些？通过基本运算组合出来的非基本运算有哪些？基本运算规律有哪些？

    

52. 给定逻辑函数F的真值表如下，写出其逻辑函数，使用卡诺图化简，并画出相应的逻辑电路。
    ```
    A B C D  F
    0 0 0 0  0
    0 0 0 1  1
    0 0 1 0  1
    0 0 1 1  1
    0 1 0 0  0
    0 1 0 1  0
    0 1 1 0  1
    0 1 1 1  0
    1 0 0 0  1
    1 0 0 1  1
    1 0 1 0  1
    1 0 1 1  0
    1 1 0 0  1
    1 1 0 1  0
    1 1 1 0  1
    1 1 1 1  1
    ```

53. 请解释什么是“不动点理论”

    一张图片在等比例放大或缩小时，总会有一个点是不动的。那个点就是不动点
    
54. JS代码在什么情况下会发生（隐式/自动）类型转换？

    当运算符用在错误的值上面时

55. 能否使用for做为变量的名字？为什么？

    不能
    因为它是关键字。而关键字和保留字是不能用作变量名的

56. break关键字可以用在哪些语句里？

    while、do、fo

57. 以下两种定义函数的方式有何种区别？
    ```
    var f = function(x) {
        return x * x
    }

    function g(x) {
        return x * x * x
    }
    ```

    变量声明与函数声明
    函数声明不能放在循环、if语句中

58. c++与++c有什么区别？

    

59. 请【手动】调整如下代码的缩进及格式
    ```js
    var primeList = [2,3,5,7,11,13,17,19,23]

    function isPrime(n) {
        var sn = Math.sqrt(n)

        for(var i = 0; primeList[i] <= sn; i++) {
            if (n % primeList[i] === 0) {
                return false
            }
        }
        return true
    }

    function countPrimes(n) {
      var count = 1
      for(var i = 3; i < n; i+=2) {
        if (isPrime(i)) {
            primeList.push(i)
            count++
        }
      }
      return count
  }


    ```

60. 请把【foo"'\\n//】这10个符号表示为js中的字符串。


    “foo" + "&quot" +  “&#47” + “/” + “n/” +"&#92" 

61. 中英互翻
    * graceful degrade
    * shrink
    * alternative
    * render
    * surprisingly
    * convention
    * trigger
    * syntax
    * pixel ratio
    * linear  线性
    * series
    * chain
    * keyframe  关键帧
    * unique
    * maintainable
    * dppx
    * dpi
    * instant
    * precede
    * counterparts
    * immediately
    * shape     形状
    * horizontal    
    * feature
    * incredibly
    * cpu-intensive
    * hardware acceleration
    * available
    * situation
    * case      分支
    * scenario
    * shorthand
    * vertical
    * compose
    * vender
    * prefix
    * subsequent
    * illustrate
    * dpcm
    * resolution
    * square
    * cinematic
    * multiple      多种
    * bulletproof
    * address       地址
    * issue
    * workaround
    * introduce
    * model     模型
    * hexadecimal
    * combine
    * quartet
    * perspective
    * prime     素数
    * torture
    * evenly
    * shift
    * offset
    * implement
    * 字体子集
    * axis
    * viewport
    * develop
    * development
    * attribute selector
    * siblings
    * ajacent
    * cartesian coordinate system
    * dimensional
    * inherit
    * output
    * input
    * default
    * restrict
    * certain
    * circumstance
    * sceneario
    * 伪元素
    * 伪类
    * structue
    * infinite
    * intensive
    * torture
    * palette
    * reduce
    * ellipse
    * ellipsis
    * currency
    * quirk
    * portrait
    * landscape
    * orientation
    * credentials
    * origin
    * gradient
    * distort
    * cubic
    * implicit
    * explicit
    * decoration
