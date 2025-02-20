<template>
    <div class="price-calculator">
        <div class="container" style="margin-top: -20px;">
            <van-cell-group inset title="参考标准" style="margin-bottom: 3px;">
                <van-field v-model="roofArea" label="车棚面积（平方米）" label-width="12em" input-align="right"
                    style="padding: 3px;" readonly />
                <van-field v-model="height" label="车位标准" label-width="12em" input-align="right" style="padding: 3px;"
                    readonly />
                <van-field v-model="installCapacityN" label="装机规模（kWp）" label-width="12em" style="padding: 3px;"
                    input-align="right" readonly />
            </van-cell-group>
            <span style="text-align: center;color: #969799;font-size: 13.8px;">基本配置 单瓦造价(元/W)</span>
            <van-grid :border="true" :column-num="4" class="custom-grid" style="margin-top: 8px;margin-bottom: 0px;">
                <van-grid-item class="custom-grid-item">
                    <span>组件</span>
                    <van-tag type="primary" round
                        @click="showPriceToast('CEE集采价格按照调价公式高于市场价较多，根据与入围供应商沟通得知，目前集采是按照竞价模式，各家报价基本按照市场价报。含税含运市场价约0.7元/W')">0.7000</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>逆变器</span>
                    <van-tag type="primary" round
                        @click="showPriceToast('华为110kW逆变器集采价格0.158元/W，50kW、30kW等其他规格按市场价走，分别约0.186元/W、0.2元/W。其他如阳光电源、固德威等基本按照市场价走，约0.16元/W，按照容配比1.2计算，约0.14元/W')">0.1400</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>电缆</span>
                    <van-tag type="primary" round @click="showPriceToast('直流电缆选用PV1-F-1*4，交流电缆选用ZR-YJV22-3*95+1*50，逆变器10个，单个逆变器交流电缆用量50m')">0.1577</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>支架</span>
                    <van-tag type="primary" round @click="showPriceToast('常规家用汽车车位，常规型钢结构车棚')">1.2000</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>施工（含接地、桥架等）</span>
                    <van-tag type="primary" round @click="showPriceToast('含接地、桥架等辅材，人工0.19左右，机械费0.02左右，材料费0.1左右')">0.3400</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>通讯组网及视频监控系统</span>
                    <van-tag type="primary" round @click="showPriceToast('无说明')">0.0238</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>云监控系统</span>
                    <van-tag type="primary" round @click="showPriceToast('基础功能、测点调试')">0.0308</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>设计费</span>
                    <van-tag type="primary" round @click="showPriceToast('无说明')">0.0300</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>设计评审费</span>
                    <van-tag type="primary" round @click="showPriceToast('无说明')">0.0007</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>建设管理费</span>
                    <van-tag type="primary" round @click="showPriceToast('无说明')">0.1378</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>监理费</span>
                    <van-tag type="primary" round @click="showPriceToast('无说明')">0.0431</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>结算费</span>
                    <van-tag type="primary" round @click="showPriceToast('无说明')">0.0094</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>决算费</span>
                    <van-tag type="primary" round @click="showPriceToast('无说明')">0.0140</van-tag>
                </van-grid-item>
                <van-grid-item class="custom-grid-item">
                    <span>总计</span>
                    <van-tag type="danger" round @click="showPriceToast('基本配置单价总计')">{{ baseP.toFixed(4) }}</van-tag>
                </van-grid-item>
            </van-grid>


            <van-cell-group title="可选配置 单瓦造价(元/W)" style="margin-bottom: 10px;">
                <van-cell center style="padding: 10px;">
                    <van-radio-group class="radio-group" v-model="voltageAccess" direction="horizontal">
                        <van-radio :name="lowVoltageAccess" checked-color="#07c160"
                            @click="totalPrice = null">低压接入<van-tag mark type="primary"
                                @click="showPriceToast(lowVoltageAccessMessage)">{{
                                    lowVoltageAccess.toFixed(4)
                                }}</van-tag>
                        </van-radio>
                        <van-radio :name="highVoltageAccess" checked-color="#07c160"
                            @click="totalPrice = null">高压接入<van-tag mark type="primary"
                                @click="showPriceToast(highVoltageAccessMessage)">{{
                                    highVoltageAccess.toFixed(4) }} </van-tag>
                        </van-radio>
                    </van-radio-group>
                </van-cell>

                <!-- <van-switch-cell v-model="roofRenewal" title="屋面换新" style="text-align: left;font-size: 16px;" />
                <van-switch-cell v-model="roofStrengthening" title="加固费用" style="text-align: left;font-size: 16px;" />
                <van-switch-cell v-model="waterproofing" title="防水费用" style="text-align: left;font-size: 16px;" /> -->
                <!-- <van-cell class="custom-cell" style="padding: 5px;">
                    <template #right-icon>
                        <van-switch v-model="roofRenewal" size="22" style="margin-right: 20px;" active-color="#07c160"
                            @change="totalPrice = null" />
                    </template>
                    <template #title>
                        <div class="title-container">
                            <span style="margin-left: -7em;" class="custom-title">屋面换新 </span>
                            <van-tag mark type="primary" @click="showPriceToast(roofRenewalM)">{{
                                roofRenewalP.toFixed(4)
                            }}</van-tag>
                        </div>
                    </template>
                </van-cell> -->
                <van-cell>
                    <template #right-icon>
                        <van-switch v-model="roofStrengthening" size="24" style="margin-right: 20px;"
                            active-color="#07c160" @change="totalPrice = null" />
                    </template>
                    <template #title>
                        <span style="margin-left: -7em;" class="custom-title">地面硬化 </span>
                        <van-tag mark type="primary" @click="showPriceToast(roofStrengtheningM)">{{
                            roofStrengtheningP.toFixed(4) }}</van-tag>
                    </template>
                </van-cell>
                <!-- <van-cell>
                    <template #right-icon>
                        <van-switch v-model="waterproofing" size="24" style="margin-right: 20px;" active-color="#07c160"
                            @change="totalPrice = null" />
                    </template>
                    <template #title>
                        <span style="margin-left: -7em;" class="custom-title">防水费用 </span>
                        <van-tag mark type="primary" @click="showPriceToast(waterproofingM)">{{
                            waterproofingP.toFixed(4) }}</van-tag>
                    </template>
                </van-cell> -->
            </van-cell-group>
            <van-button type="primary" block round @click="calculatePrice">参考造价</van-button>
            <div v-if="totalPrice" class="result">
                <!-- <van-cell title="参考造价" :value="`¥${totalPrice.toFixed(2)}万元`" /> -->
                <van-submit-bar disabled :price="totalPrice" suffix-label="万元" button-color="white"
                    class="custom-submit-bar">
                    <span style="font-size: 12px;margin-left: 100px;color: gray;">综合单价</span>
                    <van-tag type="success" round> {{ (totalPrice/installCapacity).toFixed(4) }}</van-tag>
                </van-submit-bar>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button, Cell, CellGroup, Field, Grid, GridItem, NavBar, Radio, RadioGroup, SubmitBar, Switch, SwitchCell, Tag, Toast } from 'vant';

Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(SwitchCell)
Vue.use(SubmitBar)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Toast)
Vue.use(Cell)
Vue.use(Switch)
Vue.use(Grid)
Vue.use(GridItem)



export default {
    name: 'Home',
    components: {
    },
    methods: {
        showPriceToast(tipMessage) {
            Toast({
                message: tipMessage,
                duration: 2000, // 提示显示的时长（毫秒），设置为 0 表示不自动关闭
                position: 'bottom', // 提示位置，可选值为 'top'、'middle'、'bottom'
            });
        },
        showActionSheet(title, componentName) {
            this.show = true;
            this.currentActionSheetTitle = title;
            this.currentActionSheetComponent = componentName;
        },
        calculatePrice() {
            const basePrice = this.installCapacity * this.baseP; // 基础造价
            let additionalCosts = 0;

            if (this.voltageAccess) {
                additionalCosts += this.installCapacity * this.voltageAccess; // 高压接入费用
            }
            // if (this.roofRenewal) {
            //     additionalCosts += this.installCapacity * this.roofRenewalP; // 屋面换新费用
            // }
            if (this.roofStrengthening) {
                additionalCosts += this.installCapacity * this.roofStrengtheningP; // 加固费用
            }
            // if (this.waterproofing) {
            //     additionalCosts += this.installCapacity * this.waterproofingP; // 防水费用
            // }

            this.totalPrice = basePrice + additionalCosts;
        },

    },
    data() {
        return {
            roofArea: '10000', // 屋顶面积
            height: '小型汽车车位', // 屋顶高度
            installCapacity: 13000, // 装机规模
            installCapacityN: 1300,
            baseP: 2.82730267,
            lowVoltageAccess: 0.04230769,
            lowVoltageAccessMessage: '低压并网柜 400*2+300*1',
            highVoltageAccess: 1.21538462,
            highVoltageAccessMessage: '价格按河南地区考虑，若高压接入，需配备1600kVA变压器以及二次设备,按高压就近接入。若项目在其他区域，具体造价一事一议',
            voltageAccess: 0.04230769,   //默认低压接入
            roofStrengthening: false, // 是否加固
            roofStrengtheningP: 0.61538462,
            roofStrengtheningM: '地面硬化参考价80元/㎡',
            totalPrice: null, // 总造价
            active: 0,
            show: false,
            currentActionSheetTitle: '',
            currentActionSheetComponent: '',
        };
    },

}
</script>

<style scoped>
.content {
    padding: 16px 16px 160px;
}

.container {
    padding: 16px;
}

.result {
    margin-top: 20px;
}

/* Radio Group 样式 */
.radio-group {
    display: flex;
    justify-content: center;
}

/* 单个 Radio 项样式 */
.radio-item {
    margin: 0 10px;
}

.custom-submit-bar {
    bottom: 50px;
    /* 根据导航栏的高度调整 */
}

.custom-submit-bar .van-submit-bar__button {
    display: none;
    /* 隐藏按钮 */
}

.custom-grid {
    line-height: 1.2;
    /* 调整行间距 */
}

.custom-grid-item {
    font-size: 12px;
    /* 减小字体大小 */
}

::v-deep .custom-grid-item .van-grid-item__content {
  padding: 2px !important;
}

</style>