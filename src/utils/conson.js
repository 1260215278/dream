// 花里胡哨的调试台
function conson(){
    let color=''
    let  str =''
    // 生成随机颜色 
    // 生成随机字符串 随机字符可以更换成
    setInterval(()=>{
            color = '#'+Math.floor(Math.random()*0xffffff).toString(16);
            str = '花里胡哨的调试台，颜色是'+'#'+Math.floor(Math.random()*0xffffff).toString(16);
            console.log('%c%s', `padding: 2px 4px; width:300px;   text-align: center; background: ${color};color: white;border-radius: 5px;`, str);
    },1000)
}

module.exports= conson