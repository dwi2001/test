/*
 Navicat Premium Data Transfer

 Source Server         : crud_db
 Source Server Type    : MySQL
 Source Server Version : 100413
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 100413
 File Encoding         : 65001

 Date: 18/08/2020 20:59:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_task
-- ----------------------------
DROP TABLE IF EXISTS `tb_task`;
CREATE TABLE `tb_task`  (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `task` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `sub_task` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `tanggal_buat` date NULL DEFAULT NULL,
  `tanggal_edit` date NULL DEFAULT NULL,
  `status` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`task_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_task
-- ----------------------------
INSERT INTO `tb_task` VALUES (1, 'beberes', 'kamar', '2020-08-14', NULL, 'pending');
INSERT INTO `tb_task` VALUES (2, 'memancing', 'di balong', '2020-08-18', NULL, 'pending');
INSERT INTO `tb_task` VALUES (3, 'olahraga', 'lari', '2020-08-18', NULL, 'done');

SET FOREIGN_KEY_CHECKS = 1;
