// From Supabase → Project Settings → API Keys.
// The publishable key is safe to publish: the database only lets approved emails read or change data.
// Never put the service_role key here.
window.SADA_CONFIG = {
  supabaseUrl: "https://dnvinjelexuicqmlwsam.supabase.co",
  supabaseAnonKey: "sb_publishable_SQfdgMc4oKT_oYF5ng7FIQ_01mtEW2X",
  senderEmail: "sales@bureen.com",
  // "outlook365" for a Microsoft 365 business mailbox, "outlookcom" for a personal Outlook.com account
  mailApp: "outlook365"
};
