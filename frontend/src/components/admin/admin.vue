<template>
  <div>
    <el-header style="border-bottom:solid 1px red">Admin</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>管理面板
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/article">文章管理</el-menu-item>
              <el-menu-item index="/admin/classfiy">分类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>