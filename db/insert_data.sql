-- הכנסת משתמשים לדוגמה (סיסמה: admin123)
-- הסיסמה מוצפנת עם bcrypt: $2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw
-- תוכל ליצור hash חדש עם אתר כמו https://bcrypt-generator.com/

INSERT INTO public."Users" ("Email", "PasswordHash", "FullName", "CreatedAt") VALUES
('admin1@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin One', NOW()),
('admin2@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Two', NOW()),
('admin3@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Three', NOW()),
('admin4@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Four', NOW()),
('admin5@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Five', NOW()),
('admin6@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Six', NOW()),
('admin7@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Seven', NOW()),
('admin8@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Eight', NOW()),
('admin9@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Nine', NOW()),
('admin10@example.com', '$2a$12$KIXQJwQwQwQwQwQwQwQwQeQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw', 'Admin Ten', NOW()),
('dg0548457000@gmail.com', '$2a$12$pgC5UQeRhisZWJaTJktvTOv686.6KlLjYtMYS8e6DXBTuSMivZUWG', 'Dina', NOW()),
('t6779103@gmail.com', '$2a$12$pUzN71v8K0bS5LBAwNWvDOMi2IureLu7FtV5oPisLFrxwxR66POA2', 'Tamar', NOW());

INSERT INTO public."Invoices" ("InvoiceNumber", "IssueDate", "DueDate", "TotalAmount", "PaidAmount", "Status", "ClientName", "ClientEmail", "Description", "CreatedAt", "UserId")
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
    NOW(),
    (FLOOR(random() * 12) + 1)
FROM generate_series(1,300) AS s(i);

INSERT INTO public."Payments" ("Amount", "Currency", "PaymentDate", "Status", "Method", "ReferenceNumber", "Notes", "InvoiceId", "CreatedAt", "UserId")
SELECT
    ROUND(((random() * 500) + 50)::numeric, 2),
    (FLOOR(random() * 4))::int,
    NOW() - (random()*365)::int * INTERVAL '1 day',
    (FLOOR(random() * 4))::int,
    (FLOOR(random() * 5))::int,
    'REF' || LPAD(s.i::text, 6, '0'),
    'Notes for payment ' || s.i,
    (FLOOR(random() * 300) + 1),
    NOW(),
    (FLOOR(random() * 12) + 1)
FROM generate_series(1,300) AS s(i);