--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contato; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contato (
    fk_id_usuario integer NOT NULL,
    mensagem text NOT NULL
);


--
-- Name: contato_fk_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contato_fk_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contato_fk_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contato_fk_id_usuario_seq OWNED BY public.contato.fk_id_usuario;


--
-- Name: curso; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.curso (
    id integer NOT NULL,
    nome character varying(60) NOT NULL
);


--
-- Name: curso_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.curso_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: curso_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.curso_id_seq OWNED BY public.curso.id;


--
-- Name: endereco; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.endereco (
    fk_id_ong integer NOT NULL,
    logradouro character varying(50) NOT NULL,
    numero character varying(8) NOT NULL,
    bairro character varying(40) NOT NULL,
    cidade character varying(35) NOT NULL,
    estado character varying(30) NOT NULL,
    cep character varying(9) NOT NULL,
    telefone character varying(15) NOT NULL,
    email character varying(40) NOT NULL
);


--
-- Name: endereco_fk_id_ong_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.endereco_fk_id_ong_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: endereco_fk_id_ong_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.endereco_fk_id_ong_seq OWNED BY public.endereco.fk_id_ong;


--
-- Name: ong; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ong (
    id integer NOT NULL,
    nome character varying(80) NOT NULL
);


--
-- Name: ong_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ong_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ong_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ong_id_seq OWNED BY public.ong.id;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    nome character varying(30) NOT NULL,
    email character varying(40) NOT NULL,
    senha character varying(16) NOT NULL
);


--
-- Name: usuario_curso; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.usuario_curso (
    fk_id_usuario integer NOT NULL,
    fk_id_curso integer NOT NULL
);


--
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- Name: contato fk_id_usuario; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contato ALTER COLUMN fk_id_usuario SET DEFAULT nextval('public.contato_fk_id_usuario_seq'::regclass);


--
-- Name: curso id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.curso ALTER COLUMN id SET DEFAULT nextval('public.curso_id_seq'::regclass);


--
-- Name: endereco fk_id_ong; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.endereco ALTER COLUMN fk_id_ong SET DEFAULT nextval('public.endereco_fk_id_ong_seq'::regclass);


--
-- Name: ong id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ong ALTER COLUMN id SET DEFAULT nextval('public.ong_id_seq'::regclass);


--
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- Name: contato contato_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contato
    ADD CONSTRAINT contato_pkey PRIMARY KEY (fk_id_usuario);


--
-- Name: curso curso_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_pkey PRIMARY KEY (id);


--
-- Name: endereco endereco_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT endereco_pkey PRIMARY KEY (fk_id_ong);


--
-- Name: ong ong_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ong
    ADD CONSTRAINT ong_pkey PRIMARY KEY (id);


--
-- Name: usuario_curso usuario_curso_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario_curso
    ADD CONSTRAINT usuario_curso_pk PRIMARY KEY (fk_id_usuario, fk_id_curso);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- Name: contato contato_fk_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contato
    ADD CONSTRAINT contato_fk_id_usuario_fkey FOREIGN KEY (fk_id_usuario) REFERENCES public.usuario(id);


--
-- Name: endereco endereco_fk_id_ong_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT endereco_fk_id_ong_fkey FOREIGN KEY (fk_id_ong) REFERENCES public.ong(id);


--
-- Name: usuario_curso fk_curso; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario_curso
    ADD CONSTRAINT fk_curso FOREIGN KEY (fk_id_curso) REFERENCES public.curso(id);


--
-- Name: usuario_curso fk_usuario; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.usuario_curso
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_id_usuario) REFERENCES public.usuario(id);


--
-- PostgreSQL database dump complete
--

