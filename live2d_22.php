<?php
/*
Plugin Name: Live2D
Version: 1.0
Plugin URL: http://www.bilibili.com
Description: 一只卖萌的22,点击鼠标右键可换皮肤
Author: GEEKiDoS
Author Email: geek_ds@foxmail.com
Author URL: ?????????
For: V3.0+
*/

function init_live2d() {
	?>
					<link rel="stylesheet" href="plugins/live2d_22/css/live2d.css">
	             	<div id="THREETHREE">
           		 	<canvas id="glcanvas" class="THREE-DRAGABLE" width="200" height="250" />
            		<button id="btnChange" class="active">Change Model</button>
       				</div>
         			<script src="plugins/live2d_22/js/live2d.min.js"></script>
					<script src="plugins/live2d_22/js/Live2DFramework.js"></script>
					<script src="plugins/live2d_22/js/utils/MatrixStack.js"></script>
					<script src="plugins/live2d_22/js/utils/ModelSettingJson.js"></script>
					<script src="plugins/live2d_22/js/PlatformManager.js"></script>
					<script src="plugins/live2d_22/js/LAppDefine.js"></script>
					<script src="plugins/live2d_22/js/LAppModel.js"></script>
					<script src="plugins/live2d_22/js/LAppLive2DManager.js"></script>
					<script src="plugins/live2d_22/js/22.js"></script>
					<script>ThisIs22()</script>
<?php
}

addAction('header','init_live2d');