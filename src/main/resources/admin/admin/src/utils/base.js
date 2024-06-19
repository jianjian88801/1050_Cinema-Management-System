const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootm3kwm/",
            name: "springbootm3kwm",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootm3kwm/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "小徐影城管理系统"
        } 
    }
}
export default base
