
INSERT INTO public."Invoices" ("InvoiceNumber", "IssueDate", "DueDate", "TotalAmount", "PaidAmount", "Status", "ClientName", "ClientEmail", "Description", "CreatedAt")
SELECT
    'INV-' || LPAD(i::text, 4, '0'),
    NOW() - (random()*365)::int * INTERVAL '1 day',
    NOW() + (random()*90)::int * INTERVAL '1 day',
    ROUND(((random() * 1000) + 100)::numeric, 2),
    0,
    (FLOOR(random() * 5))::int,
    'Client ' || (i % 50 + 1),
    'client' || (i % 50 + 1) || '@example.com',
    'Invoice description ' || i,
    NOW()
FROM generate_series(1,100) AS s(i);

INSERT INTO public."Payments" ("Amount", "Currency", "PaymentDate", "Status", "Method", "ReferenceNumber", "Notes", "InvoiceId", "CreatedAt")
SELECT
    ROUND(((random() * 500) + 50)::numeric, 2),
    (FLOOR(random() * 4))::int,
    NOW() - (random()*365)::int * INTERVAL '1 day',
    (FLOOR(random() * 4))::int,
    (FLOOR(random() * 5))::int,
    'REF' || LPAD(s.i::text, 6, '0'),
    'Notes for payment ' || s.i,
    (FLOOR(random() * 100) + 1),
    NOW()
FROM generate_series(1,100) AS s(i);
