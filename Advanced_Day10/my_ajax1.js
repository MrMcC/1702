ajax = {
    /*使用get方法区进行ajax请求*/
    get: function (option){
        if (!option.url) return; //
        if (typeof option.onSuccess != "function") return;

        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
        xhr.open("GET", option.url, true);
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    option.onSuccess(xhr.responseText);
                }else{
                    if (typeof option.onFail == "function"){
                        option.onFail(xhr.responseText);
                    }
                }
            }
        }
        xhr.send(null);
    },
    /*使用post方式进行ajax请求*/
    post: function (option){
        if (!option.url) return; //
        if (typeof option.onSuccess != "function") return;
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
        xhr.open("POST", option.url, true);
        xhr.onreadystatechange = function (){
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    option.onSuccess(xhr.responseText);
                }else{
                    if (typeof option.onFail == "function"){
                        option.onFail(xhr.responseText);
                    }
                }
            }
        }
        //如果是使用的post提交表单数据，需要添加这个请求头
        if (typeof option.data == "string"){
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }
        xhr.send(option.data);
    }
}

