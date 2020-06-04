<template>
    <div class="headerTop">
        <div class="top">
            <div class="topLeft">
                <span>汇集全网优质素材，精编文案！快捷加入收藏夹按 Ctrl+D</span>
            </div>
            <div class="topRight">
                <div class="personLogin">
                    <span>你好，请登录</span><span style="color: #5388ff;margin-left: 10px">免费注册</span>
                </div>
                <div class="personLogined">
                    <ul>
                        <li>欢迎您，</li>
                        <li>用户名</li>
                        <li>个人中心</li>
                        <li>素材上传</li>
                        <li>退出登录</li>
                    </ul>
                </div>
                <span style="margin: 0 10px">|</span>
                <div class="serve">
                    客服中心
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderTop"
    }
</script>

<style lang="scss" scoped>
.headerTop{
    width: 100%;
    background: #f8f8f8;
    height: 30px;
    line-height: 30px;
    .top{
        width: 1250px;
        padding: 0 50px 0 0;
        margin: auto;
        display: flex;
        justify-content: space-between;
        .topLeft{
            span{
                cursor: pointer;
            }
            span:hover{
                color: #1d75c2;
            }
        }
        .topRight{
            display: flex;
            justify-content: flex-end;
            .personLogin{
                span{
                    cursor: pointer;
                }
            }
            .serve{
                cursor: pointer;
            }

            //已经登陆的 样式
            .personLogined{
                ul{
                    display: flex;
                    justify-content: flex-end;
                    li{
                        margin: 0 5px;
                        color: #5388ff;
                        cursor: pointer;
                    }
                    li:nth-of-type(1){
                        margin: 0;
                        color: #000000;
                        cursor: default;
                    }
                    li:nth-of-type(2){
                        margin-left: 0;
                    }
                }
            }
        }
    }
}
</style>