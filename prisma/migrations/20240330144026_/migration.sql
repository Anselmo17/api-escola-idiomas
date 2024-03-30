-- CreateTable
CREATE TABLE `users_db` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `created` VARCHAR(191) NOT NULL,
    `updated` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_db_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
