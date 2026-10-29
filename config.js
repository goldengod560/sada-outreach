// Fill these in from Supabase → Project Settings → API.
// The anon key is safe to publish: the database only lets approved emails read or change data.
// Never put the service_role key here.
window.SADA_CONFIG = {
  supabaseUrl: "",       // e.g. https://abcdefgh.supabase.co
  supabaseAnonKey: "",   // the "anon public" key
  senderEmail: "sales@bureen.com",
  // "outlook365" for a Microsoft 365 business mailbox, "outlookcom" for a personal Outlook.com account
  mailApp: "outlook365"
};
