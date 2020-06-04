<template>
    <div class="homeCon">
        <div class="banner">
            <img src="@/assets/images/sc_banner.png" alt="">
        </div>
        <div class="homeNav">
            <ul>
                <li v-for="item in homeNav" :key="item.id" :class="item.active?'active':''" @click="change(item.id)">
                    <i :class="item.icon"></i>
                    <span>{{item.text}}</span>
                </li>

            </ul>
        </div>

<!--        列表部分-->
        <div class="listBox">
            <div class="list">
                <div class="item" v-for="(item,index) in 20">
                    <div class="img" :ref="'foo'+ index">
                        <img src="http://img.tksck.com/73-sc-6575aaa4-a472-11ea-b428-00163e031401.png" alt="">
                    </div>
                    <div class="text">
                        <p>韩束红胶囊水</p>
                        <div class="bottom">
                            <p>来源：<span>淘客素材库</span></p>
                            <button  @click="copy(index)">复制</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeContent",
        data(){
            return {
                homeNav:[
                    {id:1,icon:'el-icon-price-tag',text:"精选素材",active:true},
                    {id:2,icon:'el-icon-shopping-cart-2',text:"超市素材",active:false},
                    {id:3,icon:'el-icon-camera',text:"实拍素材",active:false},
                    {id:4,icon:'el-icon-chat-dot-round',text:"微商素材",active:false},
                    {id:5,icon:'el-icon-video-camera',text:"视频素材",active:false},
                ]
            }
        },
        methods:{
            change(id){
                for(let i = 0;i < this.homeNav.length;i++){
                    this.homeNav[i].active = false;
                    if(this.homeNav[i].id == id){
                        this.homeNav[i].active = true;
                    }
                }
            },
            copy (index) {

                this.$nextTick(function () {//nextTick,当前dom渲染完毕的回调
                    console.log('foo', this.$refs.foo1)//打印获取的dom
                    const selection = window.getSelection()
                    const range = document.createRange()
                    range.selectNode(this.$refs.foo1[0])//传入dom
                    selection.addRange(range)
                    document.execCommand('copy')//copy是复制
                    selection.removeAllRanges()//清除缓存
                })
            },
            // doCopy: function () {
            //     this.$copyText(this.message).then(function (e) {
            //         alert('Copied')
            //         console.log(e)
            //     }, function (e) {
            //         alert('Can not copy')
            //         console.log(e)
            //     })
            // }
        }
    }
</script>

<style lang="scss" scoped>
.homeCon{
    width: 100%;
    background: #f8f8f8;
    min-height: 700px;
    .banner{
        width: 1920px;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .homeNav{
        width: 1300px;
        margin: auto;
        height: 100px;
        margin-top: 10px;
        ul{
            display: flex;
            justify-content: space-between;
            li{
                width: 270px;
                background: #ffffff;
                height: 99px;
                font-size: 16px;
                line-height: 100px;
                text-align: center;
                margin-left: 5px;
                border-bottom: 1px solid #fff;
                position: relative;
                i{
                    font-size: 40px;
                    position: relative;
                    top: 8px;
                }
                span{
                    margin-left: 5px;
                }
            }
            .active:after{
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                left: 123px;
                top: 99px;
                border-left: solid 12px transparent;
                border-top: solid 11px rgb(241, 241, 241);
                border-right: solid 12px transparent;
            }
            .active:before{
                content: "";
                width: 0;
                height: 0;
                position: absolute;
                left: 123px;
                top: 100px;
                border-left: solid 12px transparent;
                border-top: solid 12px #5388ff;
                border-right: solid 12px transparent;
            }
            .active{
                color: #5388ff;
                background-color: rgb(241, 241, 241);
                border-bottom: 1px solid #5388ff
            }
        }
    }
    .listBox{
        width: 100%;
        padding-top: 20px;
        .list{
            width: 1300px;
            padding-bottom: 10px;
            margin: auto;
            background: #ffffff;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .item{
                width: 250px;
                margin: 10px 5px;
                border-radius: 4px;
                background: #f8f8f8;
                overflow: hidden;
                .img{
                    width: 250px;
                    height: 350px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .text{
                    width: 230px;
                    padding: 10px;
                    color: rgb(114, 110, 110);
                    p{
                        height: 20px;
                        overflow:hidden ;
                    }
                    .bottom{
                        line-height: 24px;
                        display: flex;
                        justify-content: space-between;
                        button{
                            width: 40px;
                            height: 20px;
                            color: #fff;
                            background: #198cf0;
                            font-size: 12px;
                            border-radius: 3px;
                            line-height: 20px;
                            cursor: pointer;
                        }
                    }
                }

            }
            .item:hover{
                box-shadow: 5px 3px 20px #999;
                transition: all .2s linear;
                margin-top: 5px;
            }
        }
    }
}
</style>