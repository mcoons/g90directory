--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: michael
--

CREATE TABLE public.knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE public.knex_migrations OWNER TO michael;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: michael
--

CREATE SEQUENCE public.knex_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_id_seq OWNER TO michael;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: michael
--

ALTER SEQUENCE public.knex_migrations_id_seq OWNED BY public.knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: michael
--

CREATE TABLE public.knex_migrations_lock (
    index integer NOT NULL,
    is_locked integer
);


ALTER TABLE public.knex_migrations_lock OWNER TO michael;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE; Schema: public; Owner: michael
--

CREATE SEQUENCE public.knex_migrations_lock_index_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.knex_migrations_lock_index_seq OWNER TO michael;

--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: michael
--

ALTER SEQUENCE public.knex_migrations_lock_index_seq OWNED BY public.knex_migrations_lock.index;


--
-- Name: student; Type: TABLE; Schema: public; Owner: michael
--

CREATE TABLE public.student (
    id integer NOT NULL,
    first_name text,
    last_name text,
    photo text,
    hometown_lat text,
    hometown_long text,
    prev_occupation text
);


ALTER TABLE public.student OWNER TO michael;

--
-- Name: student_id_seq; Type: SEQUENCE; Schema: public; Owner: michael
--

CREATE SEQUENCE public.student_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.student_id_seq OWNER TO michael;

--
-- Name: student_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: michael
--

ALTER SEQUENCE public.student_id_seq OWNED BY public.student.id;


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: michael
--

ALTER TABLE ONLY public.knex_migrations ALTER COLUMN id SET DEFAULT nextval('public.knex_migrations_id_seq'::regclass);


--
-- Name: knex_migrations_lock index; Type: DEFAULT; Schema: public; Owner: michael
--

ALTER TABLE ONLY public.knex_migrations_lock ALTER COLUMN index SET DEFAULT nextval('public.knex_migrations_lock_index_seq'::regclass);


--
-- Name: student id; Type: DEFAULT; Schema: public; Owner: michael
--

ALTER TABLE ONLY public.student ALTER COLUMN id SET DEFAULT nextval('public.student_id_seq'::regclass);


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: michael
--

COPY public.knex_migrations (id, name, batch, migration_time) FROM stdin;
3	20180803194617_g90.js	1	2018-08-05 19:17:39.784-06
\.


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: michael
--

COPY public.knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: michael
--

COPY public.student (id, first_name, last_name, photo, hometown_lat, hometown_long, prev_occupation) FROM stdin;
1	R.J.	Kirkhope	https://cf.ltkcdn.net/small-pets/images/orig/200801-2121x1414-goldfish2.jpg	32.715738	-117.161084	Stuntman
2	Josh	Bardlsey	http://www.yourpurebredpuppy.com/dogbreeds/photos-RS/sheltiesf2.jpg	39.548079	-104.973933	Valet
3	Mark	Newcomb	https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12194915/French-Bulldog-on-White-14.jpg	38.879178	-99.326770	Developer
4	Matthew	Riach	http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-19.jpg	53.408371	-2.991573	Road map salesman
5	Levi	Boenish	http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-4.jpg	40.014986	-105.270546	Manager
6	Tom	Clukies	https://i.ytimg.com/vi/dwO06H-IF80/hqdefault.jpg	39.548079	-104.973933	Outdoorsman
7	William	Kirkhope	https://i.pinimg.com/736x/21/25/c0/2125c0d98eb7b290e5903355ac0f8e6b--christmas-trees-christmas-cats.jpg	32.715738	-117.161084	Personal Trainer
8	Josh	Levy	https://westiegifts.com/11472-large_default/bandana-westie-greetings-card.jpg	-26.204103	28.047305	Lesser Developer
9	Ben	Austin	http://www.sheepadoodles.org/uploads/8/2/1/7/82172392/3675770.jpg?603	39.739236	-104.990251	Social Work
10	Natalie	Todd	https://laughingsquid.com/wp-content/uploads/2016/01/cat-banana.png	61.218056	-149.900278	Technical Recruiter
11	Eldon	Dahlin	http://www.dogwallpapers.net/wallpapers/cute-rottweiler-dog-photo.jpg	37.404094	-120.850474	Customer Service Rep
12	Tiffany	Ricks	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj4X16RkoIqAFunD36VIldA-y8qr3GH13oe7i_Ao88zE6R_u3Aw	33.4942	111.9261	CNA
13	George	Chios	https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224425/Shiba-Inu-Care.jpg	39.522455	-76.444740	Audio Engineer
14	Danny	Pifer	https://i.kym-cdn.com/photos/images/original/000/823/256/8f5.jpg	37.7749	122.4194	QA Tester
15	Kimberly	Hermosillo	http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-22.jpg	39.739236	-104.990251	Student
16	Austin	Loveless	https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg	30.367420	-89.092816	Navy
17	Jeff	Strunk	https://i.pinimg.com/originals/fc/ea/9a/fcea9a5369ebbdca95dca1c0aa1e1a51.jpg	39.122562	-84.135768	Financial Consultant
18	Ciaran	Guha-Gilford	http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-5.jpg	38.9876	76.8205	Lab Rat
19	Michael	Coons	https://i.huffpost.com/gen/3754046/original.jpg	41.079273	85.139351	Director of Information Technology
20	Josh	Robbs	https://images.pexels.com/photos/137049/pexels-photo-137049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350	37.122366	-76.345777	Editorial Assistant
21	Belinda	Galiano	http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-14.jpg	8.569824	-71.180499	Classical Pianist
22	Thomas	Lee	https://i.ytimg.com/vi/OqQPv78AMw0/maxresdefault.jpg	38.878487	-104.869766	Manager of Strange People
23	Ryan	McCrory	http://cdn.smosh.com/wp-content/uploads/bloguploads/cwolf-1.jpg	39.739236	-104.990251	US Army
24	Matthew	Huston	https://buzzsharer.com/wp-content/uploads/2015/11/cute-bengal-cat-lying1.jpg	39.613319	-105.016647	Valet
\.


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: michael
--

SELECT pg_catalog.setval('public.knex_migrations_id_seq', 3, true);


--
-- Name: knex_migrations_lock_index_seq; Type: SEQUENCE SET; Schema: public; Owner: michael
--

SELECT pg_catalog.setval('public.knex_migrations_lock_index_seq', 1, true);


--
-- Name: student_id_seq; Type: SEQUENCE SET; Schema: public; Owner: michael
--

SELECT pg_catalog.setval('public.student_id_seq', 31, true);


--
-- Name: knex_migrations_lock knex_migrations_lock_pkey; Type: CONSTRAINT; Schema: public; Owner: michael
--

ALTER TABLE ONLY public.knex_migrations_lock
    ADD CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: michael
--

ALTER TABLE ONLY public.knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: student student_pkey; Type: CONSTRAINT; Schema: public; Owner: michael
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

