<template>
    <div class="hs_container">
        <div class="hs_nav">
          <div class="hs_logo">
            <img  src="../assets/logo.png" alt="">
          </div>
          <div class="hs_menu">
            <ul>
              <li class="liHover"><img src="../assets/image/hs_sy_1.png" alt="" ><span>首页</span></li>
              <li><img src="../assets/image/hs_bd.png" alt=""><span>爆点</span></li>
            </ul>
          </div>
          <div class="hx_center">
            <ul>
              <li><img src="../assets/image/hs_xy.png" alt=""><span>消息</span><i class="hs_message_dot"></i></li>
              <li><img src="../assets/image/hs_zw.png" alt=""><span>中文</span><img src="../assets/image/hs_qh.png" alt="">
                <div class="hx_centerLang">
                  <ul>
                    <li>
                      <img src="../assets/image/hs_zw_1.png" alt=""><span class="hx_centerLangHover">中文</span>
                    </li>
                    <li>
                      <img src="../assets/image/hs_yw_1.png" alt=""><span>English</span>
                    </li>
                    <li>
                      <img src="../assets/image/hs_ft_1.png" alt=""><span>繁體</span>
                    </li> 
                    <li>
                      <img src="../assets/image/hs_hg_1.png" alt=""><span>韓國</span>
                    </li> 
                    <li>
                      <img src="../assets/image/hs_jp_1.png" alt=""><span>日本语</span>
                    </li>                                                            
                  </ul>
                </div>
              </li>
              <li><img src="../assets/image/hs_dl.png" alt=""><span>请登录</span><img src="../assets/image/hs_dl_1.png" alt=""></li>
            </ul>
          </div>
        </div>
        <div class="hs_main">
          <div class="hs_main_money">
            <div>
              <img src="../assets/image/left.png" alt="">
              <span>奖金池</span>
            </div>
            <div class="hs_main_money_bottom">
              <div class="hs_main_money_left">
                <img src="../assets/image/hs_jj.png" alt="">
                <strong>8554467.5621</strong>
                <span>当前奖金池</span>
              </div>
              <div class="hs_main_game_right">
                <ul>
                  <li>
                    <img src="../assets/image/hs_wj.png" alt="">
                    <div>
                    <strong>
                      <i></i>
                    </strong>
                     <div></div>
                    </div>

                    <span>玩家</span>
                  </li>
                  <li>
                    <img src="../assets/image/hs_yx.png" alt="">
                    <strong>
                      <i></i>
                    </strong>
                    <span>参与游戏</span>
                  </li>
                  <li>
                    <img src="../assets/image/hs_bt.png" alt="">
                    <strong>
                      <i></i>
                    </strong>
                    <span>获得代币</span>
                  </li>
                  <li>
                    <img src="../assets/image/hs_fh.png" alt="">
                    <strong>
                      <i></i>
                    </strong>
                    <span>持有分红或直接售出</span>
                  </li>                                                      
                </ul>
                <img  class="hs_main_game_line" src="../assets/image/hs_line.png" alt="">
              </div>
            </div>
          </div>  
          <div class="hs_main_game">
            <div>
              <img src="../assets/image/left.png" alt="">
              <span>游戏</span>
            </div>
            <div>
              <ul>
                <li>
                  <img src="../assets/image/hs_bz.png" alt="" style=" margin-top:40px;">
                  <span>爆点</span>
                  <img src="../assets/image/hs_new.png" class="imgNew" alt="">
                </li>
                <li>
                  <img src="../assets/image/hs_sj.png" alt="" style=" margin-top:58px;">
                  <span>射击</span>                  
                  <i>即将上线</i>
                </li>
                <li>
                  <img src="../assets/image/hs_sc.png" alt=""  style=" margin-top:86px;">
                  <span style=" margin-top:26px;">T1竞赛</span>                  
                  <i>即将上线</i>                 
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.hs_container {
  position: relative;
  width: 100%;
  // height: 100%;
 // height: 1080px;
  background: rgb(26, 27, 46);
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .hs_nav {
      width: 17%;
      background: url("../assets/image/hs_bg_1.png");
      position: relative;
      display: flex;
      flex-direction: column;
      .hs_logo {
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        img {
          width: 50%;
          height: 50%;
        }
      }
      .hs_menu {
        & > ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .liHover {
            background: rgba(37, 51, 69, 0.8);
            border-radius: 4px;
          }
          li {
            width: 160px;
            height: 58px;
            padding: 11px;
            font-weight: bold;
            font-size: 20px;
            line-height: 36px;
            color: #46c1e0;
            margin: 10px;

            img {
              position: relative;
              top: -3px;
              margin-left: 30px;
            }
            span {
              margin-left: 10px;
            }
          }
        }
      }
      .hx_center {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        & > ul {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: rgb(145, 147, 156);
          & > li {
            font-weight: bold;
            font-size: 20px;
            line-height: 20px;
            position: relative;
            &:not(:first-child) {
              margin-top: 44px;
            }
            span {
              display: inline-block;
              margin: 0 10px;
            }
            img {
              position: relative;
              top: -3px;
            }
            .hs_message_dot {
              height: 8px;
              width: 8px;
              border-radius: 50%;
              position: absolute;
              background-color: rgb(70, 194, 225);
              border-radius: 10px;
              display: inline-block;
              text-align: center;
              white-space: nowrap;
              vertical-align: super;
            }
            div.hx_centerLang {
              width: 125px;
              height: 195px;
              background: url("../assets/image/hs_rb_1.png") no-repeat;
              background-position-y: -10px;
              font-size: 16px;
              line-height: 36px;
              color: #fff;
              font-weight: normal;
              position: absolute;
              top: -180px;
              left: 105px;
              img {
                margin-left: 30px;
              }
              .hx_centerLangHover {
                color: #3b7c95;
              }
            }
          }
        }
      }
    }
    .hs_main {
      background: #1a1b2e;
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      .hs_main_money {
        width: 1490px;
        height: 364px;
        margin-top: 50px;
        margin-left: 55px;
        background: #232436;
        border-radius: 10px;
        & > :first-child {
          height: 55px;
          background: #242a3d;
          border-radius: 10px 10px 0 0;
          img {
            margin-left: 20px;
          }
          span {
            font-size: 20px;
            line-height: 55px;
            color: #fefefe;
          }
        }
        .hs_main_money_bottom {
          display: flex;
          flex-direction: row;
          .hs_main_money_left {
            width: 360px;
            margin: 25px 0 25px 0;
            border-right: 1px solid #393a4a;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-top: 35px;
            }
            strong {
              font-size: 32px;
              line-height: 86px;
              color: #46c1e0;
            }
            span {
              font-size: 20px;
              line-height: 36px;
            }
          }
          .hs_main_game_right {
            width: 100%;
            position: relative;
            .hs_main_game_line {
              position: absolute;
              left: 140px;
              top: 170px;
            }
            ul {
              width: 100%;
              margin: 25px 0 25px 0;
              display: flex;
              justify-content: space-around;
              li {
                display: flex;

                flex-direction: column;
                align-items: center;
                img {
                  margin-top: 35px;
                }
                & > div {
                  width: 100%;
                  text-align: center;
                }
                & > span {
                  color: #fefefe;
                  margin-top: 78px;
                }
                // strong {
                //   display: inline-block;
                //   width: 18px;
                //   height: 18px;
                //   border: 1px solid #fefefe;
                //   border-radius: 50%;
                //   margin-top: 39px;
                //   text-align: center;
                //   position: relative;
                //   i {
                //     display: inline-block;
                //     width: 12px;
                //     height: 12px;
                //     background: #fefefe;
                //     border-radius: 50%;
                //     position: relative;
                //     top: -3px;
                //   }
                //   & > div > div {
                //     display: inline-block;
                //     width: 50%;
                //     height: 12px;
                //     background: red;
                //   }
                // }
              }
            }
          }
        }
      }
      .hs_main_game {
        width: 1490px;
        height: 566px;
        margin-top: 50px;
        margin-left: 55px;
        background: #232436;
        border-radius: 10px;
        & > :first-child {
          height: 55px;
          background: #242a3d;
          border-radius: 10px 10px 0 0;
          img {
            margin-left: 20px;
          }
          span {
            font-size: 20px;
            line-height: 55px;
            color: #fefefe;
          }
        }
        & > :last-child {
          color: red;
          ul {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 80px;
            li {
              width: 340px;
              height: 340px;
              background: url("../assets/image/hs_bj1.png");
              display: flex;
              flex-direction: column;
              align-items: center;
              color: #fefefe;
              position: relative;
              img {
                margin-top: 40px;
              }
              span {
                font-size: 20px;
                line-height: 36px;
              }
              .imgNew {
                position: absolute;
                top: -44px;
                left: -4px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) and (min-width: 767px) {
    p {
      color: yellow;
    }
  }
  @media (max-width: 768px) and (min-width: 577px) {
    p {
      color: blue;
    }
  }
  @media (max-width: 576px) {
    p {
      color: green;
    }
  }
}
</style>

