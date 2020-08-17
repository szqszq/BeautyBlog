<template>
  <el-form ref="formSub" :model="form" label-width="80px">
    <el-form-item label="分类名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="操作员" prop="per">
      <el-select style="width:100%;" v-model="form.per" placeholder="请选择活动区域">
        <el-option label="操作员1" value="操作员1"></el-option>
        <el-option label="操作员2" value="操作员2"></el-option>
        <el-option label="操作员3" value="操作员3"></el-option>
        <el-option label="操作员4" value="操作员4"></el-option>
        <el-option label="操作员5" value="操作员5"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('formSub')">确定</el-button>
      <el-button @click="onClose">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        per: "",
      },
    };
  },
  methods: {
    onSubmit() {
      var formData = JSON.parse(JSON.stringify(this.form));
      this.$emit("getQueryModify", formData);
      this.$refs.formSub.resetFields();
    },
    getPro(val) {
      this.form = val;
    },
    onClose() {
      this.$emit("closDialog");
      this.$refs.formSub.resetFields();
    },
  },
};
</script>