<template>
    <div class="logoBox">
        <div class="log">
            <img src="@/assets/images/top_logo.png" alt="">
            <div class="search">
                <input type="text" placeholder="请输入关键字/链接"><button>搜索</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Logo",
        data(){
            return {
                search:""
            }
        },

    }
</script>

<style lang="scss" scoped>
    .logoBox{
        width: 100%;
        height: 120px;
        background: #f8f8f8;
        .log{
            width: 1300px;
            margin: auto;
            display: flex;
            justify-content: flex-start;
            img{
                width: 250px;
                height: 71.5px;
                margin-top: 21px;
            }
            .search{
                margin:36px 0 0 60px;
                width: 580px;
                padding-left: 20px;
                height: 40px;
                border: 2px solid #5388ff;
                border-radius: 20px;
                overflow: hidden;
                border-right: none;
                button{
                    width: 110px;
                    height: 44px;
                    background: #5388ff;
                    border-radius: 22px;
                    position: relative;
                    top: -2px;
                    right: -2px;
                    border: none;
                    border-right: 2px solid #5388ff;
                    color: #fff;
                }
                input{
                    width: 470px;
                    height: 42px;
                    background: #f8f8f8;
                }
            }
        }
    }
</style>