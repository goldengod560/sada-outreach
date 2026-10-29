# Sada Print Shop Outreach

A small web app for emailing print shops about Sada's tear-away tag blanks: a lead list, a 3-step email sequence, and a daily send queue. Emails open pre-filled in Outlook, sent from sales@bureen.com.

Hosted on GitHub Pages. Data lives in Supabase, behind a sign-in, so the lead list is never in this repo.

## One-time setup

1. **Supabase database**
   - In your Supabase project, open **SQL Editor → New query**.
   - Paste everything from `setup.sql` (kept out of this repo because it contains the lead list) and click **Run**. This creates the tables, locks them to approved emails, and loads the current 37 Louisiana shops.

2. **Supabase sign-in links**
   - Go to **Authentication → URL Configuration**.
   - Set **Site URL** to `https://goldengod560.github.io/sada-outreach/`.
   - Add the same address under **Redirect URLs**.

3. **Keys**
   - Copy the **Project URL** and **anon public** key from **Project Settings → API** into `config.js`.
   - Never put the `service_role` key in this repo.

4. **GitHub Pages**
   - Repo **Settings → Pages → Build and deployment**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.

## Giving someone else access

Run this in the Supabase SQL Editor:

```sql
insert into public.allowed_users (email) values ('their@email.com');
```

## Sending tips

- Send 20 to 40 a day from sales@bureen.com so bureen.com stays out of spam folders.
- Make sure DKIM is turned on for bureen.com in the Microsoft 365 admin center.
- Keep the business address and opt-out line in every email (required by CAN-SPAM).
