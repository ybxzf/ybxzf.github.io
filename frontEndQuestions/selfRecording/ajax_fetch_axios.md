# Ajax_Fetch_Axios篇

## 一、Ajax相关
### 1. Ajax概念
**Ajax 全称** ：async javaScript and xml。

**xml** ：是一种可以扩展的文本标记语言，可以扩展自定义的语义标签。很早以前 xml 常用于从服务端返回数据结构，现在基本都是使用 json 格式返回数据。

### 2. Ajax作用
在不刷新全局的条件下，局部刷新页面。

### 3. 如何创建 Ajax
1. **创建Ajax实例** ：let xhr = new XMLHttpRequest()，注意：IE6 不兼容这种写法。
2. **打开请求，配置请求前的配置项** ：共 5个参数 
    `xhr.open([http method], [url], [async], [userName], [userPass])`
> - **http methods** 有常用的请求方式有：post，get，delete，put，head，options，trace，connect。
> - **url**：是想服务器请求的 api。
> - **async**：代表异步，默认是 true 异步，false 是同步。
> - **userName、userPass**：代表用户名和密码

3. **事件监听 readystatechange** ，一般监听 ajax 状态码发生改变的事件，这个事件可以获取服务器返回的响应主和请求头。
**xhr.onreadystatechange = function (){}**，对于同步执行的 Ajax 请求代码步骤三要放在send的前面，否则没有意义。

4. **xhr.send([])**  发送 ajax 请求，ajax 任务开始执行。XMLHttpRequest.send() 方法中如果 Ajax 请求是异步的则这个方法发送请求后就会返回，如果Ajax请求是同步的，那么请求必须响应后才会返回。 第五步算上的话，就是读取返回的数据 **xhr.responseText** 。
```
    // 1. 创建 XMLHttpRequest 实例
    let xhr = XMLHttpRequest()

    // 2. 打开和服务器的连接
    xhr.open('get', 'URL')

    // 3.发送
    xhr.send()

    // 4. 接收变化。
    xhr.onreadystatechange = () => {

        // readyState: ajax 状态，status：http 请求状态
        if(xhr.readyState == 4 && xhr.status == 200){   

            //响应主体
            console.log(xhr.responseText);   
        }
    }
```
### 4. Ajax 状态和 HTTP 状态码
Ajax 状态一共有 5 种 xhr.readyState，分别是 0, 1, 2, 3, 4
> - **状态 0** ：unsent，刚创建的 XMLHttpRequest 实例，还没有发送。
> - **状态 1** ：（载入）已调用 send() 方法，正在发送请求。
> - **状态 2** ：（载入完成）send() 方法执行完成，已经接收到全部响应内容
> - **状态 3** ：loading（交互）正在解析响应内容
> - **状态 4** ：done 表示响应的主体内容解析完成，可以在客户端调用了

HTTP 常见的状态码
> - **1xx** ：信息，服务器收到请求，需要请求者继续执行操作。
> - **2xx** ：表示请求已经被服务器接收，理解，请接受。常见的有，200 表示ok，表示服务能够返回信息。204 No Content 无内容。服务器成功处理，但未返回内容。
> - **3xx** ：重定向，需要进一步的操作以完成请求。一类重要的高频考点：301：表示永久转移，返回旧域名会跳转到心域名。302：临时转移。一般用于服务器负载均衡，但服务器的并发数达到最大时，服务器会将后续访问的用户转移到其他服务器上去。307：表示临时重定向。304：表示不设置缓存，对于不经常更新的文件，例如css/js/html文件，服务器会结合客户端设置304状态，加载过的资源下次请求时会在客户端中获取。
> - **4xx** ：客户端错误，请求包含语法错误或无法完成请求，无法被服务器端理解。400：表示请求的参数错误。401：表示无权限访问。404：表示请求的资源不存在。413：表示和服务器的交互过大。
> - **5xx** ：服务器端出错，服务器在处理请求的过程中发生了错误。500：表示服务器端出现未知的错误。503：服务器超负荷。

### 5. Ajax 中常用的属性和方法
> - **onabort** ：表示请求中断后要处理的事，和 xhr.abort() 一起使用。
> - **ontimeout** ：表示请求的超时，执行的方法，和 timeout 设定的事件一起使用。
> - **response** ：响应的主体内容。
> - **responseText** ：响应的具体内容是字符串，一般是 json 字符串。
> - **responseXML** ：响应的具体内容是文档。
> - **status** ：http 的状态码。
> - **statusText** ：状态码描述。
> - **withCredentials** ：表示是否允许跨域。
> - **getAllResponseHeaders** ：获取所有响应头信息。
> - **xhr.open()** ：打开URL请求。
> - **xhr.send()** ：表示发送 ajax。
> - **setRequestHeader()** ：设置请求头。这个属性在必须在 xhr.open() 后面。

### 6. post 和 get 有什么区别
http 的所有请求方法中都可以从服务端获取数据和传递内容。
**get** ：主要是从服务器获取数据。
**post** ：主要发送数据给服务器。
GET 和 POST 本质上就是 TCP 链接，并无差别，但是由于HTTP的规定和浏览器/服务器的限制具体由如下的**区别**：
> - 从**缓存**的角度上说，get 请求会被浏览器默认缓存下来，而 post 请求默认不会。
> - 从**参数**来说，get 请求的参数一般放在 url 中，post 请求是放在请求主体中，因此 post 请求更安全一些。
> - 从 **TCP** 上来说，get 产生**一个** TCP 数据包；post 产生**两个** TCP 数据包。对于 GET 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应200（返回数据）；而对于 POST，浏览器先发送 header，服务器响应 100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。虽然 post 请求需要发送两次，但是时间上是基本差别不大的。还有并不是所有浏览器都会在 POST 中发送两次包，Firefox 就只发送一次。

## 二、Axios相关
**解释声明** ：axios 是使用 **promise** 封装的 ajax。axios 不是一个**类**是一个**方法**。
### 1. axios 原理
**createInstance** 底层根据默认设置 新建一个 Axios 对象，axios 中所有的请求[ axios，axios.get，axios.post等…] 内部调用的都是**Axios.prototype.request**，将 Axios.prototype.request 的内部 this 绑定到新建的 Axios 对象上，从而形成一个axios实例。新建一个Axios对象时，会有两个拦截器，**request拦截器，response拦截器。**

请求拦截器 **axios.interceptors.request** ：请求拦截器的作用是在请求**发送前**进行一些操作，例如在每个请求体里加上token，统一做了处理如果以后要改也非常容易。
```
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么，例如加入token
        .......
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
    );
```

响应拦截器 **axios.interceptors.response** ：响应拦截器的作用是在接收到**响应后**进行一些操作，例如在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页。
```
    axios.interceptors.response.use(function (response) {
        // 在接收响应做些什么，例如跳转到登录页
        ......
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
    );
```

### 2. axios 的特点有哪些？
1. Axios 是一个基于 **promise** 的 HTTP 库，支持 promise **所有的API**
2. 它可以**拦截**请求和响应
3. 它可以**转换**请求数据和响应数据，并对响应回来的内容自动转换成 JSON类型的数据
4. 安全性更高，客户端支持防御 XSRF

### 3. axios 有哪些常用方法？
axios 有 **get，post，put，patch，delete** 等请求方式，get，post 返回的实例都是 **promise** ，所以可以使用 promise 的方法。
1. **axios.get(url[, config])** ：get请求用于列表和信息查询
```
    axios.get('apiURL', {
        param: {
            id: 1
        }
        // param 中的的键值对最终会 ? 的形式，拼接到请求的链接上，发送到服务器。
    }).then(res => {
        console.log(res);
    })
    .catch( error => {
        console.log(error)
    }
```
2. **axios.post(url[, config])** ：post请求用于信息的添加
```
    axios.post('apiURL',{
        user: '小新',
        age: 18
    }).then( res => {
        console.log(res);
    })
    .catch( error => {
        console.log(error)
    }
```
3. **axios.delete(url[, config])** ：删除
```
    axios.delete('apiURL', {
        params: {
            id: 1
        },
        timeout: 1000
    })
```

### 4. 一次并发的请求： **axios.all([])**
**axios.all()** 可以实现多个请求，且请求都需要在完成后才再去做某事。
```
    let requestArr = [
        axios.get('apiURL/1'), 
        axios.get('apiURL/2'), 
        axios.post('apiURL/3', {id: 3})
    ]
    axios.all(requestArr).then(res => {
        console.log(res)
    })
```
axios.all() 是**怎么实现**并发请求的？
axios.all() 使用的是 **promise.all()** 实现的，来看看 axios 中的源码
```
    axios.all = function all(promises) {
        return Promise.all(promises);
    };
```
### 5. 说下你了解的axios相关配置属性？
> - **url** ：是用于请求的服务器URL
> - **method** ：是创建请求时使用的方法，默认是 **get**
> - **baseURL** ：将自动加在 url 前面，除非 url 是一个绝对URL。它可以通过设置一个 baseURL 便于为 axios 实例的方法传递相对URL
> - **transformRequest** ：允许在向服务器发送前，修改请求数据，只能用在PUT，POST和PATCH这几个请求方法
> - **headers** ：是即将被发送的自定义请求头，如：` headers: {'X-Requested-With':'XMLHttpRequest'} `
> - **params** ：是即将与请求一起发送的URL参数，必须是一个无格式对象(plainobject)或 URLSearchParams 对象，如：`params: {	ID:12345}`
> - **auth** 表示应该使用 HTTP 基础验证，并提供凭据，这将设置一个**Authorization**头，覆写掉现有的任意使用headers设置的自定义Authorization头
>   ```
>     auth:{
>         username: 'janedoe',
>         password: 's00pers3cret'
>     },
>   ```
> - **proxy** 定义代理服务器的主机名称和端口
> - - **auth** 表示 HTTP 基础验证应当用于连接代理，并提供凭据
>     这将会设置一个 Proxy-Authorization 头，覆写掉已有的通过使用 header 设置的自定义Proxy-Authorization头。
>   ```
>    proxy: {
>        host: '127.0.0.1',
>        port: 9000,
>        auth: {
>            username: 'mikeymike',
>            password: 'rapunz3l'
>        }
>    },
>   ```
## 三、Fetch 相关面试题
### 1. Fetch是什么
1. **fetch** ：是 **http** 的数据请求方式，是 XMLHttpRequest 的一种**代替方案**，没有使用到 XMLHttpRequest 这个类。fetch **不是** ajax，而是原生的 **js**。fetch() 使用 **Promise**，不使用回调函数。fetch 是 **ES8** 中新增的 api，**兼容性不是很好**，IE 完全不兼容 fetch 写法。
2. **fetch()** 采用**模块化**设计，API 分散在 **Response** 对象、**Request** 对象、**Headers** 对象上。
3. **fetch()** 通过**数据流（Stream 对象）**处理数据，对于请求**大文件**或者**网速慢**的场景相当有用。XMLHttpRequest 没有使用数据流，所有的请求都必须完成后才拿到。
4. 在默认情况下 fetch 不会**接受**或者**发送** **cookies**

### 2. fetch(url, optionObj) 基本使用
1. 第一个参数为请求的 **url** ，默认的请求方式是 **get** 。
2. 第二个是可选参数 **optionObj** ，可以控制不同配置的属性，比如：
   1.  **method** ：属性是字符串。
   2.  **headers** : 一个对象，可以设定 http 的请求头。
   3.  **body** : POST 请求的数据体，属性也是字符串。
   4.  **credentials** ：表示是否可以携带 cookie，includes 表示是否同源都包含 cookie。
   
3. **get请求**
``` 
    const pro = fetch('https://xxx')
    pro.then( response => 
        response.json()
    ).catch( err => {
        console.log(err)
    })
``` 
4. **post请求**
``` 
    const URL =  'https://xxx'
    const init = {
        method: 'POST',
        header: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        data: 'id=12&name=小新',
        credentials: 'include'
    }
    const pro = fetch(URL, init)
    pro.then( response => 
        response.json()
    ).catch( err => {
        console.log(err)
    })
``` 
### 3. fetch 的三个模块
1. **Response** ：fetch 请求发送后，会得到一个服务器的响应 response，这个响应对应着 **http** 的回应。
2. **Request** ：这是用于请求服务器的模块，上面提到的 **data**, **header**, **method** 都是 **Request** 模块的属性。
3. **Headers** ：这是一个在 **Response.headers** 上的属性用于**操控响应头**的信息。
### 4. 发送 post 2 次请求的原因
使用 **fetch** 发送 **post** 请求时如果是**跨域**，那么导致 fetch **第一次发送了一个Options请求**，询问服务器是否支持**修改的请求头**，如果服务器支持，则在第二次中发送**真正的请求**。
### 5. fetch 的缺点
1. **fetch** 的 **get/head** 请求不能设置 **body** 属性。
2. **catch** 无法根据错误码捕获请求失败，**fetch** 请求后，服务器返回的状态码无论是多少包括(4xx, 5xx)，fetch 都**不认为**是失败的，也就是使用 **catch** 也不能直接捕捉到错误，需要再第一个 **then** 中做一些处理。

## 四、Ajax、Fetch、Axios 综合面试题
### 1. 如何实现一个 Ajax。
**axios** ：将原生的 ajax 封装成 **promise** 就是axios
```
    var myNewAjax = function (url) {
        return new Promise(function (resolve, reject) {
            //传统的ajax
            var xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.send(data);
            xhr.onreadystatechange = function () {
                if (xhr.status == 200 && readyState == 4) {
                    var json = JSON.parse(xhr.responseText);
                    resolve(json)
                } else if (xhr.readyState == 4 && xhr.status != 200) {
                    reject('error');
                }
            }
        })
    }
```
### 2. Fetch VS Ajax VS Axios 区别
1. 传统的 ajax 利用的是 **XMLHttpRequest** 这个对象，和后端进行交互。JQuery ajax 是对原生 XHR 的封装，多请求间有嵌套的话就会出现**回调地狱**的问题。
2. **axios** 使用 **promise** 封装 **xhr** ，**解决了**回调地狱问题。
3. **fetch** 不是 **XMLHttpRequest** ，fetch 是**原生**的 js，使用的是 **promise** 。
### 3. Fetch 和 Ajax 比有什么优点？
fetch 使用的是 **promise** 方便使用异步，**解决了**回调地狱问题。
### 4. 如何实现一个 ajax 请求？如果我想发出两个有顺序的 ajax 需要怎么做？
实现 **ajax** 的请求就是上面的创建 **ajax** 的几个步骤。实现**两个有顺序**的 ajax 可以使用 **promise.then()** 。
### 5. Ajax 怎么解决浏览器缓存问题
1. 设置**请求头**，在 ajax 发送请求前加上 `anyAjaxObj.setRequestHeader("If-Modified-Since","0")` 或 `anyAjaxObj.setRequestHeader("Cache-Control","no-cache")`。
2. 在 URL 后面加上一个**随机数**：`"fresh=" + Math.random()`。 或在后面加上时间戳：`"nowtTime=" + new Date().getTime()`。
3. 如果是使用 **jQuery** ，直接这样就可以了 `$.ajaxSetup({cache:false})`。这样页面的所有 ajax 都会执行这条语句就是不需要保存缓存记录。



