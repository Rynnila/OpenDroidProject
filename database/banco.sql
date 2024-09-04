CREATE DATABASE opendroid;
USE opendroid;

CREATE TABLE Usuario (
	id_usuario 	INT 			NOT NULL 	PRIMARY KEY 	AUTO_INCREMENT,
    imagem 		LONGBLOB 		NULL,
    email 		VARCHAR(256) 	NOT NULL,
    senha 		VARCHAR(256) 	NOT NULL,
	status 		VARCHAR(256) 	NOT NULL
);

CREATE TABLE Documento (
	id_documento	INT				NOT NULL	PRIMARY KEY		AUTO_INCREMENT,
    nome			VARCHAR(256)	NOT NULL,
    descricao		VARCHAR(256)	NOT NULL,
    arquivo			LONGBLOB		NOT NULL
);