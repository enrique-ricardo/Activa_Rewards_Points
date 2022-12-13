-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: xa_char_sheet
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activa_work`
--

DROP TABLE IF EXISTS `activa_work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activa_work` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` text NOT NULL,
  `resume` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activa_work`
--

LOCK TABLES `activa_work` WRITE;
/*!40000 ALTER TABLE `activa_work` DISABLE KEYS */;
/*!40000 ALTER TABLE `activa_work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activa_work_student_rel`
--

DROP TABLE IF EXISTS `activa_work_student_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activa_work_student_rel` (
  `id_student` int NOT NULL,
  `id_work` int NOT NULL,
  `xp_points` int DEFAULT NULL,
  `feedback` text,
  PRIMARY KEY (`id_student`,`id_work`),
  KEY `activa_work_student_rel_fk1` (`id_work`),
  CONSTRAINT `activa_work_student_rel_fk0` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`),
  CONSTRAINT `activa_work_student_rel_fk1` FOREIGN KEY (`id_work`) REFERENCES `activa_work` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activa_work_student_rel`
--

LOCK TABLES `activa_work_student_rel` WRITE;
/*!40000 ALTER TABLE `activa_work_student_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `activa_work_student_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activa_work_tech_skill_rel`
--

DROP TABLE IF EXISTS `activa_work_tech_skill_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activa_work_tech_skill_rel` (
  `id_work` int NOT NULL,
  `id_tech_skill` int NOT NULL,
  PRIMARY KEY (`id_work`,`id_tech_skill`),
  KEY `activa_work_tech_skill_rel_fk1` (`id_tech_skill`),
  CONSTRAINT `activa_work_tech_skill_rel_fk0` FOREIGN KEY (`id_work`) REFERENCES `activa_work` (`id`),
  CONSTRAINT `activa_work_tech_skill_rel_fk1` FOREIGN KEY (`id_tech_skill`) REFERENCES `tech_skill` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activa_work_tech_skill_rel`
--

LOCK TABLES `activa_work_tech_skill_rel` WRITE;
/*!40000 ALTER TABLE `activa_work_tech_skill_rel` DISABLE KEYS */;
/*!40000 ALTER TABLE `activa_work_tech_skill_rel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `name` varchar(40) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(50) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `finish_date` date DEFAULT NULL,
  `description` text NOT NULL,
  `current_work` tinyint(1) NOT NULL,
  `id_student` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `job_fk0` (`id_student`),
  CONSTRAINT `job_fk0` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward`
--

DROP TABLE IF EXISTS `reward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user_sender` int NOT NULL,
  `id_user_rewarded` int NOT NULL,
  `xp_points` int NOT NULL,
  `date` date NOT NULL,
  `description` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reward_fk0` (`id_user_sender`),
  KEY `reward_fk1` (`id_user_rewarded`),
  CONSTRAINT `reward_fk0` FOREIGN KEY (`id_user_sender`) REFERENCES `user` (`id`),
  CONSTRAINT `reward_fk1` FOREIGN KEY (`id_user_rewarded`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward`
--

LOCK TABLES `reward` WRITE;
/*!40000 ALTER TABLE `reward` DISABLE KEYS */;
INSERT INTO `reward` VALUES (1,3,5,10,'2022-12-13','te envio porque quiero'),(2,5,4,15,'2022-12-13','me gustas'),(3,3,6,12,'2022-12-13','venga que tu vales'),(4,6,5,13,'2022-12-15','futuro presente ahora'),(5,5,3,12,'2021-10-09','PASADO presente'),(6,5,8,8,'2020-08-01','presente del pasado'),(7,6,7,43,'2019-04-08','papa te da'),(8,8,3,3,'2019-03-25','pepito te envia'),(9,8,4,5,'2019-03-25','pepito te regala'),(10,8,6,2,'2022-12-22','blabaculo');
/*!40000 ALTER TABLE `reward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessiontbl`
--

DROP TABLE IF EXISTS `sessiontbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessiontbl` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessiontbl`
--

LOCK TABLES `sessiontbl` WRITE;
/*!40000 ALTER TABLE `sessiontbl` DISABLE KEYS */;
INSERT INTO `sessiontbl` VALUES ('52z6w2z0su9ybIIljw9egNiade1zW3Pe',1671017875,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-12-14T11:37:54.812Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQyQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWQiOjgsImlhdCI6MTY3MDkzMTQ3NH0.6x6XijbHRYt8zrN81xeeZN04iE_Rn0wJERHepU-d5b8\"}'),('D_MUVUXlO_1OAH4D1mqHRff73CCfnewQ',1671018575,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-12-14T11:38:22.092Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQyQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWQiOjgsImlhdCI6MTY3MDkzMTUwMn0.u9nGy7ZHxrGp7XnjsDarhhgNWE2klTz_gh19itFN39Q\"}'),('Na_c9ie0CaF2Yoy2InkR_Q8gclLThOY_',1671019215,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-12-14T11:59:43.609Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQyQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWQiOjgsImlhdCI6MTY3MDkzMjc4M30.YMjM0Klh1GZc6ZWevNJrmBxJsHFesRfJcIbVRrYwXeI\"}'),('RIwelTk__r2jlzwMe_6_sWVRBNe2hBvv',1671017343,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-12-14T11:27:07.603Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAMTIzNC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpZCI6MywiaWF0IjoxNjcwOTMwODI3fQ.pl_3w4Ks4biVFtXEb_yrJGsr80luMFXQmG_4htyspvY\"}'),('XjrkaXLvffoLzJCMv3I1a-TjFE_Gy4VQ',1671019168,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-12-14T11:55:18.785Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQyQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWQiOjgsImlhdCI6MTY3MDkzMjUxOH0.vyhXuebNtcHDgM5cpE9wtABzpQuuG-KDaoqZ_w8iXzg\"}'),('Z38qe_mlosONcTej3pr0ik6Y6SSKBS-r',1671056082,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-12-14T22:12:51.974Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQyQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWQiOjgsImlhdCI6MTY3MDk2OTU3MX0.4zxP7QIfKeCzrSMw8lgd9qGVM9GzpOl32RbsbTM7vU0\"}'),('cPpo-XxbJM2qBMPCMogRe2gPFLOA3_qH',1671017860,'{\"cookie\":{\"originalMaxAge\":86399999,\"expires\":\"2022-12-14T11:37:01.918Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAMTIzNC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpZCI6MywiaWF0IjoxNjcwOTMxNDIxfQ.tIXfc8rD1_0CQbVa9Hzi_up531pG9jwEO0rOccyWm2E\"}'),('fngXfDWD-bwfVg-G3GVEv71UtjLZckH8',1671017646,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-12-14T11:34:03.448Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzRAMTIzNC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpZCI6MywiaWF0IjoxNjcwOTMxMjQzfQ.PbSzYsjZ-WKuul6sNQB3tCZRCuBYB5XVgrUdqLLOLnc\"}'),('vMPAzWX3ymxslUsKBATdCFWOULmv7q8e',1671018722,'{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2022-12-14T11:49:57.227Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":true},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0dWRlbnQyQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWQiOjgsImlhdCI6MTY3MDkzMjE5N30.6G8NdDAKTXFJoP81hs5TwlgoNLcIZ44TfarmKB1MWo4\"}');
/*!40000 ALTER TABLE `sessiontbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soft_skill`
--

DROP TABLE IF EXISTS `soft_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soft_skill` (
  `id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `id_student` int NOT NULL,
  KEY `soft_skill_fk0` (`id_student`),
  CONSTRAINT `soft_skill_fk0` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soft_skill`
--

LOCK TABLES `soft_skill` WRITE;
/*!40000 ALTER TABLE `soft_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `soft_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `first_surname` varchar(30) NOT NULL,
  `second_surname` varchar(30) DEFAULT NULL,
  `email_personal` varchar(60) NOT NULL,
  `email_activa` varchar(60) DEFAULT NULL,
  `phone_number` varchar(14) NOT NULL,
  `avatar` blob,
  `cv` blob,
  `description` text,
  `zip_code` varchar(5) NOT NULL,
  `id_user` int NOT NULL,
  `prom` int NOT NULL,
  `activa_points_balance` int NOT NULL DEFAULT '100',
  PRIMARY KEY (`id`),
  KEY `student_fk0` (`id_user`),
  CONSTRAINT `student_fk0` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (3,'Enrique','Montes','Ricardo','info@enriquericardo.com','enrique.ricardo@xarxatecactiva.com','627866951',NULL,NULL,NULL,'12001',3,2,150),(5,'ismar','2','de paula junior','123@123.com',NULL,'689215415',NULL,NULL,'Escribe una breve descripción sobre ti...','12593',4,2,0),(6,'Quique','3','de paula junior','123@123.com',NULL,'689215415',NULL,NULL,'Escribe una breve descripción sobre ti...','12593',5,123,0),(11,'Sabini','Bambini','pipini','sabini@sabini.com','1234@1234.com','666666666',NULL,NULL,'Escribe una breve descripción sobre ti...','12000',6,2,100),(12,'student2','student ','dos','student2@gmail.com','student2@gmail.com','666666666',NULL,NULL,'Escribe una breve descripción sobre ti...','12000',7,2,100),(13,'ismar','123','de paula junior','ismar_j@yahoo.com.br','student2@gmail.com','689215415',NULL,NULL,'Escribe una breve descripción sobre ti...','12593',8,2,100);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tech_skill`
--

DROP TABLE IF EXISTS `tech_skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tech_skill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `max_xp_points` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tech_skill`
--

LOCK TABLES `tech_skill` WRITE;
/*!40000 ALTER TABLE `tech_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `tech_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training`
--

DROP TABLE IF EXISTS `training`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `training` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `center` varchar(50) NOT NULL,
  `start_date` date DEFAULT NULL,
  `finish_date` date DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `duration` int NOT NULL,
  `regulated` tinyint(1) NOT NULL,
  `id_student` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `training_fk0` (`id_student`),
  CONSTRAINT `training_fk0` FOREIGN KEY (`id_student`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training`
--

LOCK TABLES `training` WRITE;
/*!40000 ALTER TABLE `training` DISABLE KEYS */;
/*!40000 ALTER TABLE `training` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL,
  `isFirstLogin` tinyint NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'123@123.com','$2b$10$yLLHxNnlTwtbm6cyK/DyAuLeA7aKwDmaoLzZKLV/8h1D6w.vVeZve','admin',0,'2022-12-03 18:23:15'),(3,'1234@1234.com','$2b$10$jWvgjVP9TIqp.wzZGc3ve.yaT9vPG6GC0ME4WwFEr/OJyVVZARWuq','student',0,'2022-12-08 10:35:39'),(4,'12345@12345.com','$2b$10$ozIXP4Tm7eWfELQO6.BSU.k/e3Q.2kW6VfcKmIh0fZICT8Q6zKeYa','student',0,'2022-12-08 11:25:03'),(5,'111@111.com','$2b$10$eZ1fhkSNwUBBB2BAZLfdOuM9zQqJWS3mpplRKXsN02lLpgPPUz4N6','student',0,'2022-12-09 11:08:07'),(6,'11@11.com','$2b$10$L1fbJ9c97Cv4nA9NGFghKOu38wb1y/89nYQiUCWRyPXx6YTo3E3eW','student',0,'2022-12-12 15:53:37'),(7,'student1@gmail.com','$2b$10$7h3XjSSyL8EzsNUxUGEoXOwgrStqNqVwxE8i7xSJn.3Mho4J98MJa','student',0,'2022-12-13 11:29:02'),(8,'student2@gmail.com','$2b$10$kan.VfaTXCvr/LUkKE9BneKZHf/jvgsf5/ee0fQzj.Hd2/Giu2IuK','student',0,'2022-12-13 11:34:29'),(9,'student3@gmail.com','$2b$10$SqMTf2yHlJ0BVOQBrQZgH.ywqGeDZ0h9T6QE5zu5tOGH7AFFXY4T6','student',1,'2022-12-13 11:37:21');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14  0:23:04
