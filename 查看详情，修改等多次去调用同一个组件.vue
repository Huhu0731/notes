<template>
  <div>
    <!-- 修改页面 -->
    /**
    1-----destroy-on-close        关闭时销毁  Dialog 中的元素
    2-----close-on-click-modal	是否可以通过点击 modal 关闭 Dialog
    3-----<important-data-change-revise>   // 修改的组件
    4------v-if="ReviseDialogVisible"  很重要
    */
    <el-dialog
      title="修改"
      :visible.sync="ReviseDialogVisible"
      :destroy-on-close="true"
      :close-on-click-modal="false"
      width="60%"
    >
      <div style="min-height:300px;">
        <important-data-change-revise
          v-if="ReviseDialogVisible"
          v-on:RevisechildByValue="RevisechildByValue"
          :detailId="detailId"
        />
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ReviseDialogVisible: false // 修改弹框
    };
  },
  methods: {}
};
</script>
