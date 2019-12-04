// js SDK 
// 在构建函数中 加了this以后就会被实例化后访问到，没有加就不会被暴露出来

function newJS(res){
    console.log(res)
    var config={
            name:res
    }

    this.setConif=function(){
            getAllName()
            console.log(config)
    }

 async function getAllName(){
        let name = await setTime()
        console.log(name)
        console.log('??')
        retPromis().then(res=>{
            console.log(res)
        })
    }

    function setTime(){
              return  new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    return  resolve('111')
                },2000)
         })
    }

    function retPromis(){
        return new Promise((resolve,reject)=>{
            resolve('我是返回值')
        })
    }

}

export default newJS