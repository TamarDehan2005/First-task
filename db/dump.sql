--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5 (Debian 17.5-1.pgdg120+1)
-- Dumped by pg_dump version 17.5 (Debian 17.5-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    "UserId" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Email" character varying(100) NOT NULL,
    "PasswordHash" character varying(200) NOT NULL,
    "FullName" character varying(100) NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "PK_Users" PRIMARY KEY ("UserId"),
    CONSTRAINT "UQ_Users_Email" UNIQUE ("Email")
);

--
-- Name: Invoices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Invoices" (
    "InvoiceId" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "InvoiceNumber" character varying(50) NOT NULL,
    "IssueDate" timestamp with time zone NOT NULL,
    "DueDate" timestamp with time zone,
    "TotalAmount" numeric(18,2) NOT NULL,
    "PaidAmount" numeric(18,2) NOT NULL,
    "Status" integer NOT NULL,
    "ClientName" character varying(50),
    "ClientEmail" character varying(50),
    "Description" character varying(200),
    "CreatedAt" timestamp with time zone NOT NULL,
    "UserId" integer NOT NULL,
    CONSTRAINT "PK_Invoices" PRIMARY KEY ("InvoiceId"),
    CONSTRAINT "FK_Invoices_Users_UserId" FOREIGN KEY ("UserId") REFERENCES public."Users"("UserId")
);

--
-- Name: Payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Payments" (
    "PaymentId" integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    "Amount" numeric(18,2) NOT NULL,
    "Currency" integer NOT NULL,
    "PaymentDate" timestamp with time zone NOT NULL,
    "Status" integer NOT NULL,
    "Method" integer NOT NULL,
    "ReferenceNumber" character varying(100),
    "Notes" character varying(500),
    "InvoiceId" integer NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UserId" integer NOT NULL,
    CONSTRAINT "PK_Payments" PRIMARY KEY ("PaymentId"),
    CONSTRAINT "FK_Payments_Invoices_InvoiceId" FOREIGN KEY ("InvoiceId") REFERENCES public."Invoices"("InvoiceId") ON DELETE CASCADE,
    CONSTRAINT "FK_Payments_Users_UserId" FOREIGN KEY ("UserId") REFERENCES public."Users"("UserId")
);

--
-- Name: __EFMigrationsHistory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL,
    CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId")
);

-- PostgreSQL database dump complete