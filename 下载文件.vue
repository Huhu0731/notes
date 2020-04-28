<template>
  <div>
    <!-- 复制对象 -->
    Object.assign({}, this.form);
  </div>
</template>
<script>
export default {
  methods: {
    // 下载文件的例子
    export() {
      exportRoserexportRoser(this.form)
        .then(res => {
          console.log(res.headers);
          if (res && res.status === 200) {
            this.exportloading = false;
            if (window.navigator.msSaveOrOpenBlob) {
              // IE
              try {
                var blobObject = new Blob([encodeURI(res.data)]);
                window.navigator.msSaveOrOpenBlob(blobObject, fileName);
              } catch (e) {
                console.log(e);
              }
            } else {
              // console.log(res);
              var blob = new Blob([res.data], {
                type: "application/octet-stream;charset=UTF-8"
              });
              let _this = this;
              if (res.data.type === "application/json") {
                // 这里是接口报错  弹出报错信息 而不是把错误信息下载在表格里
                var reader = new FileReader();
                reader.readAsText(blob, "utf-8");
                reader.onload = function(e) {
                  let resultObj = JSON.parse(reader.result);
                  if (resultObj.code !== 0) {
                    _this.$message({ message: resultObj.msg, type: "error" });
                  }
                };
              } else {
                var downloadElement = document.createElement("a");
                downloadElement.download = `${this.termName}${this.levelName}${this.gradeName}${this.className}学生操行评语列表.xls`;
                downloadElement.href = window.URL.createObjectURL(blob); // 创建下载的链接
                // console.log(downloadElement.href);
                downloadElement.click(); // 点击下载
                document.body.appendChild(downloadElement);
                document.body.removeChild(downloadElement); // 下载完成移除元素
                window.URL.revokeObjectURL(downloadElement.href); // 释放掉blob对象
              }
            }
          }
        })
        .catch(() => {
          this.exportloading = false;
        });
    }
  }
};
</script>
