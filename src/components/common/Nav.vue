<template>
    <div class="navBox">
        <div class="nav">
            <ul>
                <li class="active">素材图片</li>
                <li>生成订单图</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style lang="scss" scoped>
.navBox{
    width: 100%;
    height: 40px;
    .nav{
        width: 100%;
        height: 40px;
        max-width: 1920px;
        margin: auto;
        background: #5388ff;
        ul{
            display: flex;
            justify-content: flex-start;
            width: 1300px;
            margin: auto;
            padding-top: 5px;
            li{
                width: 100px;
                height: 30px;
                text-align: center;
                margin:0 5px;
                color: #ffffff;
                line-height: 30px;
                cursor: pointer;
                border-radius: 15px;
            }
            li:hover,.active{
                background: #ffffff;
                color: #5388ff;
            }
        }
    }
}
</style>