<template>
  <el-container>
    <el-header style="text-align:left;">
      <el-button type="primary" @click="addClass">添加分类</el-button>
    </el-header>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createtime |dateStyle }}</span>
        </template>
      </el-table-column>
      <el-table-column label="分类名称">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作员">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.per }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <dialog-from ref="formDialog" @getQueryModify="getQuery" @closDialog="closDialog"></dialog-from>
    </el-dialog>
  </el-container>
</template>

<script>
import Store from "../../store";
import dialogFrom from "./dialog";
//安装npm install dayjs --save
//dayjs插件引入用于转化时间,
import day from "dayjs";
export default {
  components: {
    dialogFrom,
  },
  filters: {
    dateStyle(val) {
      return day(val).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      modifyData: {},
      modifyFlag: false,
    };
  },
  mounted() {
    this.$store.dispatch("getClass").then((res) => {
      this.tableData = res.data;
    });
  },
  methods: {
    addClass() {
      this.dialogTableVisible = true;
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogTableVisible = true;
      this.$nextTick(() => {
        console.log(this.$refs.formDialog);
        this.$refs.formDialog.getPro(row);
        this.modifyFlag = true;
      });
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.$store.dispatch("delClass", row).then((res) => {
            this.tableData = res.data;
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    getQuery(val) {
      console.log(val);
      if (this.modifyFlag) {
        this.$store
          .dispatch("modClass", {
            classfiy: val.name,
            per: val.per,
            id: val._id,
          })
          .then((res) => {
            this.tableData = res.data;
            console.log(this.tableData);
          });
      } else {
        this.$store
          .dispatch("addClass", { classfiy: val.name, per: val.per })
          .then((res) => {
            this.tableData = res.data;
            console.log(this.tableData);
          });
      }
      this.dialogTableVisible = false;
      this.modifyFlag = false;
    },
    closDialog() {
      this.dialogTableVisible = false;
    },
  },
};
</script>