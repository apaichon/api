SELECT *
  FROM information_schema.columns
 WHERE table_schema = 'your_schema'
   AND table_name   = 'your_table'
     ;


-- Master Table List
  transStatus
  accountProvider
  accountStatus
  activatePurpose
  personalPrefix
  gender
  bookBank
  bank
  historyType
  contentType
  mediaType
  addressType
  thumbol
  amphor
  province
  zipcode
    - thumbol
    - amphor
    - province
  paidStatus
  companyCategory
  paymentStatus
  accountingJournalType
  newsCategory
  genre
  salesCondition
  role
  menu
  rolemenus
  rolemembers
  distributionChannel
  news
  media
  previewVideo
  buyerGroup
  claimAction
  company
  creditTerm
  businessRules
  
  -- Table: public.transstatus

-- DROP TABLE public.transstatus;

CREATE TABLE public.transstatus
(
    id integer NOT NULL DEFAULT nextval('transstatus_id_seq'::regclass),
    name_en_us character varying(50) COLLATE pg_catalog."default",
    name_th_th character varying(50) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "createdBy" character varying(50) COLLATE pg_catalog."default",
    "updatedAt" timestamp with time zone,
    "updatedBy" character varying(50) COLLATE pg_catalog."default",
    "isActive" boolean NOT NULL,
    CONSTRAINT transstatus_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.transstatus
    OWNER to thairath;