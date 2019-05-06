const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");
const serverHandler = (req,res)=>{
    //设置返回格式
    res.setHeader('Content-type','application/json;charset=utf-8') //'text/plain'
    
    //处理blog路由
    const blogData = handleBlogRouter(req,res);
    if (blogData) {
        res.end(JSON.stringify(blogData));
        return
    }

    //处理user路由
    const userData = handleUserRouter(req,res);
    if (userData) {
        res.end(JSON.stringify(userData));
        return
    }
    
    res.writeHead("404",{"Content-type":"text/plain"})
    res.write("404 NOT FOUND");
    res.end();
}

module.exports = serverHandler;